import type { Metadata } from 'next';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'Lean Manufacturing Solutions | User Solutions',
    description:
        'Comprehensive guide to lean manufacturing principles, waste elimination, and continuous improvement through Kaizen, Kanban, 5S, and employee empowerment.',
    openGraph: {
        title: 'Lean Manufacturing Solutions',
        description: 'Eliminate waste and maximize value with lean principles',
        url: 'https://www.usersolutions.com/lean-manufacturing-solutions'
    }
};

export default function LeanManufacturingSolutionsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 h-8 rounded-full border-green-600/30 px-4 text-sm font-medium text-green-700 shadow-sm dark:border-green-400/30 dark:text-green-300"
                        >
                            Operational Excellence
                        </Badge>
                        <h1 className="mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
                            Lean Manufacturing Solutions
                        </h1>
                        <p className="mb-4 text-xl text-gray-700 dark:text-gray-300">
                            Eliminate waste, maximize value, and achieve continuous
                            improvement
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-6">
                <div className="mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        {/* Introduction */}
                        <div className="mb-6">
                            <Card>
                                <CardContent className="p-6">
                                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        Lean manufacturing is a systematic approach to identifying
                                        and eliminating waste through continuous improvement,
                                        focusing on creating value for customers while minimizing
                                        resources. Originally developed by Toyota as the Toyota
                                        Production System (TPS), lean principles have been adopted
                                        by manufacturers worldwide seeking to enhance efficiency,
                                        quality, and competitiveness. By implementing lean
                                        manufacturing solutions, businesses can streamline
                                        operations, reduce costs, and foster a culture of
                                        excellence.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* 5 Core Principles */}
                        <div className="mb-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                        The Five Core Principles of Lean Manufacturing
                                    </h2>
                                    <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        At the heart of lean manufacturing are five core principles
                                        that guide every decision and action:
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                                1. Define Value
                                            </h3>
                                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                                Value is defined from the customer&apos;s perspective.
                                                Understanding what customers truly need and are willing
                                                to pay for is the foundation of lean thinking.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                                2. Map the Value Stream
                                            </h3>
                                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                                Value stream mapping involves documenting all the steps
                                                required to deliver a product or service, identifying
                                                which activities add value and which do not.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                                3. Create Flow
                                            </h3>
                                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                                Once waste is removed, the goal is to ensure that
                                                value-adding steps flow smoothly without interruptions,
                                                delays, or bottlenecks.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                                4. Establish Pull
                                            </h3>
                                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                                Rather than pushing products based on forecasts, pull
                                                systems produce only what customers demand, reducing
                                                inventory and waste.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                                5. Pursue Perfection
                                            </h3>
                                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                                Lean is an ongoing journey. Organizations must
                                                continuously seek ways to improve processes and
                                                eliminate waste.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Types of Waste */}
                        <div className="mb-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                        Identifying and Eliminating the Eight Wastes
                                    </h2>
                                    <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        Lean manufacturing identifies eight types of waste, often
                                        remembered by the acronym DOWNTIME:
                                    </p>
                                    <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Defects:</strong> Products or services that fail
                                                to meet quality standards require rework or disposal.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Overproduction:</strong> Producing more than
                                                needed ties up resources and increases storage costs.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Waiting:</strong> Idle time between processes
                                                wastes valuable production capacity.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Non-Utilized Talent:</strong> Failing to
                                                leverage employees&apos; skills and knowledge limits
                                                innovation and improvement.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Transportation:</strong> Unnecessary movement of
                                                materials adds no value and increases risk of damage.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Inventory:</strong> Excess stock ties up capital
                                                and increases the risk of obsolescence.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Motion:</strong> Unnecessary movements by
                                                workers or equipment reduce efficiency and can cause
                                                injuries.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Extra Processing:</strong> Performing more work
                                                than required by the customer adds cost without adding
                                                value.
                                            </span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Technology Role */}
                        <div className="mb-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                        The Role of Technology in Lean Manufacturing
                                    </h2>
                                    <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        While lean principles emphasize simplicity and
                                        standardization, technology plays a vital role in enabling
                                        lean transformation. Modern tools such as advanced
                                        scheduling software, real-time monitoring systems, and data
                                        analytics platforms help manufacturers identify
                                        inefficiencies, track performance, and make data-driven
                                        decisions.
                                    </p>
                                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        For example, IoT sensors can monitor equipment health and
                                        alert teams to potential issues before they escalate,
                                        supporting predictive maintenance strategies. Similarly,
                                        digital dashboards provide visibility into key metrics,
                                        enabling quick identification of problems and opportunities
                                        for improvement.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Lean Tools */}
                        <div className="mb-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                        Key Lean Tools and Techniques
                                    </h2>
                                    <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        Several tools and techniques support the implementation of
                                        lean manufacturing:
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                                Kaizen (Continuous Improvement)
                                            </h3>
                                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                                Kaizen involves making small, incremental changes
                                                regularly. It encourages all employees to contribute
                                                ideas for improvement, fostering a culture of continuous
                                                learning and innovation.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                                5S (Sort, Set in Order, Shine, Standardize, Sustain)
                                            </h3>
                                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                                The 5S methodology focuses on organizing the workplace
                                                to improve efficiency and safety. A clean,
                                                well-organized environment reduces errors and enhances
                                                productivity.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                                Kanban (Visual Workflow Management)
                                            </h3>
                                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                                Kanban uses visual signals, such as cards or boards, to
                                                manage workflow and inventory levels. It helps teams
                                                visualize work in progress and maintain optimal flow.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                                Value Stream Mapping
                                            </h3>
                                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                                This tool visualizes the entire production process,
                                                highlighting value-adding and non-value-adding
                                                activities. It serves as a roadmap for identifying
                                                improvement opportunities.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Employee Empowerment */}
                        <div className="mb-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                        Empowering Employees for Sustainable Success
                                    </h2>
                                    <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        One of the most critical aspects of lean manufacturing is
                                        employee engagement. Lean principles recognize that
                                        frontline workers possess invaluable insights into daily
                                        operations and are best positioned to identify
                                        inefficiencies and propose solutions.
                                    </p>
                                    <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        Empowering employees requires creating a culture where their
                                        contributions are valued and acted upon. Training programs,
                                        suggestion systems, and cross-functional teams encourage
                                        participation and collaboration. When employees feel
                                        ownership over their work and see the impact of their ideas,
                                        they become more motivated and committed to achieving
                                        organizational goals.
                                    </p>
                                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        Leadership plays a pivotal role in sustaining lean
                                        initiatives. Leaders must model lean behaviors, provide
                                        resources and support, and celebrate successes. By embedding
                                        lean principles into the organizational DNA, companies can
                                        ensure long-term success and resilience.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Real-World Benefits */}
                        <div className="mb-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                        Real-World Benefits of Lean Manufacturing
                                    </h2>
                                    <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                        The benefits of lean manufacturing extend beyond cost
                                        savings. Companies that successfully implement lean
                                        principles experience:
                                    </p>
                                    <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Improved Quality:</strong> By focusing on
                                                eliminating defects and reducing variability, lean
                                                manufacturing enhances product quality and customer
                                                satisfaction.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Faster Delivery Times:</strong> Streamlined
                                                processes and reduced lead times enable companies to
                                                respond more quickly to customer orders.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Lower Costs:</strong> Eliminating waste and
                                                optimizing resource utilization directly reduce
                                                operating expenses.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Increased Flexibility:</strong> Lean systems are
                                                more adaptable to changes in demand or market
                                                conditions.
                                            </span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold">•</span>
                                            <span>
                                                <strong>Enhanced Employee Morale:</strong> Involving
                                                employees in problem-solving and decision-making boosts
                                                engagement and job satisfaction.
                                            </span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Awards Banner */}
                        <div>
                            <Card className="mt-6 rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 text-card-foreground shadow dark:from-blue-900/20 dark:to-blue-800/20">
                                <CardContent className="p-8 text-center">
                                    <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                                        CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                                    </h2>
                                    <img
                                        src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                        alt="Collection of industry and business awards logos"
                                        className="mx-auto h-auto max-w-full"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
