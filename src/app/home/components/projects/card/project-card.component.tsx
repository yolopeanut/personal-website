import { useState } from "react";

interface ProjectCardProps {
    imageArray: string[];
    title: string;
    technologyArray: string[];
    description: string;
}

export function ProjectCard({
    imageArray,
    title,
    technologyArray,
    description,
}: ProjectCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === imageArray.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? imageArray.length - 1 : prev - 1
        );
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            closeModal();
        } else if (e.key === "ArrowRight") {
            nextImage();
        } else if (e.key === "ArrowLeft") {
            prevImage();
        }
    };

    return (
        <>
            <div className='group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 hover:scale-[1.02]'>
                <div className='flex h-64'>
                    {/* Image Carousel - Side positioned */}
                    <div className='w-72 relative overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700'>
                        {/* Current Image */}
                        <div className='relative w-full h-full p-4'>
                            <img
                                src={imageArray[currentImageIndex]}
                                alt={`${title} screenshot ${
                                    currentImageIndex + 1
                                }`}
                                className='w-full h-full object-cover rounded-lg shadow-md border border-gray-200 dark:border-gray-600 transition-all duration-500 cursor-pointer hover:scale-105'
                                onClick={openModal}
                            />
                        </div>

                        {/* Navigation Buttons */}
                        {imageArray.length > 1 && (
                            <>
                                {/* Left Button */}
                                <button
                                    onClick={prevImage}
                                    className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110 backdrop-blur-sm'
                                    aria-label='Previous image'
                                >
                                    <svg
                                        className='w-4 h-4 text-gray-700 dark:text-gray-300'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M15 19l-7-7 7-7'
                                        />
                                    </svg>
                                </button>

                                {/* Right Button */}
                                <button
                                    onClick={nextImage}
                                    className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110 backdrop-blur-sm'
                                    aria-label='Next image'
                                >
                                    <svg
                                        className='w-4 h-4 text-gray-700 dark:text-gray-300'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M9 5l7 7-7 7'
                                        />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image Indicators */}
                        {imageArray.length > 1 && (
                            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
                                {imageArray.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            setCurrentImageIndex(index)
                                        }
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentImageIndex
                                                ? "bg-blue-500 dark:bg-blue-400 scale-125"
                                                : "bg-white/50 dark:bg-gray-400/50 hover:bg-white/80 dark:hover:bg-gray-400/80"
                                        }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Image Counter */}
                        {imageArray.length > 1 && (
                            <div className='absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm'>
                                {currentImageIndex + 1} / {imageArray.length}
                            </div>
                        )}
                    </div>

                    {/* Content - Takes remaining space */}
                    <div className='flex-1 p-6 flex flex-col justify-between'>
                        <div className='space-y-4'>
                            {/* Title */}
                            <h1 className='text-custom-font-white-primary text-xl font-bold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200'>
                                {title}
                            </h1>

                            {/* Technologies */}
                            <div className='flex flex-wrap gap-2'>
                                {technologyArray.map((technology, index) => (
                                    <span
                                        key={index}
                                        className='px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700'
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            {/* Description */}
                            <p className='text-custom-font-gray-secondary text-sm leading-relaxed line-clamp-4'>
                                {description}
                            </p>
                        </div>

                        {/* View Project - Bottom aligned */}
                        <div className='pt-4'>
                            <div className='inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer'>
                                View Project
                                <svg
                                    className='ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M9 5l7 7-7 7'
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
                    onClick={closeModal}
                    onKeyDown={handleKeyDown}
                    tabIndex={-1}
                >
                    <div className='relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center'>
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className='absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 hover:scale-110'
                            aria-label='Close modal'
                        >
                            <svg
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>

                        {/* Main Image */}
                        <div className='relative w-full h-full flex items-center justify-center'>
                            <img
                                src={imageArray[currentImageIndex]}
                                alt={`${title} screenshot ${
                                    currentImageIndex + 1
                                }`}
                                className='max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-500 ease-in-out'
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>

                        {/* Navigation Buttons */}
                        {imageArray.length > 1 && (
                            <>
                                {/* Left Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage();
                                    }}
                                    className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 backdrop-blur-sm'
                                    aria-label='Previous image'
                                >
                                    <svg
                                        className='w-6 h-6'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M15 19l-7-7 7-7'
                                        />
                                    </svg>
                                </button>

                                {/* Right Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                    className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 backdrop-blur-sm'
                                    aria-label='Next image'
                                >
                                    <svg
                                        className='w-6 h-6'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M9 5l7 7-7 7'
                                        />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image Indicators */}
                        {imageArray.length > 1 && (
                            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3'>
                                {imageArray.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImageIndex(index);
                                        }}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentImageIndex
                                                ? "bg-white scale-125 shadow-lg"
                                                : "bg-white/50 hover:bg-white/80"
                                        }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Image Counter */}
                        {imageArray.length > 1 && (
                            <div className='absolute top-4 left-4 bg-black/50 text-white text-sm px-3 py-2 rounded backdrop-blur-sm'>
                                {currentImageIndex + 1} / {imageArray.length}
                            </div>
                        )}

                        {/* Image Title */}
                        <div className='absolute bottom-4 left-4 bg-black/50 text-white text-sm px-3 py-2 rounded backdrop-blur-sm max-w-md'>
                            <div className='font-medium'>{title}</div>
                            <div className='text-xs text-gray-300 mt-1'>
                                Image {currentImageIndex + 1}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
