function PlacementDrive() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-heading text-primary text-center mb-4">
          On Campus Placement Drive
        </h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map((item) => (
            <div key={item} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src={`/placements/p${item}.jpg`}
                alt="Placement Drive"
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PlacementDrive;