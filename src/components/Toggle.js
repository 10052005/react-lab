import React, { useState } from 'react';

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>

      {isVisible && <p>Hello! This text can be shown and hidden.</p>}
    </div>
  );
};

export default Toggle;