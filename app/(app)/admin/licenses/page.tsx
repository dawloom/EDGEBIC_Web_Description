'use client';

import { useCallback, useEffect, useState } from 'react';

interface License {
  id: string;
  email: string;
  customerName: string;
  amount: number;
  currency: string;
  licenseStatus: string;
  activatedAt: string | null;
  activatedEmail: string | null;
  systemFingerprint: string | null;
  createdAt: string;
  licenseKey: string | null;
  downloadCount: number;
  activationAttempts: number;
  maxActivationAttempts: number;
  activations: Array<{
    id: string;
    status: string;
    ipAddress: string;
    userAgent: string;
    createdAt: string;
    errorMessage: string | null;
  }>;
}

interface DashboardStats {
  totalLicenses: number;
  totalRevenue: number;
  statusBreakdown: Record<string, number>;
}

const AdminLicensePage = () => {
  const [licenses, setLicenses] = useState<License[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLicense, setSelectedLicense] = useState<License | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const fetchLicenses = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: '1',
        limit: '50',
        ...(statusFilter && { status: statusFilter }),
        ...(searchQuery && { search: searchQuery })
      });

      const response = await fetch(`/api/admin/licenses?${params}`);
      const data = await response.json();

      setLicenses(data.licenses);
      setStats(data.stats);
    } catch (error) {
      console.error('Error fetching licenses:', error);
    } finally {
      setLoading(false);
    }
  }, [statusFilter, searchQuery]);

  const viewLicenseDetails = (licenseId: string) => {
    const license = licenses.find((l) => l.id === licenseId);
    if (license) {
      setSelectedLicense(license);
      setShowDetails(true);
    }
  };

  useEffect(() => {
    fetchLicenses();
  }, [fetchLicenses]);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(amount / 100);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium';
    switch (status) {
      case 'active':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'inactive':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'revoked':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const updateLicenseStatus = async (licenseId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/licenses/${licenseId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          licenseStatus: newStatus,
          notes: `Status changed by admin to ${newStatus}`
        })
      });

      if (response.ok) {
        fetchLicenses(); // Refresh the list
        alert('License status updated successfully');
      }
    } catch (error) {
      console.error('Error updating license status:', error);
      alert('Failed to update license status');
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading license data...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          License Dashboard
        </h1>
        <p className="text-gray-600">Manage and monitor NTClipboard licenses</p>
      </div>

      {/* Statistics */}
      {stats && (
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">
              Total Licenses
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              {stats.totalLicenses}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            <p className="text-2xl font-bold text-gray-900">
              ${(stats.totalRevenue / 100).toFixed(2)}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">Active</h3>
            <p className="text-2xl font-bold text-green-600">
              {stats.statusBreakdown.active || 0}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">Inactive</h3>
            <p className="text-2xl font-bold text-yellow-600">
              {stats.statusBreakdown.inactive || 0}
            </p>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="mb-6 rounded-lg bg-white p-4 shadow">
        <div className="flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="Search by email or customer name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="revoked">Revoked</option>
          </select>
        </div>
      </div>

      {/* License Table */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Customer & Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                License Key
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                License Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Activated Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Purchase Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Purchase Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {licenses.map((license) => (
              <tr
                key={license.id}
                className="hover:bg-gray-50"
              >
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {license.customerName}
                  </div>
                  <div className="text-sm text-gray-500">{license.email}</div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="rounded bg-gray-100 p-2 font-mono text-xs text-gray-900">
                    {license.licenseKey || (
                      <span className="italic text-red-500">Not generated</span>
                    )}
                  </div>
                  {license.licenseKey && (
                    <div className="mt-1 text-xs text-gray-500">
                      Attempts: {license.activationAttempts}/
                      {license.maxActivationAttempts}
                    </div>
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className={getStatusBadge(license.licenseStatus)}>
                    {license.licenseStatus}
                  </span>
                  {license.licenseStatus === 'active' &&
                    license.systemFingerprint && (
                      <div className="mt-1 text-xs text-gray-500">
                        System bound
                      </div>
                    )}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  {license.activatedAt ? (
                    <div>
                      <div className="font-medium text-green-600">
                        {formatDate(license.activatedAt)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {license.activatedEmail || license.email}
                      </div>
                    </div>
                  ) : (
                    <span className="italic text-yellow-600">
                      Not activated
                    </span>
                  )}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  <div className="font-medium">
                    {formatCurrency(license.amount, license.currency)}
                  </div>
                  <div className="text-xs text-gray-500">
                    Downloads: {license.downloadCount}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  {formatDate(license.createdAt)}
                </td>
                <td className="space-x-2 whitespace-nowrap px-6 py-4 text-sm font-medium">
                  <button
                    onClick={() => viewLicenseDetails(license.id)}
                    className="text-blue-600 hover:text-blue-900"
                    title="View full details"
                  >
                    Details
                  </button>
                  {license.licenseStatus !== 'active' && (
                    <button
                      onClick={() => updateLicenseStatus(license.id, 'active')}
                      className="text-green-600 hover:text-green-900"
                      title="Activate license"
                    >
                      Activate
                    </button>
                  )}
                  {license.licenseStatus === 'active' && (
                    <button
                      onClick={() => updateLicenseStatus(license.id, 'revoked')}
                      className="text-red-600 hover:text-red-900"
                      title="Revoke license"
                    >
                      Revoke
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {licenses.length === 0 && (
        <div className="py-6 text-center">
          <p className="text-gray-500">
            No licenses found matching your criteria.
          </p>
        </div>
      )}

      {/* License Details Modal */}
      {showDetails && selectedLicense && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="mx-4 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white shadow-xl">
            <div className="border-b p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  License Details
                </h2>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">
                    Customer Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Customer Name
                      </label>
                      <p className="text-sm text-gray-900">
                        {selectedLicense.customerName}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <p className="text-sm text-gray-900">
                        {selectedLicense.email}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Purchase Amount
                      </label>
                      <p className="text-sm text-gray-900">
                        {formatCurrency(
                          selectedLicense.amount,
                          selectedLicense.currency
                        )}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Purchase Date
                      </label>
                      <p className="text-sm text-gray-900">
                        {formatDate(selectedLicense.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold">
                    License Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        License Key
                      </label>
                      <p className="break-all rounded bg-gray-100 p-2 font-mono text-xs">
                        {selectedLicense.licenseKey || 'Not generated'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <span
                        className={getStatusBadge(
                          selectedLicense.licenseStatus
                        )}
                      >
                        {selectedLicense.licenseStatus}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Activated Date
                      </label>
                      <p className="text-sm text-gray-900">
                        {selectedLicense.activatedAt
                          ? formatDate(selectedLicense.activatedAt)
                          : 'Not activated'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Activation Attempts
                      </label>
                      <p className="text-sm text-gray-900">
                        {selectedLicense.activationAttempts} /{' '}
                        {selectedLicense.maxActivationAttempts}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Downloads
                      </label>
                      <p className="text-sm text-gray-900">
                        {selectedLicense.downloadCount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {selectedLicense.systemFingerprint && (
                <div className="mt-6">
                  <h3 className="mb-4 text-lg font-semibold">System Binding</h3>
                  <div className="rounded bg-gray-50 p-4">
                    <p className="break-all font-mono text-xs">
                      {selectedLicense.systemFingerprint}
                    </p>
                  </div>
                </div>
              )}

              {selectedLicense.activations &&
                selectedLicense.activations.length > 0 && (
                  <div className="mt-6">
                    <h3 className="mb-4 text-lg font-semibold">
                      Activation History
                    </h3>
                    <div className="space-y-3">
                      {selectedLicense.activations.map((activation) => (
                        <div
                          key={activation.id}
                          className="rounded border p-3"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm font-medium">
                                {activation.status}
                              </p>
                              <p className="text-xs text-gray-500">
                                {formatDate(activation.createdAt)}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-500">
                                {activation.ipAddress}
                              </p>
                            </div>
                          </div>
                          {activation.errorMessage && (
                            <p className="mt-2 text-xs text-red-600">
                              {activation.errorMessage}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLicensePage;
