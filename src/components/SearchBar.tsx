import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Country } from '../types';

interface SearchBarProps {
  onSearch: (country: Country | null) => void;
  countries: Country[];
}

export function SearchBar({ onSearch, countries }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (country: Country) => {
    setQuery(country.name);
    onSearch(country);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            if (!e.target.value) onSearch(null);
          }}
          placeholder="Search for a country..."
          className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-gray-200 
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                   transition-all duration-200 ease-in-out
                   shadow-sm hover:shadow-md
                   bg-white/80 backdrop-blur-sm"
        />
        <Search 
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 
                    transition-colors group-hover:text-blue-500" 
          size={22} 
        />
      </div>
      
      {isOpen && query && (
        <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 
                      max-h-[calc(100vh-280px)] overflow-y-auto z-50 backdrop-blur-sm">
          {filteredCountries.length > 0 ? (
            filteredCountries.map(country => (
              <button
                key={country.id}
                onClick={() => handleSelect(country)}
                className="w-full px-6 py-4 text-left hover:bg-blue-50 focus:outline-none 
                         focus:bg-blue-50 transition-colors duration-150 ease-in-out
                         flex items-center space-x-3 group"
              >
                <span className="text-gray-900 group-hover:text-blue-600 font-medium">
                  {country.name}
                </span>
                <span className="text-sm text-gray-500 group-hover:text-blue-400">
                  {country.voltage} • {country.frequency}
                </span>
              </button>
            ))
          ) : (
            <div className="px-6 py-4 text-gray-500 text-center">
              No countries found
            </div>
          )}
        </div>
      )}
    </div>
  );
}