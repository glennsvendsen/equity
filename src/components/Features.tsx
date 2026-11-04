import { Clock, TrendingUp, CalendarDays, FileText, Laptop, Shield, Sparkles, CalendarClock, Gauge } from "lucide-react";

const features = [
    {
        icon: Gauge,
        title: "Balance Score",
        description: "One score from 0 to 100 shows whether you're ahead, behind or right on target, with a hint to match."
    },
    {
        icon: Clock,
        title: "Quick Add & Timer",
        description: "Long-press Add to log 1h, 2h, 3h or 8h, or start a timer and log the time when you stop."
    },
    {
        icon: CalendarClock,
        title: "Import from Calendar",
        description: "Turn meetings into entries in one tap. Declined events are skipped and you choose which calendars to use."
    },
    {
        icon: CalendarDays,
        title: "Add a Week",
        description: "Forgot to log? Enter the hours you worked for a whole week and Equity compares it to your weekly target."
    },
    {
        icon: TrendingUp,
        title: "Balance History",
        description: "See peak, low and average across weeks, months, quarters and years, plus a full timeline of every entry."
    },
    {
        icon: FileText,
        title: "Export Reports",
        description: "Generate PDF or Excel reports for your records or to share with your employer."
    },
    {
        icon: Laptop,
        title: "Mac Menu Bar App",
        description: "Keep your balance one glance away on your Mac. Same account, same data. Included with Equity Pro."
    },
    {
        icon: Shield,
        title: "Private & Secure",
        description: "Your data is encrypted and synced securely to the cloud. Sign in with Apple, English and Norwegian, no tracking."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-32">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-20 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                    <p className="text-sm tracking-label uppercase text-muted-foreground mb-4">
                        Features
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                        Everything you need.
                        <br />
                        <span className="text-muted-foreground">Nothing you don't.</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Equity focuses on what matters most—tracking your time balance with clarity and precision.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group p-8 rounded-2xl border border-border bg-card hover:bg-secondary/50 transition-colors opacity-0 animate-fade-up"
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <feature.icon className="w-6 h-6 text-accent mb-6" />
                            <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* One-time purchase badge */}
                <div className="flex justify-center mt-16 opacity-0 animate-fade-up" style={{ animationDelay: "1.0s" }}>
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent/20 bg-accent/5">
                        <Sparkles className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">
                            Free to start · Pro as a one-time purchase or yearly
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
