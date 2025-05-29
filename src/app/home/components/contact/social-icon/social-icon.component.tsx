import type { ReactNode } from "react";

interface SocialIconProps {
    href: string;
    icon: ReactNode;
    ariaLabel: string;
    hoverColor: "blue" | "cyan" | "purple";
    external?: boolean;
}

export function SocialIcon({
    href,
    icon,
    ariaLabel,
    hoverColor,
    external = false,
}: SocialIconProps) {
    const colorClasses = {
        blue: {
            border: "hover:border-blue-400/50",
            shadow: "hover:shadow-blue-500/20",
            activeShadow: "active:shadow-blue-500/40",
            iconColor: "group-hover:text-blue-300",
            gradient: "from-blue-600/10 via-purple-600/10 to-cyan-600/10",
        },
        cyan: {
            border: "hover:border-cyan-400/50",
            shadow: "hover:shadow-cyan-500/20",
            activeShadow: "active:shadow-cyan-500/40",
            iconColor: "group-hover:text-cyan-300",
            gradient: "from-cyan-600/10 via-blue-600/10 to-purple-600/10",
        },
        purple: {
            border: "hover:border-purple-400/50",
            shadow: "hover:shadow-purple-500/20",
            activeShadow: "active:shadow-purple-500/40",
            iconColor: "group-hover:text-purple-300",
            gradient: "from-purple-600/10 via-blue-600/10 to-cyan-600/10",
        },
    };

    const colors = colorClasses[hoverColor];

    return (
        <a
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className={`group relative p-4 rounded-2xl border border-custom-border-gray-primary 
                      ${colors.border} hover:bg-custom-background-gray-hover 
                      hover:scale-110 ${colors.shadow} hover:-translate-y-2
                      active:scale-95 active:translate-y-0 active:shadow-lg ${colors.activeShadow}
                      transition-all duration-500 ease-out hover:duration-300 active:duration-150
                      overflow-hidden`}
            aria-label={ariaLabel}
        >
            {/* Animated background gradient on hover */}
            <div
                className={`absolute inset-0 bg-gradient-to-r ${colors.gradient}
                            opacity-0 group-hover:opacity-100 group-active:opacity-30 transition-opacity duration-500 rounded-2xl`}
            ></div>

            <div
                className={`text-custom-font-gray-secondary ${colors.iconColor} group-hover:scale-110 
                          group-active:scale-100 transition-all duration-300 relative z-10`}
            >
                {icon}
            </div>

            {/* Subtle shine effect */}
            <div
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out'
            ></div>
        </a>
    );
}
