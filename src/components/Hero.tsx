import appScreenshot from "../assets/app-screenshot-main.png";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-16">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left content */}
                    <div className="space-y-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                        <div className="space-y-4">
                            <p className="text-sm tracking-label uppercase text-muted-foreground">
                                Time Balance Tracker
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance">
                                Track your time.
                                <br />
                                <span className="text-muted-foreground">Own your balance.</span>
                            </h1>
                        </div>

                        <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                            A minimalistic time tracker that helps you visualize your work-life balance.
                            Add hours worked, deduct time off, and see your true time equity.
                        </p>

                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href="#features"
                                className="inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground text-sm tracking-label uppercase rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Learn More
                            </a>
                            <a
                                href="https://apps.apple.com/no/app/equity-time-tracker/id6756896058"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-12 px-8 border border-border text-sm tracking-label uppercase rounded-lg hover:bg-secondary transition-colors"
                            >
                                App Store
                            </a>
                        </div>
                    </div>

                    {/* Right - iPhone 16 Pro Frame with Screenshot */}
                    <div className="relative opacity-0 animate-fade-up flex justify-center" style={{ animationDelay: "0.3s" }}>
                        <div className="relative">
                            {/* iPhone 16 Pro Frame */}
                            <div className="relative mx-auto w-[280px] md:w-[320px]">
                                {/* Outer frame */}
                                <div className="relative bg-[#1a1a1a] rounded-[3rem] p-[3px] shadow-2xl shadow-primary/10">
                                    {/* Titanium edge */}
                                    <div className="relative bg-gradient-to-b from-[#3a3a3c] via-[#2c2c2e] to-[#1c1c1e] rounded-[2.875rem] p-[2px]">
                                        {/* Inner black bezel */}
                                        <div className="relative bg-black rounded-[2.75rem] p-[10px]">
                                            {/* Screen container */}
                                            <div className="relative rounded-[2.25rem] overflow-hidden bg-black">
                                                {/* Dynamic Island */}
                                                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 w-[90px] h-[28px] bg-black rounded-full" />

                                                {/* Screenshot */}
                                                <img
                                                    src={appScreenshot}
                                                    alt="Equity App - Time Balance Tracker"
                                                    className="w-full h-auto block"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Side buttons */}
                                    {/* Power button */}
                                    <div className="absolute right-[-2px] top-[120px] w-[3px] h-[60px] bg-[#2c2c2e] rounded-r-sm" />

                                    {/* Volume buttons */}
                                    <div className="absolute left-[-2px] top-[100px] w-[3px] h-[28px] bg-[#2c2c2e] rounded-l-sm" />
                                    <div className="absolute left-[-2px] top-[140px] w-[3px] h-[50px] bg-[#2c2c2e] rounded-l-sm" />
                                    <div className="absolute left-[-2px] top-[200px] w-[3px] h-[50px] bg-[#2c2c2e] rounded-l-sm" />
                                </div>
                            </div>

                            {/* Subtle reflection/glow effect */}
                            <div className="absolute -inset-8 bg-gradient-to-b from-accent/5 via-transparent to-transparent rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
