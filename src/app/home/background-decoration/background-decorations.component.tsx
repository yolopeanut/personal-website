export function BackgroundDecorations() {
    return (
        <div className='fixed inset-0 pointer-events-none overflow-hidden'>
            {/* Top left area */}
            <div
                className='absolute rounded-full opacity-[0.02] blur-md animate-pulse'
                style={{
                    left: "5%",
                    top: "10%",
                    width: "300px",
                    height: "300px",
                    background:
                        "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)",
                    animationDuration: "20s",
                }}
            />

            {/* Top right area */}
            <div
                className='absolute rounded-full opacity-[0.015] blur-sm animate-pulse'
                style={{
                    right: "8%",
                    top: "15%",
                    width: "200px",
                    height: "200px",
                    background:
                        "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.2) 70%, transparent 100%)",
                    animationDuration: "25s",
                    animationDelay: "3s",
                }}
            />

            {/* Left middle */}
            <div
                className='absolute rounded-full opacity-[0.02] blur-md animate-pulse'
                style={{
                    left: "2%",
                    top: "45%",
                    width: "180px",
                    height: "180px",
                    background:
                        "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(6, 182, 212, 0.2) 60%, transparent 100%)",
                    animationDuration: "18s",
                    animationDelay: "7s",
                }}
            />

            {/* Right middle */}
            <div
                className='absolute rounded-full opacity-[0.01] blur-lg animate-pulse'
                style={{
                    right: "5%",
                    top: "50%",
                    width: "400px",
                    height: "400px",
                    background:
                        "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 80%, transparent 100%)",
                    animationDuration: "30s",
                    animationDelay: "5s",
                }}
            />

            {/* Bottom left */}
            <div
                className='absolute rounded-full opacity-[0.02] blur-sm animate-pulse'
                style={{
                    left: "10%",
                    bottom: "20%",
                    width: "250px",
                    height: "250px",
                    background:
                        "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
                    animationDuration: "22s",
                    animationDelay: "10s",
                }}
            />

            {/* Bottom right */}
            <div
                className='absolute rounded-full opacity-[0.015] blur-md animate-pulse'
                style={{
                    right: "12%",
                    bottom: "15%",
                    width: "320px",
                    height: "320px",
                    background:
                        "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(6, 182, 212, 0.2) 70%, transparent 100%)",
                    animationDuration: "28s",
                    animationDelay: "2s",
                }}
            />

            {/* Center background - very subtle */}
            <div
                className='absolute rounded-full opacity-[0.008] blur-xl animate-pulse'
                style={{
                    left: "50%",
                    top: "60%",
                    transform: "translate(-50%, -50%)",
                    width: "600px",
                    height: "600px",
                    background:
                        "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 90%, transparent 100%)",
                    animationDuration: "35s",
                    animationDelay: "12s",
                }}
            />

            {/* Small accent circles */}
            <div
                className='absolute rounded-full opacity-[0.025] blur-sm animate-pulse'
                style={{
                    left: "25%",
                    top: "25%",
                    width: "120px",
                    height: "120px",
                    background:
                        "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
                    animationDuration: "15s",
                    animationDelay: "8s",
                }}
            />

            <div
                className='absolute rounded-full opacity-[0.025] blur-sm animate-pulse'
                style={{
                    right: "30%",
                    bottom: "30%",
                    width: "140px",
                    height: "140px",
                    background:
                        "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)",
                    animationDuration: "17s",
                    animationDelay: "4s",
                }}
            />
        </div>
    );
}
