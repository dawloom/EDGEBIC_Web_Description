'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    Award,
    CheckCircle,
    Clock,
    Download,
    Play,
    Settings,
    Star,
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

// Video Player Component for YouTube and MP4
function VideoPlayer({
    videoUrl,
    title,
    thumbnail,
    onPlayStateChange
}: {
    videoUrl: string;
    title: string;
    thumbnail: string;
    onPlayStateChange?: (isPlaying: boolean) => void;
}) {
    // Check if it's a YouTube URL or direct MP4
    const isYouTube =
        videoUrl.includes('youtu.be/') || videoUrl.includes('youtube.com');
    const isMp4 = videoUrl.includes('.mp4');

    // Convert YouTube URL to embed URL
    const getYouTubeEmbedUrl = (url: string) => {
        const videoId = url.includes('youtu.be/')
            ? url.split('youtu.be/')[1]?.split('?')[0]
            : url.split('v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    if (isYouTube) {
        return (
            <iframe
                src={getYouTubeEmbedUrl(videoUrl)}
                title={title}
                className="absolute inset-0 size-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        );
    }

    const handleVideoPlay = () => {
        onPlayStateChange?.(true);
    };

    const handleVideoPause = () => {
        onPlayStateChange?.(false);
    };

    if (isMp4) {
        return (
            <video
                className="absolute inset-0 size-full rounded-lg object-cover"
                controls
                poster={thumbnail}
                preload="metadata"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoPause}
            >
                <source
                    src={videoUrl}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        );
    }

    // Fallback for other video types
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700">
            <p className="text-slate-500">Video format not supported</p>
        </div>
    );
}

