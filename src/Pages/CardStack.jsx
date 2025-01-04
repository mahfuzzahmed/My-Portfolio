import React, { useState, useEffect } from 'react';

const CardStack = () => {
  const cards = [
    { id: 1, title: 'Card 1', description: 'This is the first card.' },
    { id: 2, title: 'Card 2', description: 'This is the second card.' },
    { id: 3, title: 'Card 3', description: 'This is the third card.' },
    { id: 4, title: 'Card 4', description: 'This is the fourth card.' },
    { id: 5, title: 'Card 5', description: 'This is the fifth card.' },
  ];

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {cards.map((card, index) => {
          // Calculate the offset based on the scroll position
          const offset = (scrollY - (index * 200)) * 0.1; // Adjust 200 for card spacing

          return (
            <div
              key={card.id}
              className="absolute w-4/5 mx-auto bg-white shadow-lg rounded-lg p-6"
              style={{
                top: `${index * 200}px`, // Initial vertical position (adjust to your liking)
                transform: `translateY(${Math.max(0, offset)}px)`, // Scroll-based movement
                zIndex: cards.length - index, // Make sure cards stay stacked
                transition: 'transform 0.3s ease-out', // Smooth transition effect
              }}
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardStack;
