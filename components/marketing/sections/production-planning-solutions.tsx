'use client';

import React from 'react';
import Image from 'next/image';
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
                    title="Manufacturing Solutions That Boost Efficiency"
                    description="Discover powerful Production Planning and Scheduling Solutions that help manufacturers boost efficiency—from Excel job shop tools to advanced APS software."
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
                            >
                                <Download className="size-4" />
                                Free Trial & Samples
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2"
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

                    {/* About Us & Products */}
                </div>
            </div>
        </GridSection>
    );
}
