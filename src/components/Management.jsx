function Management() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-heading text-primary text-center mb-4">
          Our Management
        </h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-12"></div>

        <div className="grid md:grid-cols-4 gap-8">
          {[1,2,3,4].map((item) => (
            <div key={item} className="text-center">
              <img
                src={`/management/m${item}.jpg`}
                alt="Management"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
              <h3 className="mt-4 text-lg font-semibold text-primary">
                Position Name
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Management;