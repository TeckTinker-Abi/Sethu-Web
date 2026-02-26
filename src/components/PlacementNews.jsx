function PlacementNews() {
  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-heading text-primary mb-6">
            Placed Students
          </h2>
          <img
            src="/placed/placed.jpg"
            alt="Placed Students"
            className="rounded-xl shadow-md"
          />
        </div>

        <div>
          <h2 className="text-3xl font-heading text-primary mb-6">
            News & Announcements
          </h2>
          <div className="bg-primary text-white p-8 rounded-xl shadow-md">
            <p>
              Congratulations to students selected in leading multinational companies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PlacementNews;