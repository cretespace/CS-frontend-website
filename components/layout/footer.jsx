import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      {/* CTA Section */}
      
      <div className="bg-gradient-to-b from black to-[rgb(7,47,12)] py-16 text-center -mx-[165px]">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Join <span className="font-semibold">CRETESPACE</span> today and experience a smarter way to work, learn, and collaborate.
        </p>
        <button className="bg-[rgb(47,194,43)] text-white font-semibold px-4 h-10 rounded-lg transition">
          Create your account
        </button>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-800">
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>How it works</li>
            <li>Pricing</li>
            <li>Features</li>
            <li>Account Types</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Printing</li>
            <li>Graphic Design</li>
            <li>Cloud Storage</li>
            <li>Typing & Formatting</li>
            <li>Document Conversion</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Partner With Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Become a Franchise Partner</li>
            <li>Corporate Solutions</li>
            <li>Business Centre Sign-Up</li>
          </ul>
        </div>
      </div>

      {/* Address & Subscribe */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="text-sm">
          <p className="font-medium text-white">Office Address</p>
          <p>70 Latief Adegboyega Street, Off Ago Palace Way, Okota, Lagos</p>
          <div className="flex gap-4 mt-3 text-lg">
           <img src="/icons/twitter.svg"/>
           <img src="/icons/whatsapp.svg"/>
           <img src="/icons/facebook.svg"/>
           <img src="/icons/instagram.svg"/>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <p className="mb-2 text-sm">Subscribe</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="ebubeokonkwo360@gmail.com"
              className="px-4 py-2 rounded-lg text-white bg-[rgb(25,25,25)] w-full md:w-64"
            />
            <button className="bg-[rgb(47,194,43)] text-white font-semibold px-5 py-2 rounded-lg transition">
              Join
            </button>
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-gray-400 ">
            <input type="checkbox" className="accent-bg-[rgb(25,25,25)]" />
            <span>I agree to receiving marketing emails from CRETESPACE</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className=" py-6 text-center text-xs text-gray-500">
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-2">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
        <p>Copyright © {new Date().getFullYear()} All Rights Reserved</p>
        <p className="mt-1">A CRETECAD innovation</p>
      </div>
      
    </footer>
  );
}
