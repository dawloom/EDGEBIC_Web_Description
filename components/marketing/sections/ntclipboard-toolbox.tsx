'use client';

import * as React from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { Button } from '@/components/ui/button';

// Video Player Component
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
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        onPlayStateChange?.(true);
    };

    const handlePause = () => {
        onPlayStateChange?.(false);
    };

    const handleEnded = () => {
        onPlayStateChange?.(false);
    };

    return (
        <video
            ref={videoRef}
            src={videoUrl}
            title={title}
            className="absolute inset-0 size-full rounded-lg object-cover"
            controls
            playsInline
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
        >
            Your browser does not support the video tag.
        </video>
    );
}

export function NTClipboardToolBox(): React.JSX.Element {
    // State to control badge visibility for each card
    const [isVideoPlaying, setIsVideoPlaying] = React.useState({
        starter: false,
        advanced: false,
        premium: false
    });

    const handleVideoPlayState = (
        cardType: 'starter' | 'advanced' | 'premium',
        isPlaying: boolean
    ) => {
        setIsVideoPlaying((prev) => ({
            ...prev,
            [cardType]: isPlaying
        }));
    };
    return (
        <GridSection hideVerticalGridLines>
            <div className="container">
                <div className="mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="my-6 text-center">
                        {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-lg">
                            <svg
                                className="size-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            Transform Your Business
                        </div> */}
                        <h2 className="mb-6  bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
                            What's in Your Scheduling Tool Box?
                        </h2>
                        <p className="mx-auto max-w-3xl text-2xl font-medium text-slate-600 dark:text-slate-400">
                            Transform your production scheduling challenges into competitive
                            advantages
                        </p>
                    </div>

                    {/* Tool Box Comparison Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* WhiteBox Mess vs Efficient Visual Schedule */}
                        <div className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-xl transition-all hover:-translate-y-3 hover:border-orange-300 hover:shadow-2xl dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
                            {/* Before/After Badge */}
                            <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg">
                                ✨ TRANSFORM
                            </div>

                            <div className="p-8">
                                {/* Problem Section */}
                                <div className="mb-8">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex size-6 items-center justify-center rounded-full bg-red-500 shadow-md">
                                            <svg
                                                className="size-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-red-600">
                                            BEFORE
                                        </h4>
                                    </div>
                                    <h3 className="mb-3 text-xl font-extrabold text-red-700 dark:text-red-300">
                                        WhiteBox Mess
                                    </h3>
                                    <p className="text-sm leading-relaxed text-red-600 dark:text-red-400">
                                        Chaotic whiteboard scheduling
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="mb-8 flex items-center">
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-red-300 via-orange-300 to-green-300" />
                                    <div className="mx-4 text-2xl font-bold text-orange-500">
                                        →
                                    </div>
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-red-300 via-orange-300 to-green-300" />
                                </div>

                                {/* Solution Section */}
                                <div>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex size-6 items-center justify-center rounded-full bg-green-500 shadow-md">
                                            <svg
                                                className="size-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-green-600">
                                            AFTER
                                        </h4>
                                    </div>
                                    <h3 className="mb-3 text-xl font-extrabold text-green-700 dark:text-green-300">
                                        Visual Schedule
                                    </h3>
                                    <p className="text-sm leading-relaxed text-green-600 dark:text-green-400">
                                        EDGE drag & drop environment
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Excel Pain vs Excel Relief */}
                        <div className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-xl transition-all hover:-translate-y-3 hover:border-orange-300 hover:shadow-2xl dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
                            {/* Before/After Badge */}
                            <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg">
                                ✨ TRANSFORM
                            </div>

                            <div className="p-8">
                                {/* Problem Section */}
                                <div className="mb-8">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex size-6 items-center justify-center rounded-full bg-red-500 shadow-md">
                                            <svg
                                                className="size-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-red-600">
                                            BEFORE
                                        </h4>
                                    </div>
                                    <h3 className="mb-3 text-xl font-extrabold text-red-700 dark:text-red-300">
                                        Excel Pain
                                    </h3>
                                    <p className="text-sm leading-relaxed text-red-600 dark:text-red-400">
                                        Complex formulas that break
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="mb-8 flex items-center">
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-red-300 via-orange-300 to-green-300" />
                                    <div className="mx-4 text-2xl font-bold text-orange-500">
                                        →
                                    </div>
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-red-300 via-orange-300 to-green-300" />
                                </div>

                                {/* Solution Section */}
                                <div>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex size-6 items-center justify-center rounded-full bg-green-500 shadow-md">
                                            <svg
                                                className="size-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-green-600">
                                            AFTER
                                        </h4>
                                    </div>
                                    <h3 className="mb-3 text-xl font-extrabold text-green-700 dark:text-green-300">
                                        Excel Relief
                                    </h3>
                                    <p className="text-sm leading-relaxed text-green-600 dark:text-green-400">
                                        Keep benefits, we handle math
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ERP Constraints vs Enhanced ERP */}
                        <div className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-xl transition-all hover:-translate-y-3 hover:border-orange-300 hover:shadow-2xl dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
                            {/* Before/After Badge */}
                            <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg">
                                ✨ TRANSFORM
                            </div>

                            <div className="p-8">
                                {/* Problem Section */}
                                <div className="mb-8">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex size-6 items-center justify-center rounded-full bg-red-500 shadow-md">
                                            <svg
                                                className="size-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-red-600">
                                            BEFORE
                                        </h4>
                                    </div>
                                    <h3 className="mb-3 text-xl font-extrabold text-red-700 dark:text-red-300">
                                        ERP Constraints
                                    </h3>
                                    <p className="text-sm leading-relaxed text-red-600 dark:text-red-400">
                                        Rigid systems, no flexibility
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="mb-8 flex items-center">
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-red-300 via-orange-300 to-green-300" />
                                    <div className="mx-4 text-2xl font-bold text-orange-500">
                                        →
                                    </div>
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-red-300 via-orange-300 to-green-300" />
                                </div>

                                {/* Solution Section */}
                                <div>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex size-6 items-center justify-center rounded-full bg-green-500 shadow-md">
                                            <svg
                                                className="size-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-green-600">
                                            AFTER
                                        </h4>
                                    </div>
                                    <h3 className="mb-3 text-xl font-extrabold text-green-700 dark:text-green-300">
                                        Enhanced ERP
                                    </h3>
                                    <p className="text-sm leading-relaxed text-green-600 dark:text-green-400">
                                        Seamless ERP integration
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Custom Chaos vs Fits like a Glove */}
                        <div className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-xl transition-all hover:-translate-y-3 hover:border-orange-300 hover:shadow-2xl dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
                            {/* Before/After Badge */}
                            <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-green-500 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg">
                                ✨ TRANSFORM
                            </div>

                            <div className="p-8">
                                {/* Problem Section */}
                                <div className="mb-8">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex size-6 items-center justify-center rounded-full bg-red-500 shadow-md">
                                            <svg
                                                className="size-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-red-600">
                                            BEFORE
                                        </h4>
                                    </div>
                                    <h3 className="mb-3 text-xl font-extrabold text-red-700 dark:text-red-300">
                                        Custom Chaos
                                    </h3>
                                    <p className="text-sm leading-relaxed text-red-600 dark:text-red-400">
                                        One-size-fits-all solutions
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="mb-8 flex items-center">
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-red-300 via-orange-300 to-green-300" />
                                    <div className="mx-4 text-2xl font-bold text-orange-500">
                                        →
                                    </div>
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-red-300 via-orange-300 to-green-300" />
                                </div>

                                {/* Solution Section */}
                                <div>
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex size-6 items-center justify-center rounded-full bg-green-500 shadow-md">
                                            <svg
                                                className="size-3 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <h4 className="text-xs font-black uppercase tracking-widest text-green-600">
                                            AFTER
                                        </h4>
                                    </div>
                                    <h3 className="mb-3 text-xl font-extrabold text-green-700 dark:text-green-300">
                                        Fits like a Glove
                                    </h3>
                                    <p className="text-sm leading-relaxed text-green-600 dark:text-green-400">
                                        Intuitive, quick adoption
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solutions for Every Business Size */}
                    <div className="mt-6">
                        <div className="mb-6 text-center">
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                                From Job Shops to SMBs to Multi-Nationals
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Solutions to fit any production scheduling application and
                                budget
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {/* Starter - Job Shops */}
                            <div className="group relative overflow-hidden rounded-3xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-slate-900">
                                {/* Price Badge */}
                                <div
                                    className={`animate-gentle-glow absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg ring-2 ring-white/20 transition-opacity duration-300 ${isVideoPlaying.starter ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
                                >
                                    STARTER
                                </div>

                                <div className="">
                                    {/* Video Section */}
                                    <div className="relative mb-6 overflow-hidden rounded-lg">
                                        <div className="relative aspect-video bg-slate-100 dark:bg-slate-800">
                                            <VideoPlayer
                                                videoUrl="https://www.usersolutions.com/wp-content/uploads/2022/10/Welcome-to-Job-Scheduler-Lite-JSL.mp4"
                                                title="EDGEBI Demo"
                                                thumbnail="https://www.usersolutions.com/wp-content/uploads/2022/10/insight-1.png"
                                                onPlayStateChange={(isPlaying) =>
                                                    handleVideoPlayState('starter', isPlaying)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-6">
                                            <div className="mb-4 flex items-center gap-3">
                                                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                                                    EDGEBI
                                                </h3>
                                            </div>
                                            <p className="mb-4 text-blue-600 dark:text-blue-400">
                                                Perfect for Job Shops & Small Manufacturers
                                            </p>
                                        </div>

                                        <div className="mb-6 space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-blue-500" />
                                                <span className="text-sm">
                                                    Shop Scheduling Made Easy
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-blue-500" />
                                                <span className="text-sm">Forward Scheduling</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-blue-500" />
                                                <span className="text-sm">Finite Capacity</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-blue-500" />
                                                <span className="text-sm">Free Trials Available</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <Button
                                                variant="outline"
                                                className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900/20"
                                                asChild
                                            >
                                                <Link
                                                    href="/jsl-job-scheduler-lite"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    View Details
                                                </Link>
                                            </Button>
                                        </div>

                                        <div className="text-center">
                                            <div className="mb-2 text-3xl font-bold text-blue-700 dark:text-blue-300">
                                                $1,000+
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Starting investment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Advanced - SMBs */}
                            <div className="group relative overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-lg transition-all hover:shadow-xl dark:border-orange-800 dark:bg-slate-900">
                                {/* Popular Badge - Enhanced */}
                                <div
                                    className={`animate-gentle-glow absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-4 py-2 text-sm font-bold text-white shadow-lg ring-2 ring-white/20 transition-opacity duration-1000 ${isVideoPlaying.advanced ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
                                >
                                    <span className="relative flex items-center gap-1">
                                        POPULAR
                                    </span>
                                </div>{' '}
                                <div className="">
                                    {/* Video Section */}
                                    <div className="relative mb-6 overflow-hidden rounded-lg">
                                        <div className="relative aspect-video bg-slate-100 dark:bg-slate-800">
                                            <VideoPlayer
                                                videoUrl="https://www.usersolutions.com/wp-content/uploads/2022/12/RMDB%20updated%20thumbnail.mp4"
                                                title="Resource Manager DB Demo"
                                                thumbnail="https://www.usersolutions.com/wp-content/uploads/2022/11/advanced-1.png"
                                                onPlayStateChange={(isPlaying) =>
                                                    handleVideoPlayState('advanced', isPlaying)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="px-6 pb-3">
                                        <div className="mb-6">
                                            <div className="mb-4 flex items-center gap-3">
                                                <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                                                    Resource Manager DB
                                                </h3>
                                            </div>
                                            <p className="mb-4 text-orange-600 dark:text-orange-400">
                                                Ideal for Growing SMBs & Mid-Size Companies
                                            </p>
                                        </div>

                                        <div className="mb-6 space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-orange-500" />
                                                <span className="text-sm">
                                                    Production Scheduling Your Way
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-orange-500" />
                                                <span className="text-sm">Flexible & Adaptable</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-orange-500" />
                                                <span className="text-sm">
                                                    Easy APS & MRP Implementation
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-orange-500" />
                                                <span className="text-sm">Free Trials Available</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-orange-500" />
                                                <span className="text-sm">Advanced Analytics</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <Button
                                                variant="outline"
                                                className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 dark:border-orange-800 dark:text-orange-300 dark:hover:bg-orange-900/20"
                                                asChild
                                            >
                                                <Link
                                                    href="/resource-manager-db-2"
                                                    target="_blank"
                                                >
                                                    View Details
                                                </Link>
                                            </Button>
                                        </div>

                                        <div className="text-center">
                                            <div className="mb-2 text-3xl font-bold text-orange-700 dark:text-orange-300">
                                                $5,000+
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Advanced solution
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Premium - Enterprise */}
                            <div className="group relative overflow-hidden rounded-3xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-slate-900">
                                {/* Premium Badge */}
                                <div
                                    className={`animate-gentle-glow absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-2 text-sm font-bold text-white shadow-lg ring-2 ring-white/20 transition-opacity duration-300 ${isVideoPlaying.premium ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
                                >
                                    PREMIUM
                                </div>

                                <div className="">
                                    {/* Video Section */}
                                    <div className="relative mb-6 overflow-hidden rounded-lg">
                                        <div className="relative aspect-video bg-slate-100 dark:bg-slate-800">
                                            <VideoPlayer
                                                videoUrl="https://www.usersolutions.com/wp-content/uploads/2022/12/EDGEBI%20updated%20thumbnail.mp4"
                                                title="EDGEBI Suite Demo"
                                                thumbnail="https://www.usersolutions.com/wp-content/uploads/2022/11/Premium-1.png"
                                                onPlayStateChange={(isPlaying) =>
                                                    handleVideoPlayState('premium', isPlaying)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="px-6">
                                        <div className="mb-6">
                                            <div className="mb-4 flex items-center gap-3">
                                                <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                                                    EDGEBI Suite
                                                </h3>
                                            </div>
                                            <p className="mb-4 text-purple-600 dark:text-purple-400">
                                                Enterprise-Grade for Multi-Nationals
                                            </p>
                                        </div>

                                        <div className="mb-6 space-y-3">
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-purple-500" />
                                                <span className="text-sm">Heat Map Reports</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-purple-500" />
                                                <span className="text-sm">Schedule Key Dates</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-purple-500" />
                                                <span className="text-sm">Live Embedded Excel</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="size-2 rounded-full bg-purple-500" />
                                                <span className="text-sm">Advanced Drag & Drop</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <Button
                                                variant="outline"
                                                className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900/20"
                                                asChild
                                            >
                                                <Link
                                                    href="/edgebi"
                                                    target="_black"
                                                >
                                                    View Details
                                                </Link>
                                            </Button>
                                        </div>

                                        <div className="text-center">
                                            <div className="mb-2 text-3xl font-bold text-purple-700 dark:text-purple-300">
                                                $25,000+
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Enterprise solution
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        {/* <div className="mt-6 text-center">
                            <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 dark:from-slate-900 dark:to-slate-800">
                                <h3 className="mb-4 text-2xl font-bold">
                                    Start Growing with User Solutions
                                </h3>
                                <p className="mb-6 text-lg text-muted-foreground">
                                    Production Planning and Scheduling Solutions for every
                                    business size and budget
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {/* <Button>
                                        <Link href="/product-2">See Feature List</Link>
                                    </Button> */}
                        {/* <Button variant="outline">
                                        <Link href="/contact">Schedule Demo</Link>
                                    </Button> */}
                        {/* </div>
                </div>
            </div> */}
                    </div>
                </div>
            </div>
        </GridSection>
    );
}
