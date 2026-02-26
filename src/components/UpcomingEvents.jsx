function UpcomingEvents() {
  const events = [
    {
      date: "15",
      month: "APR",
      title: "National Level Technical Symposium",
      desc: "Inter-college technical competitions, workshops and guest lectures."
    },
    {
      date: "22",
      month: "APR",
      title: "Campus Placement Drive - TCS",
      desc: "On-campus recruitment drive for final year students."
    },
    {
      date: "05",
      month: "MAY",
      title: "Annual Sports Meet 2026",
      desc: "Annual sports competitions and prize distribution ceremony."
    }
  ];

  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl font-heading text-primary text-center mb-4">
          Upcoming Events
        </h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-12"></div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border p-8 hover:shadow-xl transition duration-500"
            >
              {/* Date Box */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary text-white rounded-md px-4 py-3 text-center">
                  <p className="text-xl font-bold">{event.date}</p>
                  <p className="text-xs tracking-wider">{event.month}</p>
                </div>

                <h3 className="text-lg font-semibold text-primary">
                  {event.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {event.desc}
              </p>

              <button className="mt-6 text-gold font-semibold hover:underline">
                View Details →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default UpcomingEvents;