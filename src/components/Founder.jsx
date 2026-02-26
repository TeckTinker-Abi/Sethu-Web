function Founder() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-heading text-primary mb-4">
            Founder & Chairman
          </h2>

          <div className="w-20 h-1 bg-gold mb-8"></div>

          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            With a vision to impart technical knowledge to the economically,
            socially and industrially backward communities, the Founder &
            Chairman established Sethu Institute of Technology in the year 1995
            at Pulloor village near Kariapatti in Virudhunagar District.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            He has been successful in his pursuit of providing quality education
            to rural youth, empowering thousands to achieve professional excellence.
          </p>

          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-gold transition font-semibold">
            View More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              src="/founder.jpg"  // Put image inside public/
              alt="Founder & Chairman"
              className="w-80 h-auto object-cover shadow-xl rounded-md"
            />

            {/* Decorative Gold Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-gold rounded-md"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Founder;