import { Download } from "lucide-react";
import { MAC_DOWNLOAD_URL, MAC_VERSION } from "../lib/links";

const points = [
    "Balance gauge, score and hint",
    "Week and month totals",
    "Timer, quick add and recent entries",
    "Calendar suggestions for extra time and days off",
    "Same account as iPhone, synced instantly",
];

const MacApp = () => {
    return (
        <section id="mac" className="py-32">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <img
                                src="./mac/icon.png"
                                alt="Equity for Mac app icon"
                                width={64}
                                height={64}
                                className="w-16 h-16 mb-6"
                            />
                            <p className="text-sm tracking-label uppercase text-muted-foreground">
                                Equity for Mac
                            </p>
                            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                                Your balance,
                                <br />
                                <span className="text-muted-foreground">in the menu bar.</span>
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                            A small companion that lives next to your clock. Check where you stand, start a timer or log an hour without opening your phone. Optionally, let it suggest time from your calendar.
                        </p>

                        <ul className="space-y-3">
                            {points.map((point) => (
                                <li key={point} className="flex items-center gap-3 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a
                                href={MAC_DOWNLOAD_URL}
                                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-primary text-primary-foreground text-sm tracking-label uppercase rounded-lg hover:opacity-90 transition-opacity"
                            >
                                <Download className="w-4 h-4" />
                                Download for Mac
                            </a>
                            <span className="text-sm text-muted-foreground">
                                Version {MAC_VERSION} · macOS 14 or later
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="./mac/scene.png"
                            alt="The Equity menu bar item showing +3.5 hours, with its popover open showing the balance score, week and month totals, a timer and recent entries"
                            width={450}
                            height={699}
                            loading="lazy"
                            className="w-full max-w-[340px] md:max-w-[400px] h-auto drop-shadow-xl"
                        />
                    </div>
                </div>
                    <div className="max-w-5xl mx-auto mt-16 p-8 rounded-2xl border border-border bg-card space-y-6">
                        <p className="text-sm tracking-label uppercase text-muted-foreground">Good to know</p>
                        <dl className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                            <div>
                                <dt className="font-medium mb-1">Requires Equity Pro</dt>
                                <dd className="text-muted-foreground leading-relaxed">
                                    The Mac app is part of Equity Pro. Get Pro in the iOS app, then sign in on your Mac with the same account.
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium mb-1">Sign in the same way</dt>
                                <dd className="text-muted-foreground leading-relaxed">
                                    Use your email and password or Sign in with Apple, and your entries appear right away.
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium mb-1">Calendar suggestions</dt>
                                <dd className="text-muted-foreground leading-relaxed">
                                    Off by default. Switch it on in Settings and Equity suggests extra hours and days off from your calendar. Nothing is added until you press +, and your events stay on your Mac.
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium mb-1">Install</dt>
                                <dd className="text-muted-foreground leading-relaxed">
                                    Open the DMG and drag Equity to Applications.
                                </dd>
                            </div>
                        </dl>
                    </div>
            </div>
        </section>
    );
};

export default MacApp;
