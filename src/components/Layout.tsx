import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Menu, X, MessageCircle, Heart } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-beige text-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green/10 rounded-full flex items-center justify-center text-green">
                <PawPrint size={24} />
              </div>
              <span className="text-xl font-extrabold tracking-tight">Chiot et Chatons</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-green transition-colors">Accueil</Link>
              <Link to="/chiots" className="text-sm font-medium hover:text-green transition-colors">Chiots</Link>
              <Link to="/chatons" className="text-sm font-medium hover:text-green transition-colors">Chatons</Link>
              <Link to="/animaux?filter=favorites" className="text-sm font-medium hover:text-green transition-colors flex items-center gap-1">
                <Heart size={16} className="text-red-500" fill="currentColor" />
                Favoris
              </Link>
              <Link to="/temoignages" className="text-sm font-medium hover:text-green transition-colors">Témoignages</Link>
              <Link to="/contact" className="text-sm font-medium hover:text-green transition-colors">Contact</Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Link 
                to="/animaux" 
                className="flex items-center justify-center h-10 px-6 bg-green hover:bg-green-dark text-white text-sm font-bold rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Voir les animaux
              </Link>
            </div>

            {/* Mobile Menu Button */}

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-dark">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-green">Accueil</Link>
            <Link to="/chiots" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-green">Chiots</Link>
            <Link to="/chatons" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-green">Chatons</Link>
            <Link to="/temoignages" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-green">Témoignages</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-green">Contact</Link>
            <div className="pt-4 px-3">
              <Link 
                to="/animaux" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-full h-12 bg-green hover:bg-green-dark text-white font-bold rounded-xl transition-all shadow-md"
              >
                Voir les animaux
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white">
                  <PawPrint size={18} />
                </div>
                <span className="text-lg font-extrabold tracking-tight">Chiot et Chatons</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Une plateforme dédiée à connecter des animaux aimants avec des familles responsables. Adoptez, ne m'achetez pas.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/" className="hover:text-green">Accueil</Link></li>
                <li><Link to="/chiots" className="hover:text-green">Chiots</Link></li>
                <li><Link to="/chatons" className="hover:text-green">Chatons</Link></li>
                <li><Link to="/temoignages" className="hover:text-green">Témoignages</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Aide</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/faq" className="hover:text-green">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-green">Contact</Link></li>
                <li><Link to="/conditions" className="hover:text-green">Conditions d'adoption</Link></li>
                <li><Link to="/mentions-legales" className="hover:text-green">Mentions légales</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-500 text-sm mb-4">Recevez les dernières nouvelles et animaux disponibles.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Votre email" className="flex-1 bg-beige border-none rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-green outline-none" />
                <button className="bg-green hover:bg-green-dark text-white rounded-lg px-4 py-2 transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 Chiot et Chatons à Donner. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/confidentialite" className="hover:text-green">Politique de confidentialité</Link>
              <Link to="/cookies" className="hover:text-green">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2"
        aria-label="Contacter sur WhatsApp"
      >
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto transform translate-x-4 group-hover:translate-x-0 hidden md:block">
          <p className="text-sm font-medium text-gray-700">Discutez avec nous !</p>
        </div>
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <MessageCircle size={32} fill="currentColor" stroke="none" />
        </div>
      </a>
    </div>
  );
}
