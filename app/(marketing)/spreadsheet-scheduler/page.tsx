import Image from 'next/image';
import Link from 'next/link';

import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

export default function SpreadsheetSchedulerPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 text-white dark:from-blue-800 dark:to-blue-900">
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto max-w-5xl">
                        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                            Spreadsheet Scheduler
                        </h1>
                        <p className="mb-8 text-xl md:text-2xl">
                            Gantt Charting and Project Management with Excel
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link href="/product-downloads">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-blue-600"
                                >
                                    Free Sample
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-gray-100"
                                >
                                    Buy Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert max-w-none">
                                <p>
                                    Consists of a set of fourteen (14) Excel templates, designed
                                    to take data from a project management or any other system,
                                    using the tools of job sequencing, Gantt charting, and CPM
                                    (Critical Path Method), and applying them to provide
                                    job/project schedules such that each project is scheduled with
                                    the least possible delay.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    Applications
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert max-w-none">
                                <ul>
                                    <li>
                                        <strong>Projects:</strong> Activities are the components
                                        (tasks) of a project. Use Gantt chart and CPM to schedule
                                        tasks and determine project completion time and critical
                                        activities.
                                    </li>
                                    <li>
                                        <strong>Manufacturing Shop Jobs:</strong> Jobs coming into a
                                        shop consist of several operations. Operations may require
                                        precedence restrictions (e.g., cannot drill hole in a part
                                        until the metal casting is made). Assign sequence to jobs to
                                        determine the overall flow or queue of jobs and schedule of
                                        operation.
                                    </li>
                                    <li>
                                        <strong>Work Flow Models:</strong> Use in creating work flow
                                        diagrams showing events and activities in a work process and
                                        the time requirements at each step. Can be used to spot
                                        process improvement opportunities and estimate process cycle
                                        time prior to implementation.
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Scheduling Techniques Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-center text-3xl">
                                    Scheduling Techniques
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert max-w-none">
                                <ul>
                                    <li>
                                        <strong>Job (or task) sequencing:</strong> The dispatching
                                        or releasing of jobs through the shop (or tasks within a
                                        project) in a pre-determined order, using one of several
                                        techniques (priority rules) such as first come first served,
                                        shortest processing time, earliest due date.
                                    </li>
                                    <li>
                                        <strong>Due-date assignment:</strong> Assigning due dates to
                                        jobs based on date in, processing time, capacity.
                                    </li>
                                    <li>
                                        <strong>Gantt Chart:</strong> A horizontal bar chart used in
                                        scheduling. Tasks are listed on the vertical axis and task
                                        start and completion dates are reflected on the horizontal
                                        scale by bar positions and lengths.
                                    </li>
                                    <li>
                                        <strong>Precedence Relationships:</strong> Certain tasks in
                                        a project may have to be completed before others can be
                                        started. These precedence requirements can be input and
                                        critical paths determined.
                                    </li>
                                    <li>
                                        <strong>CPM:</strong> The critical path method is a network
                                        based technique of determining project makespan (or
                                        duration) and critical activities, as well as project slack.
                                        Used to manage projects by understanding, (1) the shortest
                                        possible completion time, (2) which activities are critical
                                        to completion time, (3) how long activities can be delayed
                                        without delaying the project.
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-muted/50 pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
                            Features
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        14 Excel Templates
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Comprehensive toolkit for various scheduling scenarios
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Gantt Charts
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Visual project timelines and task dependencies
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Critical Path Method (CPM)
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Identify critical activities and project completion time
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Job Sequencing
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Optimize job order using priority rules
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Due Date Assignment
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Calculate realistic completion dates
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Precedence Relationships
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Model task dependencies and constraints
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Runs with Excel
                                    </h3>
                                    <p className="text-muted-foreground">
                                        No additional software required
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-3 text-xl font-semibold text-blue-600">
                                        Source Code Included
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Customize for your specific requirements
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="pt-6">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardContent className="p-8 text-center">
                                <h2 className="mb-6 text-3xl font-bold text-foreground">
                                    CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                                </h2>
                                <div className="mx-auto max-w-3xl">
                                    <img
                                        src="/awards-banner.jpg"
                                        alt="Collection of industry and business awards"
                                        className="h-auto w-full rounded-lg"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
