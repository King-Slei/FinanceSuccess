import React, { useState } from 'react';

import Skills from '@components/Skills';
import Button from '@components/Button';
import pictureOfMe from '@assets/me.jpg';
import { ReactComponent as DocumentIcon } from '@assets/icons/document.svg';
import text from 'src/text';

const AboutMe: React.FC = () => {
  // State to keep track of the selected tab
  const [selectedTab, setSelectedTab] = useState(0);

  // Array of tabs with corresponding names
  const tabs = [
    "Insurance Protection and Solutions",
    "Investment, Savings and Retirement",
    "Personalized Financial Services",
    "Mortgage Referral"
  ];

  // Function to handle tab selection
  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  const generateCards = () => {
	const cards = [
	  {
		title: 'Life Insurance',
		content: `I’ll help you choose the right life insurance policy to provide financial support to your loved ones in case of unforeseen circumstances. We’ll explore term life, whole life, and universal life insurance options to match your needs and budget.`
	  },
	  {
		title: 'Health Insurance',
		content: `Medical costs can be unpredictable, and having the right health insurance can make a difference. I can guide you through various health insurance plans that cover routine check-ups, emergencies, and major medical expenses to ensure you’re covered at every life stage.`
	  },
	  {
		title: 'Disability and Income Protection',
		content: `If you’re unable to work due to illness or injury, income protection ensures that you can continue to cover essential expenses. Together, we’ll look at policies that protect your income and maintain your financial stability.`
	  },
	  {
		title: 'Property and Casualty Insurance',
		content: `Your home, car, and personal belongings are valuable assets. I’ll assist you in selecting insurance policies that protect these assets from damage, theft, or loss. From homeowners insurance to automobile and renters insurance, I’ll help you secure comprehensive coverage.`
	  }
	];
  
	return cards.map((card, index) => (
	  <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
		<h3 className="text-2xl font-bold mb-4">{card.title}</h3>
		<p>{card.content}</p>
	  </div>
	));
  };

  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">Tab</label>
          <select id="Tab" className="w-full rounded-md border-gray-200">
            {tabs.map((tab, index) => (
              <option key={index} value={index} onClick={() => handleTabChange(index)}>
                {tab}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden sm:block">
          <nav className="flex gap-6" aria-label="Tabs">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`shrink-0 rounded-lg p-4 text-3xl font-bold ${selectedTab === index ? 'bg-sky-100 text-sky-600' : 'text-gray-500'} hover:bg-gray-50 hover:text-gray-700`}
                onClick={() => handleTabChange(index)}
              >
                {tab}
              </div>
            ))}
          </nav>
        </div>

        {/* Title above cards */}
        <div className="text-center mt-8">
			<h2 className="text-3xl font-bold text-white">
				With my Insurance Protection and Solutions service, I aim to offer you a robust safety net that prepares you and your family for the unexpected. This service includes:
			</h2>
		</div>



        {/* Display the cards below the title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          {generateCards()}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
