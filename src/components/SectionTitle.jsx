import React from 'react';

const SectionTitle = ({ text, position = 'start' }) => {
  const alignment = position === 'center' ? 'text-center' : 'text-start lg:text-left';

  return (
    <h2 className={`text-lg md:text-2xl lg:3xl text-lightGray font-orbitron tracking-widest mb-16 ${alignment}`}>
      {text}
    </h2>
  );
};

export default SectionTitle;