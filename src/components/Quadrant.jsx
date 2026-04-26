import React from 'react'

const features = [
  {
    icon: '/images/performance.gif',
    label: 'Performance',
    items: ['Operations', 'Service Audit', 'Market and Promotion Planning', 'Pricing Strategy'],
  },
  {
    icon: '/images/discovery.gif',
    label: 'Discovery',
    items: ['Concise Investment Objectives', 'Market Conditions', 'Risk Assessment', 'Forecasting Costs and Expenditures'],
  },
  {
    icon: '/images/concern.png',
    label: 'Concerns',
    items: ['Competitors', 'Market Potential', 'Annual Audits'],
  },
  {
    icon: '/images/reflectiion.png',
    label: 'Reflection',
    items: ['Operational Effectiveness', 'Financial Stability', 'Long-Term Strategy'],
  },
]

const Quadrant = () => {
  return (
    <div className="sm:pb-24 pb-16  mx-2 sm:mx-6">
      <div className="bg-white rounded-3xl px-6 py-12 lg:px-16">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Image */}
          <img
            src="/images/quadrant.avif"
            alt="Value Quadrant"
            className="rounded-2xl w-full h-full object-cover aspect-[4/3]"
          />

          {/* Right — Content */}
          <div className="flex flex-col gap-8">

            {/* Heading */}
            <div className="border-b border-gray-100 pb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                Value Quadrant —{' '}
                <span className="block text-gray-900 font-semibold">Hotel Development</span>
              </h2>
            </div>

            {/* 2×2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y divide-gray-100 sm:divide-y-0">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 col-span-full gap-0 sm:divide-x divide-gray-100">

                {/* Performance */}
                <div className="flex gap-4 items-start p-5 border-b border-gray-100">
                  <img src="/images/performance.png" alt="Performance" className="w-12 h-12 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-widest text-gray-800 mb-2">Performance</h3>
                    <ul className="">
                      {['Operations', 'Service Audit', 'Market and Promotion Planning', 'Pricing Strategy'].map(i => (
                        <li key={i} className="text-md text-gray-700 leading-relaxed">{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Discovery */}
                <div className="flex gap-4 items-start p-5 border-b border-gray-100 sm:pl-8">
                  <img src="/images/discovery.png" alt="Discovery" className="w-12 h-12 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-widest text-gray-800 mb-2">Discovery</h3>
                    <ul className="">
                      {['Concise Investment Objectives', 'Market Conditions', 'Risk Assessment', 'Forecasting Costs & Expenditures'].map(i => (
                        <li key={i} className="text-md text-gray-700 leading-relaxed">{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 col-span-full gap-0 sm:divide-x divide-gray-100">

                {/* Concerns */}
                <div className="flex gap-4 items-start p-5">
                  <img src="/images/concern.png" alt="Concerns" className="w-12 h-12 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-widest text-gray-800 mb-2">Concerns</h3>
                    <ul className="space-y-1.5">
                      {['Competitors', 'Market Potential', 'Annual Audits'].map(i => (
                        <li key={i} className="text-md text-gray-700 leading-relaxed">{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Reflection */}
                <div className="flex gap-4 items-start p-5 sm:pl-8">
                  <img src="/images/reflection.png" alt="Reflection" className="w-12 h-12 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-md font-bold uppercase tracking-widest text-gray-800 mb-2">Reflection</h3>
                    <ul className="space-y-1.5">
                      {['Operational Effectiveness', 'Financial Stability', 'Long-Term Strategy'].map(i => (
                        <li key={i} className="text-md text-gray-700 leading-relaxed">{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quadrant