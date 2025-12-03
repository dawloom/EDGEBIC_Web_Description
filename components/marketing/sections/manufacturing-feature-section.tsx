'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function ManufacturingFeatureSection(): React.JSX.Element {
  return (
    <section className="bg-white py-6 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#003d5c] dark:text-white ">
              EDGEBIC simplifies production planning and scheduling
            </h2>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#003d5c] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#002d44] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Start Now
              </Link>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <div className="relative w-full">
              <Image
                quality={100}
                src="/marketing/hero/light-feature1.webp"
                width={1328}
                height={727}
                alt="Production Planning and Scheduling"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/marketing/hero/dark-feature1.webp"
                width={1328}
                height={727}
                alt="Production Planning and Scheduling"
                className="hidden rounded-xl border shadow dark:block"
              />
            </div>
          </div>

          <div className="mt-6 space-y-4 lg:mt-0">
            <h3 className="text-xl font-bold text-[#003d5c] dark:text-white md:text-2xl">
              Accurate production scheduling with real-time visibility
            </h3>
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Promise accurate lead times with finite capacity scheduling.
              Optimize resource utilization with drag-and-drop schedule
              adjustments and real-time reporting for better decision making.
            </p>
            <div>
              <Link
                href="/production-scheduling-products"
                className="inline-flex items-center justify-center rounded-md border-2 border-[#003d5c] bg-transparent px-5 py-2 text-sm font-semibold text-[#003d5c] transition-colors hover:bg-[#003d5c] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
          <div className="mt-6 space-y-4 lg:mt-0">
            <h3 className="text-xl font-bold text-[#003d5c] dark:text-white md:text-2xl">
              Integrated MRP and capacity planning
            </h3>
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Manage material requirements, prevent bottlenecks with finite
              capacity scheduling, and optimize workcenter loading with visual
              heat maps and what-if analysis capabilities.
            </p>
            <div className="mt-6">
              <Link
                href="/production-scheduling-products"
                className="inline-flex items-center justify-center rounded-md border-2 border-[#003d5c] bg-transparent px-5 py-2 text-sm font-medium text-[#003d5c] transition-all duration-200 hover:bg-[#003d5c] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#003d5c] focus:ring-offset-2 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#003d5c] dark:focus:ring-white dark:focus:ring-offset-slate-900"
              >
                View Details
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:col-start-2">
            <div className="relative w-full">
              <Image
                quality={100}
                src="/marketing/hero/light-feature2.webp"
                width={1328}
                height={727}
                alt="Integrated MRP and Capacity Planning"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/marketing/hero/dark-feature2.webp"
                width={1328}
                height={727}
                alt="Integrated MRP and Capacity Planning"
                className="hidden rounded-xl border shadow dark:block"
              />
            </div>
          </div>
        </div>

        {/* A complete view of your business */}
        <div className="mt-16 lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
          <div className="relative flex items-center justify-center lg:col-start-2">
            <div className="relative w-full">
              <Image
                quality={100}
                src="/marketing/hero/light-feature3.webp"
                width={1328}
                height={727}
                alt="Complete Business View"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/marketing/hero/dark-feature3.webp"
                width={1328}
                height={727}
                alt="Complete Business View"
                className="hidden rounded-xl border shadow dark:block"
              />
            </div>
          </div>

          <div className="mt-6 space-y-4 lg:mt-0">
            <h3 className="text-xl font-bold text-[#003d5c] dark:text-white md:text-2xl">
              A complete view of your business
            </h3>
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              No more spreadsheets! Ensure seamless communication between sales,
              production, warehousing, procurement, administration, and finance.
            </p>
            <div className="mt-6">
              <Link
                href="/production-scheduling-products"
                className="inline-flex items-center justify-center rounded-md border-2 border-[#003d5c] bg-transparent px-5 py-2 text-sm font-medium text-[#003d5c] transition-all duration-200 hover:bg-[#003d5c] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#003d5c] focus:ring-offset-2 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#003d5c] dark:focus:ring-white dark:focus:ring-offset-slate-900"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>

        {/* Real-time inventory overview */}
        <div className="mt-16 lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
          <div className="mt-6 space-y-4 lg:mt-0">
            <h3 className="text-xl font-bold text-[#003d5c] dark:text-white md:text-2xl">
              Real-time inventory overview
            </h3>
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Prevent stock-outs, lower inventory levels, automate inventory
              transactions, view purchase requirements, track lots, and more.
            </p>
            <div className="mt-6">
              <Link
                href="/production-scheduling-products"
                className="inline-flex items-center justify-center rounded-md border-2 border-[#003d5c] bg-transparent px-5 py-2 text-sm font-medium text-[#003d5c] transition-all duration-200 hover:bg-[#003d5c] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#003d5c] focus:ring-offset-2 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#003d5c] dark:focus:ring-white dark:focus:ring-offset-slate-900"
              >
                View Details
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center lg:col-start-2">
            <div className="relative w-full">
              <Image
                quality={100}
                src="/marketing/hero/light-feature4.webp"
                width={1328}
                height={727}
                alt="Real-time Inventory Overview"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/marketing/hero/dark-feature4.webp"
                width={1328}
                height={727}
                alt="Real-time Inventory Overview"
                className="hidden rounded-xl border shadow dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
