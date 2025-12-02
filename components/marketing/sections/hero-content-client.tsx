'use client';

import * as React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Play,
  PlayCircle
} from 'lucide-react';

import { VideoModal } from '@/components/marketing/video-modal';

const newsItems = [
  'EDGEBIC announces revolutionary method for Production Planning and Scheduling evaluations',
  'Forging Ahead: Leveraging ERP Data for Enhanced Planning and Scheduling',
  'EDGEBIC continues partnerships with multiple Universities for real-life experience',
  'EDGEBIC Unveils Revolutionary Manufacturing Software: Customized Solutions for Enhanced Scheduling',
  'Resource Manager-DB Innovates Li-ion Battery Production Scheduling',
  'Scheduling System Narrows Skills Gap for Fire-Rated Glass Manufacturing'
];

export function HeroContent(): React.JSX.Element {
  const [currentNewsIndex, setCurrentNewsIndex] = React.useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const [initialVideo, setInitialVideo] = React.useState<'first' | 'second'>(
    'first'
  );

  const nextSlide = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentNewsIndex((prev) =>
      prev === 0 ? newsItems.length - 1 : prev - 1
    );
  };

  const handleFirstVideoButtonClick = () => {
    setInitialVideo('first');
    setIsVideoModalOpen(true);
  };

  const handleSecondVideoButtonClick = () => {
    setInitialVideo('second');
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
  };

  // Auto-scroll enabled with 1 second delay
  React.useEffect(() => {
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="relative w-full bg-white dark:bg-slate-900">
      {/* Main Hero Content */}
      <div className="mx-auto max-w-7xl p-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Main Title */}
            <h1 className="text-[1.75rem]  leading-tight text-slate-900 dark:text-white md:text-[2.5rem] lg:text-[3rem]">
              Production Planning and Scheduling Software
            </h1>

            {/* Subtitle */}
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
              Ideal for companies with 10 - 200 employees
            </p>

            {/* Description */}
            <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                What makes <span className="font-semibold italic">US</span>{' '}
                (User Solution) unique: we work{' '}
                <span className="font-semibold italic">with you</span> to solve
                production scheduling challenges{' '}
                <span className="font-semibold italic">your way</span>. Benefit
                from an adaptable and affordable solution that will fit you like
                a glove.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={handleFirstVideoButtonClick}
                className="inline-flex items-center justify-center gap-2 rounded bg-[#004a8f] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#003d75]"
              >
                Free Trial
              </button>
              <button
                onClick={handleSecondVideoButtonClick}
                className="inline-flex items-center justify-center gap-2 rounded bg-transparent px-8 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <Play className="size-5 fill-current" />
                See how it works
              </button>
            </div>

            {/* Ratings/Reviews Section */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="size-5 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                {/* Half star */}
                <svg
                  className="size-5"
                  viewBox="0 0 20 20"
                >
                  <defs>
                    <linearGradient id="halfStarGradient">
                      <stop
                        offset="50%"
                        stopColor="#FACC15"
                      />
                      <stop
                        offset="50%"
                        stopColor="#E5E7EB"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#halfStarGradient)"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                  Top-Rated Manufacturing Software
                </span>
              </div>
              <div className="flex items-center gap-4">
                {/* G2 Logo */}
                <img
                  src="https://www.mrpeasy.com/wp-content/uploads/2024/11/g2-logo.svg"
                  alt="G2"
                  className="h-6"
                />
                {/* Capterra Logo */}
                <img
                  src="https://www.mrpeasy.com/wp-content/uploads/2024/11/capterra-logo.svg"
                  alt="Capterra"
                  className="h-6"
                />
                {/* Software Advice Logo */}
                <img
                  src="https://www.mrpeasy.com/wp-content/uploads/2024/11/software-advice-logo-1.svg"
                  alt="Software Advice"
                  className="h-6"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden h-full lg:block"
          >
            <div className="relative size-full">
              <img
                src="https://www.usersolutions.com/wp-content/uploads/2022/12/slide4.jpg"
                alt="Production Planning Software"
                className="size-full rounded-lg object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseModal}
        firstVideoId="nZChakmMIOI"
        secondVideoId="IR8NhOlV_zM"
        initialVideo={initialVideo}
      />
    </div>
  );
}
