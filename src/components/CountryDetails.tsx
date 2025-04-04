import React from 'react';
import { Country } from '../types';

interface CountryDetailsProps {
  country: Country;
}

export function CountryDetails({ country }: CountryDetailsProps) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={country.imageUrl}
          alt={country.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
          {country.name}
        </h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Power Standards</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="font-medium w-24">Voltage:</span>
                <span>{country.voltage}</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-24">Frequency:</span>
                <span>{country.frequency}</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Plug Types</h3>
            <div className="space-y-4">
              {country.plugTypes.map((plug, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img
                    src={plug.imageUrl}
                    alt={`Type ${plug.type}`}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-medium">Type {plug.type}</h4>
                    <p className="text-gray-600 text-sm">{plug.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Emergency Guide</h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-700">
              ⚠️ Always check device compatibility before plugging in. When in doubt:
            </p>
            <ul className="mt-2 space-y-1 text-yellow-700">
              <li>• Use USB charging when possible</li>
              <li>• Check device labels for voltage range (usually 100-240V)</li>
              <li>• Avoid using cheap adapters with no safety certifications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}