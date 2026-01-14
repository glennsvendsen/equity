const RealScreenshots = () => {
    return (
        <section className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                    <p className="text-sm tracking-label uppercase text-muted-foreground mb-4">
                        See it yourself
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                        Designed for simplicity.
                        <br />
                        <span className="text-muted-foreground">Built for power users.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
                    {/* Smart Fill & Calendar Import Screenshot */}
                    <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                            <div className="relative bg-card border border-border rounded-3xl p-2 shadow-2xl overflow-hidden">
                                <img
                                    src="/add-entry-screenshot.png"
                                    alt="Smart Fill and Calendar Import"
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
                        <div className="mt-8 space-y-3">
                            <h3 className="text-2xl font-light">Smart Fill & Calendar Import</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Type naturally or import directly from your calendar. Equity automatically calculates hours
                                and suggests entries based on your schedule.
                            </p>
                        </div>
                    </div>

                    {/* Insights Screenshot */}
                    <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                            <div className="relative bg-card border border-border rounded-3xl p-2 shadow-2xl overflow-hidden">
                                <img
                                    src="/insights-screenshot.png"
                                    alt="Advanced Insights and Analytics"
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
                        <div className="mt-8 space-y-3">
                            <h3 className="text-2xl font-light">Advanced Insights</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Understand your work patterns with detailed analytics. Track overtime days, tag breakdowns,
                                and weekly comparisons at a glance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature highlights */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
                    <div className="text-center p-6 rounded-2xl border border-border bg-card/50">
                        <p className="text-3xl font-light mb-2">10-day</p>
                        <p className="text-sm text-muted-foreground">Free trial included</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl border border-border bg-card/50">
                        <p className="text-3xl font-light mb-2">Cloud Sync</p>
                        <p className="text-sm text-muted-foreground">Across all devices</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl border border-border bg-card/50">
                        <p className="text-3xl font-light mb-2">Pro Features</p>
                        <p className="text-sm text-muted-foreground">Advanced insights & export</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealScreenshots;
