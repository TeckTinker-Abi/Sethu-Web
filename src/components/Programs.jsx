function Programs() {
  const ugPrograms = [
    "CSE",
    "ECE",
    "IT",
    "Mechanical",
    "Civil",
    "EEE",
    "AI & DS",
    "Cyber Security",
    "IoT",
    "Biomedical",
    "Biotechnology",
  ];

  const pgPrograms = [
    "CAD/CAM",
    "Communication Systems",
    "Computer Science",
    "Power Electronics",
    "Structural Engineering",
    "Data Science",
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center text-primary mb-12">
          Academic Programs
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* UG */}
          <div>
            <h3 className="text-2xl font-semibold text-gold mb-6">
              Undergraduate Programs
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {ugPrograms.map((prog, i) => (
                <li
                  key={i}
                  className="bg-gray-100 p-3 rounded-md hover:bg-gold hover:text-primary transition"
                >
                  {prog}
                </li>
              ))}
            </ul>
          </div>

          {/* PG */}
          <div>
            <h3 className="text-2xl font-semibold text-gold mb-6">
              Postgraduate Programs
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {pgPrograms.map((prog, i) => (
                <li
                  key={i}
                  className="bg-gray-100 p-3 rounded-md hover:bg-gold hover:text-primary transition"
                >
                  {prog}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;