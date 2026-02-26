function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-gold font-semibold mb-4">
            Sethu Institute of Technology
          </h3>
          <p>
            Madurai–Tuticorin National Highway, Pulloor,
            Kariapatti, Virudhunagar District, Tamil Nadu.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>Admissions</li>
            <li>Programs</li>
            <li>Placements</li>
            <li>Campus Life</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p>04566-229706</p>
          <p>+91-9943367007</p>
          <p>sit@sethu.ac.in</p>
        </div>

      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        © 2026 Sethu Institute of Technology. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;