import React, { useState } from 'react';
import { Country } from '../types';

interface CountryComparisonProps {
  countries: Country[];
}

export function CountryComparison({ countries }: CountryComparisonProps) {
  const [fromCountry, setFromCountry] = useState<string>('');
  const [toCountry, setToCountry] = useState<string>('');

  const getCompatibilityMessage = () => {
    if (!fromCountry || !toCountry) return null;

    const from = countries.find(c => c.id === fromCountry);
    const to = countries.find(c => c.id === toCountry);

    if (!from || !to) return null;

    const needsAdapter = !to.plugTypes.some(plug => 
      from.plugTypes.some(fromPlug => fromPlug.type === plug.type)
    );

    const voltageFrom = parseInt(from.voltage);
    const voltageTo = parseInt(to.voltage);
    const needsConverter = Math.abs(voltageFrom - voltageTo) > 20;

    return (
      <div className="mt-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold mb-4">Compatibility Analysis</h3>
        <div className="space-y-2">
          {needsAdapter && (
            <p className="text-red-600">
              ⚠️ You will need a Type {to.plugTypes[0].type} adapter
            </p>
          )}
          {needsConverter && (
            <p className="text-red-600">
              ⚠️ Voltage converter required ({from.voltage} → {to.voltage})
            </p>
          )}
          {!needsAdapter && !needsConverter && (
            <p className="text-green-600">
              ✓ Your devices should work directly without any adapters
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Compare Countries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From Country
          </label>
          <select
            value={fromCountry}
            onChange={(e) => setFromCountry(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To Country
          </label>
          <select
            value={toCountry}
            onChange={(e) => setToCountry(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {getCompatibilityMessage()}
    </div>
  );
}