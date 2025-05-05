export default function Footer() {
  return (
    <footer className="bg-gray-50 text-sm text-gray-600">
      <div className="container mx-auto px-4 md:px-16 py-12">
        {/* Newsletter */}
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-4">BE THE FIRST TO KNOW</h3>
          <p className="mb-4">Sign up for updates from mettā muse.</p>
          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="flex-grow border p-2"
            />
            <button className="bg-black text-white px-6 py-2">SUBSCRIBE</button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">CONTACT US</h4>
            <p>+44 221 133 5380</p>
            <p>customercare@mettamuse.com</p>
          </div>

          {/* Currency */}
          <div>
            <h4 className="font-medium mb-4">CURRENCY</h4>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span>USD</span>
            </div>
            <p className="mt-2 text-xs">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>

          {/* mettā muse links */}
          <div>
            <h4 className="font-medium mb-4">mettā muse</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Artisans
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Boutiques
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  EU Compliances Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Orders & Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Join/Login as a Seller
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Payment & Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Return & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social and Payment */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-8">
          <div className="flex gap-4">
            {/* Social icons would go here */}
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>

          <div className="flex gap-4">
            {/* Payment methods would go here */}
            <span>VISA</span>
            <span>Mastercard</span>
            <span>PayPal</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
