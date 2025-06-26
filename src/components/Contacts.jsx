import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

 function Contacts() {
  return (
    <section id="contact" className="py-20 primary primary-text">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="secondary backdrop-blur-sm rounded-xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
            <MapPin className="w-12 h-12 mx-auto secondary-text mb-4" />
            <h3 className="text-xl font-bold mb-3">Location</h3>
            <p className="secondary-text leading-relaxed">
              Total Energies
              <br />
              Magadi Rd
              <br />
              Rongai
            </p>
          </div>

          <div className="secondary backdrop-blur-sm rounded-xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
            <Phone className="w-12 h-12 mx-auto secondary-text mb-4" />
            <h3 className="text-xl font-bold mb-3">Reservations</h3>
            <p className="secondary-text leading-relaxed">
              <a href="tel:0718455521">0718455521</a>
              <br />
              Available Daily 6AM-11PM
            </p>
          </div>

          <div className="secondary backdrop-blur-sm rounded-xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
            <Mail className="w-12 h-12 mx-auto secondary-text mb-4" />
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <p className="secondary-text leading-relaxed">
              <a
                href="mailto:info@alasarosto.com"
                className="secondary-text transition-colors"
              >
                info@alasarosto.com
              </a>
              <br />
              <a
                href="mailto:events@alasarosto.com"
                className="secondary-text transition-colors"
              >
                events@alasarosto.com
              </a>
            </p>
          </div>
        </div>

        {/* Map and Social Media Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Google Maps Embed */}
          <div className="secondary backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-6 text-center secondary-text">
              Find Us Here
            </h3>
            <div className="relative w-full h-80 rounded-lg overflow-hidden flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.633663947176!2d36.73494447372826!3d-1.3962655357536138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05d6952c83e7%3A0x2f75787835f03869!2sAlas%20Arosto!5e0!3m2!1sen!2ske!4v1750936518373!5m2!1sen!2ske"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-11/12 h-4/5 rounded-2xl"
              ></iframe>
            </div>
            <p className="secondary-text text-sm text-center mt-4">
              Located at Total Energies, Magadi Road, Rongai
            </p>
          </div>

          {/* Social Media & Additional Info */}
          <div className="space-y-8">
            {/* Social Media */}
            <div className="secondary backdrop-blur-sm rounded-xl p-8 text-center secondary-text">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://instagram.com/alasarosto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition-all duration-300 group"
                >
                  <Instagram className="w-6 h-6 text-white group-hover:animate-pulse" />
                </a>
                <a
                  href="https://facebook.com/alasarosto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-3 rounded-full hover:scale-110 transition-all duration-300 group"
                >
                  <Facebook className="w-6 h-6 text-white group-hover:animate-pulse" />
                </a>
                <a
                  href="https://twitter.com/alasarosto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black p-3 rounded-full hover:scale-110 transition-all duration-300 group"
                >
                  <Twitter className="w-6 h-6 text-white group-hover:animate-pulse" />
                </a>
                <a
                  href="https://tiktok.com/@alasarosto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-black p-3 rounded-full hover:scale-110 transition-all duration-300 group"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
              <p className="secondary-texttext-amber-200 mt-6 text-sm">
                Stay updated with our latest dishes, events, and special offers
              </p>
            </div>

            {/* Operating Hours */}
            <div className="secondary backdrop-blur-sm rounded-xl p-8 secondary-text">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Operating Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span >Monday - Thursday</span>
                  <span className=" font-semibold">
                    6:00 AM - 11:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700">
                  <span className="">Friday - Saturday</span>
                  <span className=" font-semibold">
                    6:00 AM - 12:00 AM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span >Sunday</span>
                  <span className=" font-semibold">
                    7:00 AM - 11:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
       
      </div>
    </section>
  );
}
export default Contacts;