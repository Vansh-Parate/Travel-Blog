import React from 'react'
import { Link } from 'react-router-dom'

const regions = [
  {
    name: 'Africa',
    countries: [
      'BOTSWANA', 'SEYCHELLES', 'EGYPT', 'SOUTH AFRICA', 'KENYA', 'TANZANIA',
      'MAURITIUS', 'UGANDA', 'MOROCCO', 'ZAMBIA', 'MOZAMBIQUE', 'ZIMBABWE', 'NAMIBIA'
    ]
  },
  {
    name: 'Asia',
    countries: [
      'CAMBODIA', 'MALDIVES', 'CHINA', 'SINGAPORE', 'HONG KONG', 'SRI LANKA',
      'INDIA', 'THAILAND', 'INDONESIA', 'VIETNAM', 'JAPAN'
    ]
  },
  {
    name: 'The Caribbean',
    countries: [
      'ARUBA', 'ISLANDS', 'BAHAMAS', 'CUBA', 'BERMUDA', 'DOMINICAN',
      'BRITISH VIRGIN', 'REPUBLIC'
    ]
  },
  {
    name: 'Central America',
    countries: ['BELIZE', 'HONDURAS', 'COSTA RICA', 'PANAMA', 'GUATEMALA']
  },
  {
    name: 'Europe',
    countries: [
      'AUSTRIA', 'ITALY', 'BELGIUM', 'MALTA', 'CROATIA', 'NETHERLANDS',
      'CZECH REPUBLIC', 'POLAND', 'DENMARK', 'PORTUGAL', 'ENGLAND', 'SCOTLAND',
      'FRANCE', 'SLOVAKIA', 'GERMANY', 'SPAIN', 'GREECE', 'SWEDEN', 'HUNGARY',
      'SWITZERLAND', 'ICELAND', 'TURKEY', 'IRELAND'
    ]
  },
  {
    name: 'The Middle East',
    countries: ['EGYPT', 'UNITED ARAB', 'JORDAN', 'EMIRATES', 'TURKEY']
  },
  {
    name: 'North America',
    countries: ['CANADA', 'PUERTO RICO', 'BERMUDA', 'USA', 'MEXICO']
  },
  {
    name: 'Oceania',
    countries: ['AUSTRALIA', 'NEW ZEALAND', 'FRENCH POLYNESIA']
  },
  {
    name: 'South America',
    countries: ['ARGENTINA', 'COLOMBIA', 'BOLIVIA', 'ECUADOR', 'BRAZIL', 'PERU', 'CHILE']
  }
]

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {regions.map((region) => (
          <div key={region.name} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-600 mb-4 sm:mb-6">{region.name}</h2>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {region.countries.map((country) => (
                <Link 
                  key={country} 
                  className="text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1"
                  to="#"
                >
                  {country}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}