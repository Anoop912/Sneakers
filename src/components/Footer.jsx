import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 w-full mt-10 py-10 px-6 md:px-16">
        {/* TOP GRID - RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* LEFT SECTION */}
          <div>
            <h1 className="text-3xl font-bold mb-3">
              Snea<span className="text-red-600">ker.</span>
            </h1>

            <p className="font-semibold text-lg mb-3 flex gap-2 items-center">
              <img className="h-8" src="src/assets/headset.png" alt="headset" />
              +(012) 800 456 789
            </p>

            <p className="text-sm leading-6 mb-4">
              We are a team of designers and developers that create high quality
              Magento, Prestashop & Opencart.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-2 mt-4">
              <div className="p-2 bg-gray-800 cursor-pointer rounded-md">
                <img className="h-8" src="src/assets/social.png" alt="social" />
              </div>
              <div className="p-2 bg-gray-800 cursor-pointer rounded-md">
                <img className="h-8" src="src/assets/twitter.png" alt="social" />
              </div>
              <div className="p-2 bg-gray-800 cursor-pointer rounded-md">
                <img className="h-8" src="src/assets/play.png" alt="social" />
              </div>
              <div className="p-2 bg-gray-800 cursor-pointer rounded-md">
                <img
                  className="h-8"
                  src="src/assets/instagram.png"
                  alt="social"
                />
              </div>
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="font-semibold text-white mb-4">PRODUCTS</h3>
            <ul className="text-sm space-y-2">
              <li>Prices Drop</li>
              <li>New Products</li>
              <li>Best Sales</li>
              <li>Stores</li>
              <li>Login</li>
              <li>My Account</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-white mb-4">OUR COMPANY</h3>
            <ul className="text-sm space-y-2">
              <li>Delivery</li>
              <li>Legal Notice</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Stores</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* YOUR ACCOUNT */}
          <div>
            <h3 className="font-semibold text-white mb-4">YOUR ACCOUNT</h3>
            <ul className="text-sm space-y-2">
              <li>Address</li>
              <li>Credit Split</li>
              <li>Orders</li>
              <li>Personal Info</li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="font-semibold text-white mb-4">GET IN TOUCH</h3>
            <p className="text-sm leading-6">
              Studio - Responsive Prestashop Theme <br />
              4729 Main Street, Anytown, CA 12345 - USA
            </p>
            <p className="text-sm mt-3">Call us: (012) 800 456 789</p>
            <p className="text-sm">Email: support@sneakerstore.com</p>

            <h4 className="font-semibold text-white mt-4">OPENING TIME</h4>
            <p className="text-sm">Open: 8:00 AM — Close: 18:00 PM</p>
            <p className="text-sm">Saturday — Sunday: Closed</p>
          </div>
        </div>

        {/* PAYMENT + COPYRIGHT (RESPONSIVE LAYOUT) */}
        <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row-reverse lg:justify-between">

          {/* PAYMENT CARDS */}
          <div className="flex justify-center gap-4 flex-wrap">
            <img src="src/assets/visa.png" alt="visa" className="h-10 md:h-14" />
            <img src="src/assets/logo.png" alt="mastercard" className="h-10 md:h-14" />
            <img src="src/assets/paypal.png" alt="paypal" className="h-10 md:h-14" />
            <img src="src/assets/skrill.png" alt="skrill" className="h-10 md:h-14" />
          </div>

          {/* COPYRIGHT */}
          <div className="text-center text-sm  text-gray-500">
            Copyright © 2025{" "}
            <span className="text-red-600">Sneaker.</span> All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

