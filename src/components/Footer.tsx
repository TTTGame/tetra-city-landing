export function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-card/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-city-orange to-tetra-blue flex items-center justify-center">
                <span className="text-white font-bold text-xs">TC</span>
              </div>
              <span className="font-bold text-white">CITY Holder &times; TetraChain</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              The first city-building game with NFT integration powered by next-generation L2 technology. Build your city, mint unique buildings, shape the future.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">CITY Holder</h4>
              <ul className="space-y-2">
                <li><a href="https://holder.city" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-city-orange transition-colors">Website</a></li>
                <li><a href="https://t.me/CITY_Holder" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-city-orange transition-colors">Telegram Bot</a></li>
                <li><a href="https://t.me/CITY_HolderChat" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-city-orange transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">TetraChain</h4>
              <ul className="space-y-2">
                <li><a href="https://tetrachain.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-tetra-blue transition-colors">Website</a></li>
                <li><a href="https://docs.tetrachain.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-tetra-blue transition-colors">Documentation</a></li>
                <li><a href="https://tetrachain.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-tetra-blue transition-colors">Ecosystem</a></li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-white font-semibold mb-3 text-sm">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://t.me/CITY_Holder"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-dark-border bg-dark-surface flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-600 transition-all"
                aria-label="Telegram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; 2025 CITY Holder &times; TetraChain. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built on TON &middot; Powered by TetraChain L2
          </p>
        </div>
      </div>
    </footer>
  )
}
