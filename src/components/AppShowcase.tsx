import { ChevronLeft, ChevronRight } from "lucide-react";

const AppShowcase = () => {
    return (
        <section className="py-32 bg-secondary/30">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                    <p className="text-sm tracking-label uppercase text-muted-foreground mb-4">
                        App Preview
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                        See it in action
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Timeline Screen */}
                    <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                        <div className="bg-card border border-border rounded-[2rem] p-3 shadow-lg">
                            <div className="bg-secondary/30 rounded-[1.5rem] overflow-hidden p-5 space-y-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="text-sm font-medium flex-1 text-center">Timeline</span>
                                </div>

                                <div className="flex items-center justify-between text-xs">
                                    <span className="tracking-label uppercase text-muted-foreground">All</span>
                                    <span className="tracking-label uppercase text-muted-foreground">Date</span>
                                </div>

                                <div className="border-t border-border" />

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-muted-foreground">Yesterday</span>
                                        <span className="text-xs px-2 py-1 border border-border rounded">+7.0h</span>
                                    </div>

                                    {[2, 2, 3].map((hours, i) => (
                                        <div key={i} className="bg-card border border-border rounded-xl p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-0.5 h-10 bg-positive rounded-full" />
                                                <div>
                                                    <p className="text-lg text-positive font-light">+{hours}.0h</p>
                                                    <p className="text-xs text-muted-foreground">Quick add</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-4">Timeline View</p>
                    </div>

                    {/* Balance History Screen */}
                    <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                        <div className="bg-card border border-border rounded-[2rem] p-3 shadow-lg">
                            <div className="bg-secondary/30 rounded-[1.5rem] overflow-hidden p-5 space-y-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="text-xs tracking-label uppercase text-muted-foreground flex-1 text-center">Balance History</span>
                                </div>

                                <div className="text-center py-4">
                                    <p className="text-4xl font-light">+21.0h</p>
                                    <p className="text-xs tracking-label uppercase text-muted-foreground mt-2">Current Balance</p>
                                </div>

                                {/* Chart representation */}
                                <div className="h-32 flex items-end gap-1 px-4">
                                    <svg viewBox="0 0 200 60" className="w-full h-full">
                                        <path
                                            d="M0,55 Q30,50 50,40 T100,25 T150,15 T200,5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="text-foreground"
                                        />
                                        <circle cx="200" cy="5" r="4" className="fill-foreground" />
                                    </svg>
                                </div>

                                <div className="flex gap-2 justify-center">
                                    {['Week', 'Month', 'Quarter', 'Year'].map((period, i) => (
                                        <span
                                            key={period}
                                            className={`text-xs px-3 py-2 rounded-lg ${i === 0 ? 'bg-primary text-primary-foreground' : 'border border-border'}`}
                                        >
                                            {period}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-2 pt-2">
                                    {[
                                        { label: 'Peak', value: '+21.0h' },
                                        { label: 'Lowest', value: '+3.0h' },
                                        { label: 'Average', value: '+13.3h' }
                                    ].map(stat => (
                                        <div key={stat.label} className="flex justify-between py-2 border-b border-border last:border-0">
                                            <span className="text-xs tracking-label uppercase text-muted-foreground">{stat.label}</span>
                                            <span className="text-sm font-light">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-4">Balance History</p>
                    </div>

                    {/* Calendar Screen */}
                    <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                        <div className="bg-card border border-border rounded-[2rem] p-3 shadow-lg">
                            <div className="bg-secondary/30 rounded-[1.5rem] overflow-hidden p-5 space-y-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="text-sm font-medium flex-1 text-center">Calendar</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <ChevronLeft className="w-4 h-4" />
                                        <span className="text-sm">December 2025</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs px-3 py-1.5 border border-border rounded">Today</span>
                                </div>

                                <div className="bg-card border border-border rounded-xl p-3">
                                    <div className="flex justify-between text-xs text-muted-foreground mb-2">
                                        <span>Total this month</span>
                                        <span className="text-positive">+21.0h</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>Entries</span>
                                        <span>7</span>
                                    </div>
                                </div>

                                {/* Mini calendar */}
                                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                                        <span key={i} className="text-muted-foreground py-1">{d}</span>
                                    ))}
                                    {[...Array(35)].map((_, i) => {
                                        const day = i - 1;
                                        const hasPositive = [7, 23].includes(day);
                                        const hasNegative = day === 22;
                                        return (
                                            <span
                                                key={i}
                                                className={`py-1.5 rounded ${day === 24 ? 'font-medium' : ''} ${day < 0 || day > 30 ? 'text-muted-foreground/30' : ''}`}
                                            >
                                                {day >= 0 && day <= 30 ? day + 1 : ''}
                                                {hasPositive && <span className="block w-1 h-1 bg-positive rounded-full mx-auto mt-0.5" />}
                                                {hasNegative && <span className="block w-1 h-1 bg-negative rounded-full mx-auto mt-0.5" />}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-4">Calendar View</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
