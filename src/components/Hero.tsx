import { APP_STORE_URL } from "../lib/links";

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
                            Log overtime and time off, follow your balance score, and see your true time equity. On iPhone and in your Mac menu bar.
                        </p>

                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href="#features"
                                className="inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground text-sm tracking-label uppercase rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Learn More
                            </a>
                            <a
                                href={APP_STORE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-12 px-8 border border-border text-sm tracking-label uppercase rounded-lg hover:bg-secondary transition-colors"
                            >
                                App Store
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Free to start</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Private by design</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Syncs to your Mac</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - store slide (already includes the device frame) */}
                    <div className="relative opacity-0 animate-fade-up flex justify-center" style={{ animationDelay: "0.3s" }}>
                        <div className="absolute -inset-8 bg-gradient-to-b from-accent/5 via-transparent to-transparent rounded-full blur-3xl -z-10" />
                        <img
                            src="./screenshots/1-balance.jpg"
                            alt="Equity home screen showing a total balance of +3.5 hours"
                            width={720}
                            height={1565}
                            className="w-[280px] md:w-[340px] h-auto rounded-[2rem] border border-border shadow-2xl shadow-primary/10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
