function LatestEvents() {
  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-heading text-primary text-center mb-4">
          Latest Events
        </h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={`/events/e${item}.jpg`}
                alt="Event"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Event Title
                </h3>
                <p className="text-gray-600 text-sm">
                  Brief description about the event and achievements.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LatestEvents;