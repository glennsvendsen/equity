const slides = [
    { src: "2-balancecard", alt: "Total balance card with week and month totals and recent entries", title: "Your balance" },
    { src: "3-score", alt: "Balance score gauge", title: "Balance score" },
    { src: "4-addweek", alt: "Add a week screen", title: "Add a week" },
    { src: "5-timeline", alt: "Timeline of overtime and time off", title: "Timeline" },
    { src: "6-trend", alt: "Balance history chart with peak, low and average", title: "Trend" },
    { src: "7-export", alt: "PDF and Excel export", title: "Export" },
    { src: "8-dark", alt: "Equity in dark mode", title: "Dark mode" },
];

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
            </div>

            <div
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-8"
                aria-label="Equity screenshots"
            >
                {slides.map((slide) => (
                    <figure key={slide.src} className="snap-center shrink-0 w-[260px] md:w-[280px]">
                        <img
                            src={`./screenshots/${slide.src}.jpg`}
                            alt={slide.alt}
                            width={720}
                            height={1565}
                            loading="lazy"
                            className="w-full h-auto rounded-3xl border border-border shadow-xl"
                        />
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default RealScreenshots;
