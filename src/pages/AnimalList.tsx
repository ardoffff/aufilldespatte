import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animals } from '../data';
import { Heart, Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AnimalList() {
  const location = useLocation();
  const path = location.pathname;
  const queryParams = new URLSearchParams(location.search);
  const isFavoritesOnly = queryParams.get('filter') === 'favorites';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const newFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  let title = "Tous nos animaux";
  let baseFiltered = animals;

  if (isFavoritesOnly) {
    title = "Mes Favoris";
    baseFiltered = animals.filter(a => favorites.includes(a.id));
  } else if (path === '/chiots') {
    title = "Nos Chiots";
    baseFiltered = animals.filter(a => a.type === 'Chiot');
  } else if (path === '/chatons') {
    title = "Nos Chatons";
    baseFiltered = animals.filter(a => a.type === 'Chaton');
  }

  const filteredAnimals = baseFiltered.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.traits.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesGender = genderFilter === 'all' || animal.gender === genderFilter;
    return matchesSearch && matchesGender;
  });

  return (
    <div className="py-12 lg:py-24 px-4 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-4">{title}</h1>
            <p className="text-gray-600 text-xl">Découvrez nos petits compagnons qui n'attendent que vous.</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Rechercher un nom ou un trait..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-12 pr-4 py-3 bg-white rounded-xl border-none shadow-sm focus:ring-2 focus:ring-green outline-none text-sm"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dark"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            <div className="flex bg-white rounded-xl shadow-sm p-1">
              <button 
                onClick={() => setGenderFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${genderFilter === 'all' ? 'bg-green text-white shadow-sm' : 'text-gray-500 hover:text-dark'}`}
              >
                Tous
              </button>
              <button 
                onClick={() => setGenderFilter('male')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${genderFilter === 'male' ? 'bg-green text-white shadow-sm' : 'text-gray-500 hover:text-dark'}`}
              >
                Mâles
              </button>
              <button 
                onClick={() => setGenderFilter('female')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${genderFilter === 'female' ? 'bg-green text-white shadow-sm' : 'text-gray-500 hover:text-dark'}`}
              >
                Femelles
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAnimals.map((animal) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={animal.id}
              >
                <Link 
                  to={`/animal/${animal.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('${animal.image}')` }}
                    ></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-green shadow-sm">
                      {animal.type}
                    </div>
                    <button 
                      onClick={(e) => toggleFavorite(e, animal.id)}
                      className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        favorites.includes(animal.id) 
                          ? 'bg-red-500 text-white shadow-lg scale-110' 
                          : 'bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500 shadow-sm'
                      }`}
                    >
                      <Heart size={20} fill={favorites.includes(animal.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-dark">{animal.name}</h3>
                        <p className="text-gray-500 text-base">{animal.age} • {animal.gender === 'male' ? 'Mâle' : 'Femelle'}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {animal.traits.map((trait, index) => (
                        <span key={index} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-md font-medium">
                          {trait}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <div className="w-full h-12 bg-green/10 group-hover:bg-green text-green group-hover:text-white font-bold text-base rounded-xl transition-colors flex items-center justify-center gap-2">
                        <span>Voir les détails</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-24 bg-white/50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-2xl text-gray-500">Aucun animal ne correspond à vos critères.</p>
            <button 
              onClick={() => { setSearchTerm(''); setGenderFilter('all'); }}
              className="text-green font-bold mt-4 inline-block hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
