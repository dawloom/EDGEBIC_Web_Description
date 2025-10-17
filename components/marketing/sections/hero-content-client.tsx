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

  // Auto-scroll disabled by default
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div
      className="relative !mt-0 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://www.usersolutions.com/wp-content/uploads/2022/12/slide4.jpg")'
      }}
    >
      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex min-h-[500px] flex-col items-center justify-center px-4 pb-20 pt-16 text-center text-white"
      >
        {/* Main Title */}
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Production Planning and Scheduling Software
        </h1>

        {/* Description */}
        <div className="mb-6 max-w-4xl text-lg md:text-xl lg:text-2xl">
          <p className="mb-4">
            What makes <span className="font-bold italic">US</span> (User
            Solution) unique: we work{' '}
            <span className="font-bold italic">with you</span> to solve
            production scheduling
          </p>
          <p>
            challenges <span className="font-bold italic">your way</span>.
            Benefit from an adaptable and affordable solution that will fit you
            like a glove.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={handleFirstVideoButtonClick}
            className="flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition-all hover:bg-yellow-300 hover:shadow-lg"
          >
            <Play className="size-5" />
            NEXT STEPS - PLAY 30 SEC VIDEO
          </button>
          <button
            onClick={handleSecondVideoButtonClick}
            className="flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition-all hover:bg-yellow-300 hover:shadow-lg"
          >
            <PlayCircle className="size-5" />
            90 SEC COMPANY OVERVIEW
          </button>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center">
          <p className="text-xl font-bold text-yellow-300 md:text-2xl">
            LESS TRAINING | QUICKER IMPLEMENTATION | FASTER RETURN
          </p>
        </div>
      </motion.div>

      {/* Integrated Latest News Banner */}
      <div className="!min-w-lg absolute inset-x-0 bottom-0 bg-blue-600/90 p-4 text-white shadow-2xl backdrop-blur-sm">
        <div className="container flex items-center justify-center gap-8">
          {/* Latest News Section - Centered */}
          <div className="flex items-center gap-4">
            <div className="shrink-0">
              <span className="rounded bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-wide">
                Latest News
              </span>
            </div>

            {/* Navigation and Content */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="flex size-8 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/30"
                aria-label="Previous news"
              >
                <ChevronLeft className="size-4" />
              </button>

              <div className="min-w-0 max-w-md overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentNewsIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className=" text-center text-sm font-medium"
                  >
                    {newsItems[currentNewsIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={nextSlide}
                className="flex size-8 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/30"
                aria-label="Next news"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Students Section Button */}
          <div className="shrink-0">
            <Link
              href="/students"
              target="_blank"
              className="flex items-center gap-2 rounded bg-white/20 px-4 py-2 text-sm font-bold transition-all hover:bg-white/30 hover:shadow-lg"
            >
              <GraduationCap className="size-4" />
              <span className="hidden sm:inline">Students Section</span>
              <span className="sm:hidden">Students</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseModal}
        firstVideoId="nZChakmMIOI"
        secondVideoId="umKFJYqmJ10"
        initialVideo={initialVideo}
      />
    </div>
  );
}
