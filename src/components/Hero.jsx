function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Gateway to Knowledge and Success Since 1995
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Shaping future-ready professionals through quality technical education,
          innovation and strong industry linkages.
        </p>

        <div className="space-x-4">
          <button className="bg-gold text-primary px-6 py-3 rounded-md font-semibold hover:scale-105 transition">
            Apply Now
          </button>

          <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-primary transition">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;