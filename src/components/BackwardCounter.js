import { useState, useEffect } from 'react';

import Card from './Card';

const BackwardCounter = () => {
  const [counter, setCounter] = useState(0);

  

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
