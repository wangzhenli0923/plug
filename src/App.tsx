import React, { useState } from 'react';
import { Globe, Zap } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { CountryDetails } from './components/CountryDetails';
import { CountryComparison } from './components/CountryComparison';
import { countries } from './data/countries';
import { Country } from './types';

function App() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="h-8 w-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-900">PlugWizard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Zap className="h-6 w-6 text-yellow-500" />
              <span className="text-sm text-gray-600">Universal Travel Adapter Guide</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="text-center" aria-labelledby="hero-heading">
            <h2 id="hero-heading" className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Travel Adapter & Voltage Converter
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Planning an international trip? PlugWizard helps you find the right travel adapter and voltage converter 
              for any country. Our comprehensive guide covers power plug types, voltage standards, and adapter 
              requirements for over 20 destinations worldwide.
            </p>
            <SearchBar onSearch={setSelectedCountry} countries={countries} />
          </section>

          {/* Country Details */}
          {selectedCountry && (
            <section className="mt-12" aria-labelledby="country-details-heading">
              <h2 id="country-details-heading" className="sr-only">
                Travel Adapter Guide for {selectedCountry.name}
              </h2>
              <CountryDetails country={selectedCountry} />
            </section>
          )}

          {/* Adapter Comparison Tool */}
          <section className="mt-12" aria-labelledby="comparison-heading">
            <h2 id="comparison-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Universal Travel Adapter Compatibility Checker
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Not sure if you need a travel adapter or voltage converter? Our comparison tool helps you check power plug 
              compatibility between countries. Simply select your home country and destination to get instant adapter 
              recommendations and voltage conversion requirements.
            </p>
            <CountryComparison countries={countries} />
          </section>

          {/* Popular Destinations */}
          <section className="mt-12" aria-labelledby="destinations-heading">
            <h2 id="destinations-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Travel Adapter Guide for Popular Destinations
            </h2>
            <p className="text-gray-600 mb-8">
              Explore our curated guide of power plug types and voltage standards for the most visited countries. 
              Find essential information about travel adapters, voltage converters, and electrical compatibility 
              for your next international journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {countries.slice(0, 6).map(country => (
                <button
                  key={country.id}
                  onClick={() => setSelectedCountry(country)}
                  className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={country.imageUrl}
                    alt={`Travel adapter guide for ${country.name}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{country.name}</h3>
                    <p className="text-sm opacity-90">
                      {country.voltage} • {country.frequency} • Type {country.plugTypes.map(p => p.type).join('/')}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Additional Information */}
          <section className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Essential Travel Adapter & Voltage Converter Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Understanding Power Adapters</h3>
                <p className="text-gray-600">
                  Travel adapters are essential devices that allow your electronics to fit into foreign power outlets. 
                  Different countries use various plug types, making a universal travel adapter a must-have for 
                  international travelers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Voltage Converter Guide</h3>
                <p className="text-gray-600">
                  While travel adapters change the plug shape, voltage converters modify electrical output. If you're 
                  traveling between countries with different voltage standards, a voltage converter ensures your 
                  devices operate safely.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p>© 2025 PlugWizard.top - Your Universal Travel Adapter Guide</p>
            <p className="mt-2 text-sm">
              Trusted power standards information sourced from International Electrotechnical Commission (IEC)
            </p>
            <p className="mt-4 text-sm max-w-2xl mx-auto">
              Find the perfect travel adapter and voltage converter for your international journey. 
              Comprehensive power plug guide with voltage standards for all major travel destinations.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;