export function ProductionPlanningSolutions(): React.JSX.Element {
    const router = useRouter();
    const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
    const [isStarterVideoPlaying, setIsStarterVideoPlaying] =
        React.useState(false);
    const [isAdvancedVideoPlaying, setIsAdvancedVideoPlaying] =
        React.useState(false);
    const [isPremiumVideoPlaying, setIsPremiumVideoPlaying] =
        React.useState(false);

    return (
        <GridSection hideVerticalGridLines>
            <div className="container pt-6">
                {/* Hero Section */}
                <SiteHeading
                    badge="Production Planning & Scheduling"
                    title={
                        <a
                            href="https://en.wikipedia.org/wiki/Production_planning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Production Planning and Scheduling Solutions
                        </a>
                    }
                    description="Manufacturing Solutions That Boost Efficiency"
                />

                <div className="mx-auto mt-8 max-w-6xl">
                    {/* Contact CTA */}
                    <div className="mb-12 text-center">
                        <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
                            Contact us to discuss which product is the best fit for your
                            application and budget.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button
                                size="lg"
                                className="gap-2"
                                onClick={() => router.push('/product-downloads')}
                            >
                                <Download className="size-4" />
                                Free Trial & Samples
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2"
                                onClick={() => router.push('/excel-templates')}
                            >
                                <Settings className="size-4" />
                                Excel Products
                            </Button>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="mb-16">
                        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border bg-slate-100 shadow-2xl dark:bg-slate-800">
                            <div className="relative aspect-video">
                                <VideoPlayer
                                    videoUrl="https://youtu.be/IR8NhOlV_zM"
                                    title="Production Planning and Scheduling Solutions Demo"
                                    thumbnail=""
                                    onPlayStateChange={setIsVideoPlaying}
                                />
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                                Want to get your production in the groove?
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300">
                                Watch this classic video and get your operations movin' and
                                groovin' today!
                            </p>
                        </div>
                    </div>

                    {/* Product Tiers - Clean Design Like Attachment */}
                    <div className="mb-16 grid gap-8 lg:grid-cols-3">
                        {/* Starter Tier */}
                        <div className="relative w-full overflow-hidden rounded-xl border bg-white shadow-lg transition-shadow hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
                            {/* Badge */}
                            <div
                                className={`absolute right-4 top-4 z-10 transition-opacity duration-300 ${isStarterVideoPlaying ? 'opacity-0' : 'opacity-100'
                                    }`}
                            >
                                <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                                    STARTER
                                </span>
                            </div>

                            {/* Video Section */}
                            <div className="relative aspect-video bg-slate-100 dark:bg-slate-800">
                                <VideoPlayer
                                    videoUrl="https://www.usersolutions.com/wp-content/uploads/2022/10/Welcome-to-Job-Scheduler-Lite-JSL.mp4"
                                    title="Job Scheduler Lite Demo"
                                    thumbnail=""
                                    onPlayStateChange={setIsStarterVideoPlaying}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-blue-600">
                                    Job Scheduler Lite
                                </h3>
                                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                                    Perfect for Job Shops & Small Manufacturers
                                </p>

                                {/* Features */}
                                <div className="mb-6 space-y-2">
                                    {[
                                        'Shop Scheduling Made Easy',
                                        'Forward Scheduling',
                                        'Finite Capacity',
                                        'Free Trials Available'
                                    ].map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="size-1.5 rounded-full bg-blue-500" />
                                            <span className="text-sm text-slate-700 dark:text-slate-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* View Details Button */}
                                <Button
                                    variant="outline"
                                    className="mb-4 w-full border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400"
                                    onClick={() => router.push('/job-scheduler-lite')}
                                >
                                    View Details
                                </Button>

                                {/* Price */}
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">
                                        $1,000+
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        Starting investment
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Advanced Tier (Popular) */}
                        <div className="relative w-full overflow-hidden rounded-xl border bg-white shadow-lg transition-shadow hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
                            {/* Badge */}
                            <div
                                className={`absolute right-4 top-4 z-10 transition-opacity duration-300 ${isAdvancedVideoPlaying ? 'opacity-0' : 'opacity-100'
                                    }`}
                            >
                                <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                                    POPULAR
                                </span>
                            </div>

                            {/* Video Section */}
                            <div className="relative aspect-video bg-slate-100 dark:bg-slate-800">
                                <VideoPlayer
                                    videoUrl="https://www.usersolutions.com/wp-content/uploads/2022/12/RMDB updated thumbnail.mp4"
                                    title="Resource Manager DB Demo"
                                    thumbnail=""
                                    onPlayStateChange={setIsAdvancedVideoPlaying}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-orange-600">
                                    Resource Manager DB
                                </h3>
                                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                                    Ideal for Growing SMBs & Mid-Size Companies
                                </p>

                                {/* Features */}
                                <div className="mb-6 space-y-2">
                                    {[
                                        'Production Scheduling Your Way',
                                        'Flexible & Adaptable',
                                        'Easy APS & MRP Implementation',
                                        'Free Trials Available',
                                        'Advanced Analytics'
                                    ].map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="size-1.5 rounded-full bg-orange-500" />
                                            <span className="text-sm text-slate-700 dark:text-slate-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* View Details Button */}
                                <Button
                                    variant="outline"
                                    className="mb-4 w-full border-orange-200 text-orange-600 hover:bg-orange-50 dark:border-orange-700 dark:text-orange-400"
                                    onClick={() => router.push('/resource-manager-db-2')}
                                >
                                    View Details
                                </Button>

                                {/* Price */}
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-orange-600">
                                        $5,000+
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        Advanced solution
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Premium Tier */}
                        <div className="relative w-full overflow-hidden rounded-xl border bg-white shadow-lg transition-shadow hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
                            {/* Badge */}
                            <div
                                className={`absolute right-4 top-4 z-10 transition-opacity duration-300 ${isPremiumVideoPlaying ? 'opacity-0' : 'opacity-100'
                                    }`}
                            >
                                <span className="rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">
                                    PREMIUM
                                </span>
                            </div>

                            {/* Video Section */}
                            <div className="relative aspect-video bg-slate-100 dark:bg-slate-800">
                                <VideoPlayer
                                    videoUrl="https://www.usersolutions.com/wp-content/uploads/2022/12/EDGEBI updated thumbnail.mp4"
                                    title="EDGEBI Suite Demo"
                                    thumbnail=""
                                    onPlayStateChange={setIsPremiumVideoPlaying}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-purple-600">
                                    EDGEBI Suite
                                </h3>
                                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                                    Enterprise-Grade for Multi-Nationals
                                </p>

                                {/* Features */}
                                <div className="mb-6 space-y-2">
                                    {[
                                        'Heat Map Reports',
                                        'Schedule Key Dates',
                                        'Live Embedded Excel',
                                        'Advanced Drag & Drop'
                                    ].map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="size-1.5 rounded-full bg-purple-500" />
                                            <span className="text-sm text-slate-700 dark:text-slate-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* View Details Button */}
                                <Button
                                    variant="outline"
                                    className="mb-4 w-full border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-400"
                                    onClick={() => router.push('/edgebi')}
                                >
                                    View Details
                                </Button>

                                {/* Price */}
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-600">
                                        $25,000+
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        Enterprise solution
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Customer Testimonials */}
                    <div className="mb-16">
                        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white">
                            What Our Customers Say
                        </h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-center gap-2">
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                    </div>
                                    <blockquote className="mb-4 text-slate-700 dark:text-slate-300">
                                        "Best choice for MRP and project management software"
                                    </blockquote>
                                    <cite className="text-sm font-medium text-slate-900 dark:text-white">
                                        — Sleepmaster Ltd
                                    </cite>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-center gap-2">
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                    </div>
                                    <blockquote className="mb-4 text-slate-700 dark:text-slate-300">
                                        "Manufacturing scheduling software with fantastic support"
                                    </blockquote>
                                    <cite className="text-sm font-medium text-slate-900 dark:text-white">
                                        — Cook Compression
                                    </cite>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20">
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-center gap-2">
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="size-5 fill-yellow-400 text-yellow-400" />
                                    </div>
                                    <blockquote className="mb-4 text-slate-700 dark:text-slate-300">
                                        "Easy ERP add-on for manufacturing resource planning"
                                    </blockquote>
                                    <cite className="text-sm font-medium text-slate-900 dark:text-white">
                                        — Incon Incorporated
                                    </cite>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Production Scheduling Features Section */}
                    <div className="mb-16">
                        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-white">
                            Production Scheduling Features
                        </h2>
                        <p className="mb-12 text-center text-lg text-slate-600 dark:text-slate-400">
                            Comprehensive production planning and scheduling capabilities
                            designed to optimize your manufacturing operations
                        </p>

                        {/* Features Grid */}
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Job Scheduler Lite Features */}
                            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 dark:border-blue-700 dark:from-blue-900/20 dark:to-blue-800/20">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                                        <Target className="size-5" />
                                        Job Scheduler Lite
                                    </CardTitle>
                                    <CardDescription>
                                        Entry-level production scheduling solution for creating
                                        routing steps and scheduling according to capacity
                                        limitations
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {[
                                        'Simple, familiar interface',
                                        'Easy to configure and run',
                                        'Finite Capacity - Only schedules to what is available',
                                        'Customizable Workcenter Calendars and Daily Calendar',
                                        'Forward/Reverse scheduling',
                                        'Mixed Mode Scheduling - Forward based on start date or Reverse based on due date',
                                        'Routings - Workcenter Set-up and Cycle Times',
                                        'Queue / Move Times, Linear and non-Linear',
                                        'Color coded Graphics',
                                        'Import Data',
                                        'Resources management',
                                        'Orders tracking',
                                        'Reports generation',
                                        'Schedule module',
                                        'Export Data'
                                    ].map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            <CheckCircle className="size-4 text-blue-600" />
                                            <span className="text-sm text-slate-700 dark:text-slate-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Resource Manager DB Features */}
                            <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 dark:border-orange-700 dark:from-orange-900/20 dark:to-orange-800/20">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                                        <Settings className="size-5" />
                                        Resource Manager DB
                                    </CardTitle>
                                    <CardDescription>
                                        Advanced production planning and scheduling solution that
                                        adapts to your existing data and workflows
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {[
                                        'Finite Capacity Planning & Scheduling',
                                        'Advanced Planning and Scheduling - Alternate Routings, Multiple Constraints',
                                        'Routings - Workcenter Set-up and Cycle Times, Queue/Move Times',
                                        'Tracking Actuals - Import Actuals or direct entry',
                                        'Drag-and-drop to track WIP',
                                        'Bill of Materials - Quantity per, Parent-child, Sub-Assemblies',
                                        'Rev Control and much more',
                                        'Mixed Mode Scheduling - Time Fenced, Per job or group of orders',
                                        'Prioritize at any level',
                                        'Rescheduling - Import Actuals and rescheduling on demand',
                                        'MRP and Inventory Management - Low maintenance, Safety Stocks',
                                        'Yield Factors, Purchasing UOM, ATP, Reporting',
                                        'Material Planning Basic - What materials are required for what jobs and when',
                                        'Materials Planning Advanced - MRP Calculations, Shortage Reports',
                                        'Lot and Batch Sizing',
                                        'Purchase Orders - Easy, fast, accurate based on scheduled demand',
                                        'Stock replenishment, Paperless option',
                                        'Drag and Drop - Visually change dates per job, per workcenter',
                                        'Drag job from one workcenter to another',
                                        'Integration with other systems - Import/Export Excel, ODBC drivers',
                                        'Integrates easily with most ERP and custom systems',
                                        'Customizable - We specialize in enhancing to meet your unique needs',
                                        'What-if Analysis',
                                        'Purchasing and Receiving',
                                        'Downtime Analysis and Reporting',
                                        'Costing and Estimating',
                                        'Production Planning',
                                        'Multi-Resource Scheduling',
                                        'LP Optimization (Optional)',
                                        'Customized Reports'
                                    ].map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            <CheckCircle className="size-4 text-orange-600" />
                                            <span className="text-sm text-slate-700 dark:text-slate-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* EDGEBI Features */}
                            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 dark:border-purple-700 dark:from-purple-900/20 dark:to-purple-800/20 md:col-span-2 lg:col-span-1">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                                        <Zap className="size-5" />
                                        EDGEBI Suite
                                    </CardTitle>
                                    <CardDescription>
                                        Graphical overlay with business intelligence for intuitive
                                        drag-and-drop schedule management
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {[
                                        'Enhanced Drag-n-drop Interface',
                                        'Business Intelligence Integration',
                                        'Heat Map Report - View capacity loading for entire schedule at a glance',
                                        'Schedule Key Dates - Run reports with export to Excel',
                                        'Live embedded Excel - Import and Export to Excel',
                                        'Direct importing via ODBC drivers',
                                        'Integrates easily with most ERP and custom systems',
                                        'Advanced Drag and Drop - Alternate Routings, Multiple Constraints',
                                        'Multiple Priorities, Rescheduling on demand',
                                        'Intuitive Graphical Approach',
                                        'Color-coded Schedule Status',
                                        'Drag and Drop Job Segments',
                                        'Capacity Utilization Graph',
                                        'Custom Reporting - Customized per your requests',
                                        'Advanced Security Options',
                                        'Interactive Schedule Management'
                                    ].map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            <CheckCircle className="size-4 text-purple-600" />
                                            <span className="text-sm text-slate-700 dark:text-slate-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Key Benefits Section */}
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                    <Clock className="size-8 text-blue-600" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                                    Save Time
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Reduce planning time by up to 75% with automated scheduling
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                                    <Target className="size-8 text-green-600" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                                    Increase Efficiency
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Optimize resource utilization and reduce bottlenecks
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                                    <Users className="size-8 text-purple-600" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                                    Better Collaboration
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Real-time visibility across all teams and departments
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature Comparison Matrix */}
                    <div className="mb-16">
                        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-white">
                            Choose the Right Solution for Your Business
                        </h2>
                        <p className="mb-8 text-center text-lg text-slate-600 dark:text-slate-400">
                            Compare features across our product range to find the perfect fit
                        </p>

                        {/* Expand/Collapse Controls */}
                        <div className="mb-4 flex justify-center gap-4">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    const details = document.querySelectorAll(
                                        'details[data-feature]'
                                    );
                                    details.forEach((detail) =>
                                        detail.setAttribute('open', 'true')
                                    );
                                }}
                                className="text-blue-600 hover:bg-blue-50"
                            >
                                Expand All
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    const details = document.querySelectorAll(
                                        'details[data-feature]'
                                    );
                                    details.forEach((detail) => detail.removeAttribute('open'));
                                }}
                                className="text-blue-600 hover:bg-blue-50"
                            >
                                Close All
                            </Button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px] rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                                <thead>
                                    <tr className="border-b border-slate-200 dark:border-slate-700">
                                        <th className="p-4 text-left font-semibold text-slate-900 dark:text-white">
                                            Features
                                        </th>
                                        <th className="p-4 text-center font-semibold text-blue-600 dark:text-blue-400">
                                            Job Scheduler Lite
                                        </th>
                                        <th className="p-4 text-center font-semibold text-orange-600 dark:text-orange-400">
                                            Resource Manager DB
                                        </th>
                                        <th className="p-4 text-center font-semibold text-purple-600 dark:text-purple-400">
                                            EDGEBI Suite
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            feature: 'Routings',
                                            description:
                                                'Workcenter Set-up and Cycle Times, Queue / Move Times, Linear and non-Linear.',
                                            jsl: true,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Finite Capacity',
                                            description:
                                                'Only schedules to what is available. Customizable Workcenter Calendars and Daily Calendar. Color coded. Graphics.',
                                            jsl: true,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Tracking Actuals',
                                            description:
                                                'Import Actuals. if available, or direct entry. Even drag-and-drop to track WIP.',
                                            jsl: false,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Bill of Materials',
                                            description:
                                                'Quantity per, Parent-child, Sub-Assemblies, Rev Control, much more.',
                                            jsl: false,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Mixed Mode Scheduling',
                                            description:
                                                'Forward based on start date or Reverse based on due date or even Time Fenced. Per job or group of orders. Prioritize at any level.',
                                            jsl: true,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Rescheduling',
                                            description:
                                                'Import Actuals. if available, or direct entry. Even drag-and-drop to track WIP.',
                                            jsl: false,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Inventory Management',
                                            description:
                                                'Low maintenance. Safety Stocks, Yield Factors, Purchasing UOM, ATP, Reporting.',
                                            jsl: false,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Material Planning Basic',
                                            description:
                                                'What materials are required for what jobs and when.',
                                            jsl: false,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Customizable',
                                            description:
                                                'We specialize in enhancing any product, or combination, to meet your unique needs.',
                                            jsl: false,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Purchase Orders',
                                            description:
                                                'Easy, fast, accurate. Based on scheduled demand, stock replenishment, and more. Paperless option.',
                                            jsl: false,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Drag and Drop',
                                            description:
                                                'Visually change dates per job, per workcenter, or even drag job from one workcenter to another.',
                                            jsl: false,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Materials Planning Advanced',
                                            description:
                                                'MRP Calculations, Shortage Reports, Lot and Batch Sizing, much more.',
                                            jsl: false,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Integration with other systems',
                                            description:
                                                'Import and Export to Excel and direct importing via ODBC drivers. Integrates easily with most ERP and custom systems.',
                                            jsl: false,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Advanced Planning & Scheduling',
                                            description:
                                                'Alternate Routings, Multiple Constraints, Multiple Priorities, Rescheduling on demand, much more.',
                                            jsl: false,
                                            rmdb: true,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Heat Map Report',
                                            description:
                                                'Visual representation of capacity loading across your schedule.',
                                            jsl: false,
                                            rmdb: false,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Schedule Key Dates',
                                            description:
                                                'Critical date tracking and reporting functionality.',
                                            jsl: false,
                                            rmdb: false,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Live embedded Excel',
                                            description:
                                                'Import and Export to Excel and direct importing via ODBC drivers. Integrates easily with most ERP and custom systems.',
                                            jsl: false,
                                            rmdb: false,
                                            edgebi: true
                                        },
                                        {
                                            feature: 'Advanced Drag and Drop',
                                            description:
                                                'Alternate Routings, Multiple Constraints, Multiple Priorities, Rescheduling on demand, much more.',
                                            jsl: false,
                                            rmdb: false,
                                            edgebi: true
                                        }
                                    ].map((row, i) => (
                                        <React.Fragment key={i}>
                                            <tr
                                                className={`border-b border-slate-100 dark:border-slate-800 ${i % 2 === 0 ? 'bg-slate-50 dark:bg-slate-900/50' : ''}`}
                                            >
                                                <td className="p-4">
                                                    <details
                                                        data-feature={`feature-${i}`}
                                                        className="group"
                                                    >
                                                        <summary className="flex cursor-pointer items-center gap-2 font-medium text-slate-900 hover:text-blue-600 dark:text-white">
                                                            <span className="text-sm transition-transform group-open:rotate-90">
                                                                ▶
                                                            </span>
                                                            {row.feature}
                                                        </summary>
                                                        <div className="mt-2 pl-6 text-sm text-slate-600 dark:text-slate-400">
                                                            {row.description}
                                                        </div>
                                                    </details>
                                                </td>
                                                <td className="p-4 text-center">
                                                    {row.jsl === true ? (
                                                        <CheckCircle className="mx-auto size-5 text-green-500" />
                                                    ) : row.jsl === 'Optional' ? (
                                                        <span className="text-xs text-orange-500">
                                                            Optional
                                                        </span>
                                                    ) : (
                                                        <span className="text-slate-400">—</span>
                                                    )}
                                                </td>
                                                <td className="p-4 text-center">
                                                    {row.rmdb === true ? (
                                                        <CheckCircle className="mx-auto size-5 text-green-500" />
                                                    ) : row.rmdb === 'Optional' ? (
                                                        <span className="text-xs text-orange-500">
                                                            Optional
                                                        </span>
                                                    ) : (
                                                        <span className="text-slate-400">—</span>
                                                    )}
                                                </td>
                                                <td className="p-4 text-center">
                                                    {row.edgebi === true ? (
                                                        <CheckCircle className="mx-auto size-5 text-green-500" />
                                                    ) : row.edgebi === 'Optional' ? (
                                                        <span className="text-xs text-orange-500">
                                                            Optional
                                                        </span>
                                                    ) : (
                                                        <span className="text-slate-400">—</span>
                                                    )}
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-8 text-center">
                            <p className="mb-4 text-slate-600 dark:text-slate-400">
                                Not sure which solution is right for you?
                            </p>
                            <Button
                                size="lg"
                                className="gap-2"
                                onClick={() => router.push('/contact')}
                            >
                                <Users className="size-4" />
                                Schedule a Live Demo
                            </Button>
                        </div>
                    </div>

                    {/* 25 Years Anniversary with Real Award Logos */}
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
                            CELEBRATING 25 YEARS OF AWARD WINNING SOFTWARE!
                        </h2>
                        <div className="mx-auto max-w-4xl">
                            <Image
                                src="https://www.usersolutions.com/wp-content/uploads/2022/07/banner-logoso-sm-58c9a28d237d6-1024x128.jpg"
                                alt="Collection of industry and business awards logos"
                                width={1024}
                                height={128}
                                className="mx-auto rounded-lg"
                            />
                        </div>
                    </div>

                    {/* About Us & Products Footer */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* About Us */}
                        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                                    <Users className="size-6" />
                                    ABOUT US
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                        <span className="text-lg">✉️</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-white">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:us@usersolutions.com"
                                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                                        >
                                            us@usersolutions.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                        <span className="text-lg">📞</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-white">
                                            Phone
                                        </p>
                                        <a
                                            href="tel:248.486.6365"
                                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                                        >
                                            248.486.6365
                                        </a>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Manufacturing software made easy. 25+ years of experience
                                    helping manufacturers optimize their production planning and
                                    scheduling.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Products */}
                        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                                    <Settings className="size-6" />
                                    PRODUCTS
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <button
                                    onClick={() => router.push('/job-scheduler-lite')}
                                    className="block w-full rounded-lg border border-green-200 bg-white p-3 text-left transition-colors hover:bg-green-50 dark:border-green-700 dark:bg-slate-800 dark:hover:bg-green-900/20"
                                >
                                    <div className="flex items-center gap-3">
                                        <Target className="size-5 text-green-600" />
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white">
                                                Job Scheduler Lite (JSL)
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Entry-level scheduling solution
                                            </p>
                                        </div>
                                    </div>
                                </button>
                                <button
                                    onClick={() => router.push('/resource-manager-db-2')}
                                    className="block w-full rounded-lg border border-green-200 bg-white p-3 text-left transition-colors hover:bg-green-50 dark:border-green-700 dark:bg-slate-800 dark:hover:bg-green-900/20"
                                >
                                    <div className="flex items-center gap-3">
                                        <Settings className="size-5 text-green-600" />
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white">
                                                Resource Manager DB
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Advanced planning & scheduling
                                            </p>
                                        </div>
                                    </div>
                                </button>
                                <button
                                    onClick={() => router.push('/edgebi')}
                                    className="block w-full rounded-lg border border-green-200 bg-white p-3 text-left transition-colors hover:bg-green-50 dark:border-green-700 dark:bg-slate-800 dark:hover:bg-green-900/20"
                                >
                                    <div className="flex items-center gap-3">
                                        <Zap className="size-5 text-green-600" />
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white">
                                                EDGEBI
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Enterprise-grade suite
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </GridSection>
    );
}
