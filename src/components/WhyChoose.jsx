function WhyChoose() {
  const features = [
    {
      title: "Accredited & Recognized",
      desc: "NAAC A++ Grade | NBA Accredited (Tier-I) | Autonomous by UGC & Anna University",
    },
    {
      title: "Prime Campus Location",
      desc: "132-acre eco-friendly campus on Madurai–Tuticorin NH near Madurai Airport.",
    },
    {
      title: "Academic Excellence",
      desc: "Choice Based Credit System | Smart Laboratories | Research & Innovation Focus",
    },
  ];

  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Building excellence through quality education, strong values,
            and industry-driven innovation since 1995.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-border rounded-xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Gold Accent Top Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gold rounded-t-xl"></div>

              <h3 className="text-2xl font-semibold text-primary mb-5">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;