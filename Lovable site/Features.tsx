import { Clock, TrendingUp, Calendar, FileText, Smartphone, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Quick Add",
    description: "Log hours in seconds with one-tap time entry. Designed for speed and simplicity."
  },
  {
    icon: TrendingUp,
    title: "Balance History",
    description: "Visualize your time balance over weeks, months, and quarters with beautiful charts."
  },
  {
    icon: Calendar,
    title: "Calendar View",
    description: "See your time entries at a glance with an intuitive calendar interface."
  },
  {
    icon: FileText,
    title: "Export Reports",
    description: "Generate PDF or Excel reports for your records or to share with your employer."
  },
  {
    icon: Smartphone,
    title: "Native Experience",
    description: "Built for iOS with support for Dark Mode, widgets, and seamless performance."
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Your data is encrypted and synced securely across your devices."
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default Features;
