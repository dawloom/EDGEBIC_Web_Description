'use client';

import * as React from 'react';

import { GridSection } from '@/components/marketing/fragments/grid-section';

interface NTClipboardVideoProps {
  videoUrl?: string | null;
}

export function NTClipboardVideo({
  videoUrl
}: NTClipboardVideoProps): React.JSX.Element {
  // User Solutions product videos - replace these placeholder IDs with actual video IDs from https://www.usersolutions.com/videos/
  const productVideos = [
    {
      id: 'dQw4w9WgXcQ', // Replace with actual Welcome video ID
      title: 'Welcome',
      description: 'Introduction to User Solutions manufacturing software solutions',
      category: 'Overview'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual Resource Manager DB video ID
      title: 'Resource Manager DB',
      description: 'Complete database-driven production scheduling solution for complex manufacturing environments',
      category: 'Product Demo'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual Workcenter Scheduler video ID
      title: 'Workcenter Scheduler XL',
      description: 'Excel-based scheduling solution for shop floor operations and workcenter management',
      category: 'Product Demo'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual Resource Manager for Excel video ID
      title: 'Resource Manager for Excel',
      description: 'Advanced resource planning and finite capacity scheduling integrated with Excel',
      category: 'Product Demo'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual RMX Training video ID
      title: 'Resource Manager Training (RMX)',
      description: 'Comprehensive training series for Resource Manager for Excel',
      category: 'Training'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual Initialization video ID
      title: 'Initialization',
      description: 'Learn how to initialize and set up your Resource Manager system',
      category: 'Training'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual Scheduling video ID
      title: 'Scheduling',
      description: 'Master scheduling techniques and best practices with Resource Manager',
      category: 'Training'
    },
    {
      id: 'dQw4w9WgXcQ', // Replace with actual Reporting video ID
      title: 'Reporting',
      description: 'Generate comprehensive reports and analyze production data',
      category: 'Training'
    }
  ];

  const [activeVideo, setActiveVideo] = React.useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(productVideos.map(video => video.category)))];
  
  // Filter videos by category
  const filteredVideos = selectedCategory === 'All' 
    ? productVideos 
    : productVideos.filter(video => video.category === selectedCategory);
  
  const currentVideo = filteredVideos[activeVideo] || productVideos[0];
  const embedUrl = `https://www.youtube.com/embed/${currentVideo.id}?autoplay=0&rel=0`;

  // Reset active video when category changes
  React.useEffect(() => {
    setActiveVideo(0);
  }, [selectedCategory]);

  return (
    <GridSection hideVerticalGridLines>
      <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Product Video Library
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Comprehensive video demonstrations and training for our award-winning manufacturing software solutions
            </p>
            
            {/* Category Filter */}
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    category === selectedCategory
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
                <iframe
                  className="aspect-video w-full"
                  src={embedUrl}
                  title={currentVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Video Selection */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {filteredVideos.map((video, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveVideo(index)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      index === activeVideo
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    {video.title}
                  </button>
                ))}
              </div>

              <div className="mt-4 text-center">
                <p className="text-muted-foreground">
                  {currentVideo.description}
                </p>
              </div>

              {/* Product Features */}
              <div className="mt-12 grid grid-cols-1 gap-6 text-left md:grid-cols-3">
                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800">
                  <h3 className="mb-2 text-lg font-semibold">
                    Production Scheduling
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced finite capacity scheduling with visual timeline
                    management and resource optimization.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800">
                  <h3 className="mb-2 text-lg font-semibold">
                    Resource Management
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive resource planning with constraint management
                    and capacity optimization.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800">
                  <h3 className="mb-2 text-lg font-semibold">
                    Real-Time Tracking
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor production progress and make data-driven decisions
                    with live updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
