import { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";

export function Navigation() {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const navItems = [
        { id: "home", label: "Home", href: "#home" },
        {
            id: "experience",
            label: "Experience/Education",
            href: "#experience",
        },
        { id: "technologies", label: "Technologies", href: "#technologies" },
        { id: "portfolio", label: "Portfolio", href: "#portfolio" },
        { id: "contact", label: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Handle navbar background
            setIsScrolled(scrollPosition > 50);

            // Handle scroll to top button
            setShowScrollTop(scrollPosition > 400);

            // Handle active section detection
            const sections = navItems.map((item) => item.id);

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Navigation Bar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
                            ${
                                isScrolled
                                    ? "bg-custom-dark/90 backdrop-blur-md border-b border-custom-border-gray-primary/30 shadow-lg shadow-black/20"
                                    : "bg-transparent"
                            }`}
            >
                <div className='max-w-6xl mx-auto px-6 py-4'>
                    <div className='flex items-center justify-between'>
                        {/* Logo/Brand */}
                        <div
                            className='group cursor-pointer'
                            onClick={() => scrollToSection("home")}
                        >
                            <h1
                                className='text-custom-font-white-primary text-xl font-bold 
                                          group-hover:text-transparent group-hover:bg-gradient-to-r 
                                          group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 
                                          group-hover:bg-clip-text transition-all duration-500'
                            >
                                Brandon
                            </h1>
                            <div
                                className='h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                                           scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'
                            ></div>
                        </div>

                        {/* Navigation Links */}
                        <div className='hidden md:flex items-center gap-2'>
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out
                                               hover:scale-105 group overflow-hidden
                                               ${
                                                   activeSection === item.id
                                                       ? "text-custom-blue-primary bg-custom-background-gray-hover border border-blue-400/30"
                                                       : "text-custom-font-gray-secondary hover:text-custom-font-white-primary hover:bg-custom-background-gray-hover"
                                               }`}
                                >
                                    {/* Animated background gradient on hover */}
                                    <div
                                        className='absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 
                                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg'
                                    ></div>

                                    <span className='relative z-10'>
                                        {item.label}
                                    </span>

                                    {/* Active indicator */}
                                    {activeSection === item.id && (
                                        <div
                                            className='absolute bottom-0 left-1/2 transform -translate-x-1/2 
                                                       w-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                                        ></div>
                                    )}

                                    {/* Subtle shine effect */}
                                    <div
                                        className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                                    -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out'
                                    ></div>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className='md:hidden'>
                            <button
                                className='text-custom-font-white-primary p-2 rounded-lg border border-custom-border-gray-primary
                                          hover:bg-custom-background-gray-hover hover:border-blue-400/50 
                                          transition-all duration-300'
                                onClick={() => {
                                    /* Mobile menu toggle logic */
                                }}
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
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className='fixed bottom-8 right-8 z-40 p-3 rounded-full border border-custom-border-gray-primary
                              bg-custom-background-gray-secondary hover:bg-custom-background-gray-hover
                              hover:border-blue-400/50 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20
                              active:scale-95 transition-all duration-500 ease-out group overflow-hidden'
                    aria-label='Scroll to top'
                >
                    {/* Animated background gradient on hover */}
                    <div
                        className='absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full'
                    ></div>

                    <BiChevronUp
                        size={24}
                        className='text-custom-font-gray-secondary group-hover:text-blue-300 
                                  group-hover:scale-110 transition-all duration-300 relative z-10'
                    />

                    {/* Subtle shine effect */}
                    <div
                        className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                    -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out'
                    ></div>
                </button>
            )}
        </>
    );
}
