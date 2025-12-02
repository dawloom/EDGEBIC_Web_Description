import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle,
  Factory,
  Target,
  Users,
  Zap
} from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function SleepmasterLtdPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <GridSection hideVerticalGridLines>
        <div className="container pb-6">
          <div className="mx-auto max-w-7xl">
            {/* Company Logo */}

            {/* Hero Header */}
            <div className="mb-6 text-center">
              <SiteHeading
                badge="Case Study"
                title="Sleepmaster Ltd"
                description="Affordable, Easy-to-Implement MRP for Smaller Manufacturer"
              />
              <p className="mt-6 text-lg text-muted-foreground">
                A $50M manufacturer successfully implements Resource Manager DB
                for scheduling, costing, and materials planning across multiple
                facilities
              </p>
            </div>

            <div className="mb-6 text-center">
              <Image
                src="https://www.usersolutions.com/wp-content/uploads/2022/10/sleep66-161208-5849e9fe80645.jpg"
                alt="SleepMaster Ltd Logo"
                width={200}
                height={120}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </GridSection>

      {/* Company Overview */}
      <section className="py-6">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Factory className="size-6 text-blue-600" />
                Company Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                Our situation is that we are a relatively small organization
                (AUD$50M of sales) and we have an outdated MRP system. The
                current system in Australia has no effective scheduling ability
                and is very cumbersome to use for product costings.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                We are also in the process of starting up a new facility in
                China, which has no MRP system at all, and the people there have
                little modern manufacturing experience. We decided to use it to
                help get the Chinese operation up and running quickly first.
              </p>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="size-6 text-orange-600" />
                The Problems We Wanted to Solve Were Therefore:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-orange-600" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Provide a scheduling system that allows quick changes in a
                      very dynamic demand situation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-orange-600" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Provide a quick and easy costing system for products
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-orange-600" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Provide a quick and easy system for materials requirements
                      planning
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-orange-600" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Enable BOMs and Routes to be quickly and easily built "on
                      the run"
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Resource Manager */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="size-6 text-green-600" />
                2. Resource Manager Was Chosen Because:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        It is very easy and intuitive to use
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        User-friendly interface that doesn't require extensive
                        training
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Phased Implementation
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        It can be used in sections within days, without having
                        the whole system implementation required. ie. the
                        materials planning was done first, then the costings,
                        then the scheduling
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        It is low cost
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Low cost compared to other comprehensive systems
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        It is easily configurable/flexible
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Easily configurable and flexible to adapt to specific
                        needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Excellent Support
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Good support is offered via Skype, phone and
                        GoToMeeting, with fast turnaround to resolve issues
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 size-5 shrink-0 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Training Tool
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Serves as an excellent MRP training tool for new team
                        members
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison with Other Systems */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="size-6 text-purple-600" />
                3. Comparison with Other Systems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                We considered a number of other systems both local and global.
                Most are far more expensive and comprehensive (eg. accounting
                capability) but all require much higher cost and are much more
                resource hungry to set up.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                RMDB required one individual very much part time (me) to set up
                on the critical areas for China and is now being run by a young
                Chinese manager who had no manufacturing experience, but has
                picked up the concepts well. In that sense it is also a very
                good MRP training tool also.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                <cite className="font-medium">
                  — Jim Steel, Operations Manager for Sleepmaster, LTD
                </cite>
              </p>
            </CardContent>
          </Card>

          {/* Key Benefits */}
          <Card className="mb-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-blue-300">
                Key Benefit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg italic text-slate-700 dark:text-slate-300">
                "The biggest benefit relative to other systems looked at is its
                simplicity to operate and speed at which it can generate results
                in whichever area you want to start on. A whole system can be
                built up while it is generating value, which is particularly
                valuable in a start up situation such as our Chinese plant."
              </blockquote>
            </CardContent>
          </Card>

          {/* Implementation Success Story */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="size-6 text-purple-600" />
                Implementation Success Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300">
                RMDB required one individual very much part time (me) to set up
                on the critical areas for China and is now being run by a young
                Chinese manager who had no manufacturing experience, but has
                picked up the concepts well. In that sense it is also a very
                good MRP training tool also.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                The implementation process started with materials planning, then
                moved to costings, and finally scheduling - demonstrating the
                flexibility to implement in phases while generating value at
                each step.
              </p>
            </CardContent>
          </Card>

          {/* Testimonial */}
          <Card className="mb-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20">
            <CardContent className="p-8 text-center">
              <blockquote className="mb-4 text-xl text-slate-700 dark:text-slate-300">
                "Best choice for MRP and project management software"
              </blockquote>
              <cite className="text-lg font-medium text-slate-900 dark:text-white">
                — Jim Steel, Operations Manager
                <br />
                Sleepmaster Ltd
              </cite>
            </CardContent>
          </Card>

          {/* Awards Section */}
          <Card className="mb-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <CardContent className="p-8 text-center">
              <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
              </h3>
              <div className="flex justify-center">
                <img
                  src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                  alt="Collection of industry and business awards logos"
                  className="h-auto max-w-full rounded-lg shadow-md"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
