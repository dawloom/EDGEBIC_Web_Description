import Image from 'next/image';
import Link from 'next/link';

export default function OperationsManagerAppPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold">
            Operations Manager: APP
          </h1>
          <p className="mt-4 text-center text-xl">
            Aggregate Production Planning
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Link
              href="/pricing"
              className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Buy Now
            </Link>
          </div>

          <div className="rounded-lg bg-gray-50 p-8 shadow-lg">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
              Aggregate Production Planning (APP)
            </h2>

            <div className="space-y-6 leading-relaxed text-gray-700">
              <p className="text-lg">
                Aggregate production planning is the process of determining:
              </p>

              <ul className="ml-6 list-inside list-decimal space-y-2">
                <li>The timing and quantity of production</li>
                <li>The level of inventories</li>
                <li>The number of workers employed</li>
                <li>The amount of overtime used for up to 12 months ahead</li>
              </ul>

              <p>
                Production and inventories are stated in overall or aggregate
                quantities, such as number of automobiles without regard to
                model or color or number of pairs of shoes without regard to
                style or size.
              </p>

              <p>
                Cost minimization is rarely the only goal in aggregate planning.
                Other considerations, such as stability of the workforce and
                maintenance of adequate inventory levels, are usually just as
                important.
              </p>
            </div>

            {/* Features */}
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Key Features
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 size-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    12-month planning horizon
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 size-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Production quantity optimization
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 size-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Inventory level management
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 size-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Workforce planning
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 size-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Overtime calculation
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  Benefits
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 size-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Cost optimization
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 size-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Workforce stability
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 size-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Inventory balance
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 size-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Strategic planning
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 size-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Demand flexibility
                  </li>
                </ul>
              </div>
            </div>

            {/* Related Products */}
            <div className="mt-12">
              <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">
                Related Operations Manager Tools
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <Link
                  href="/operations-manager-eoq"
                  className="rounded-lg bg-blue-50 p-4 text-center transition-colors hover:bg-blue-100"
                >
                  <h4 className="font-semibold text-gray-800">EOQ</h4>
                  <p className="text-sm text-gray-600">
                    Economic Order Quantity
                  </p>
                </Link>
                <Link
                  href="/operations-manager-mrp1"
                  className="rounded-lg bg-blue-50 p-4 text-center transition-colors hover:bg-blue-100"
                >
                  <h4 className="font-semibold text-gray-800">MRP1</h4>
                  <p className="text-sm text-gray-600">
                    Material Requirements Planning
                  </p>
                </Link>
                <Link
                  href="/operations-manager-simple"
                  className="rounded-lg bg-blue-50 p-4 text-center transition-colors hover:bg-blue-100"
                >
                  <h4 className="font-semibold text-gray-800">Simple</h4>
                  <p className="text-sm text-gray-600">
                    Basic Operations Tools
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-gray-100 pt-6">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
          </h2>
          <Image
            src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
            alt="Collection of industry and business awards logos"
            width={1024}
            height={128}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">ABOUT US</h2>
          <p className="mb-2">us@usersolutions.com</p>
          <p className="mb-6">248.486.6365</p>

          <h3 className="mb-4 text-xl font-bold">PRODUCTS</h3>
          <div className="space-y-2">
            <Link
              href="/jsl-job-scheduler-lite"
              className="block hover:underline"
            >
              Job Scheduler Lite (JSL)
            </Link>
            <Link
              href="/resource-manager-db-2"
              className="block hover:underline"
            >
              Resource Manager DB
            </Link>
            <Link
              href="/edgebi"
              className="block hover:underline"
            >
              EDGEBI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
