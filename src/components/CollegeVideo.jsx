function CollegeVideo() {
  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-heading text-primary mb-4">
          Experience Our Campus
        </h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-12"></div>

        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <video
            src="/videos/campus.mp4"
            controls
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}

export default CollegeVideo;