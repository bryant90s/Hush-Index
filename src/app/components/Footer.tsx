export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-neutral-900 to-neutral-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold text-neutral-900">Bryant</span>
            </div>
            <p className="text-neutral-600 text-sm">
              Marketing automation built for multi-location restaurants.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Features</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">About</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Terms</a></li>
              <li><a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">
            © {currentYear} Bryant. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm">
              Twitter
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
