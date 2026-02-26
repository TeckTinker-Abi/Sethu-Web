function Placements() {
  return (
    <section className="bg-primary text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold mb-12 text-gold">
          Placements & Career Support
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold">92%</h3>
            <p className="text-gray-300">Placement Rate</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">120+</h3>
            <p className="text-gray-300">Recruiters</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">8 LPA</h3>
            <p className="text-gray-300">Highest Package</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">1000+</h3>
            <p className="text-gray-300">Students Placed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Placements;