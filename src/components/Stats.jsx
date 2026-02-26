function Stats() {
  const data = [
    { number: "4,624", label: "Students Studying" },
    { number: "25,000", label: "Alumni" },
    { number: "270", label: "Professors" },
  ];

  return (
    <section className="relative py-24 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">

        {data.map((item, index) => (
          <div key={index} className="border border-white/30 p-10 rounded-xl">
            <h3 className="text-5xl font-bold text-gold mb-3">
              {item.number}
            </h3>
            <p className="text-lg">{item.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;