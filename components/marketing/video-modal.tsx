'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    firstVideoId: string;
    secondVideoId: string;
    initialVideo?: 'first' | 'second';
}

export function VideoModal({
    isOpen,
    onClose,
    firstVideoId,
    secondVideoId,
    initialVideo = 'first'
}: VideoModalProps): React.JSX.Element {
    const [currentVideo, setCurrentVideo] = React.useState<'first' | 'second'>(
        initialVideo
    );

    React.useEffect(() => {
        if (isOpen) {
            setCurrentVideo(initialVideo);
        }
    }, [isOpen, initialVideo]);

    const handleCloseClick = () => {
        onClose();
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    if (!isOpen) return <></>;

    const currentVideoId =
        currentVideo === 'first' ? firstVideoId : secondVideoId;

    // Use the standard YouTube embed URL without extra parameters
    const embedUrl = `https://www.youtube.com/embed/${currentVideoId}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleCloseClick}
                            className="absolute -top-12 right-0 z-10 flex size-10 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-white/30"
                            aria-label="Close modal"
                        >
                            <X className="size-6" />
                        </button>
                        {/* Video Container */}
                        <div className="relative overflow-hidden rounded-lg bg-black">
                            <div className="aspect-video w-full">
                                <iframe
                                    key={currentVideoId}
                                    src={embedUrl}
                                    title="YouTube video player"
                                    className="size-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
