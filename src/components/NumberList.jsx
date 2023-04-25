/* eslint-disable react/prop-types */
import { useState, useMemo } from 'react';
import './NumberList.scss';

const filterNumbers = (numbers, filterType) => {
  console.log('Filtrando números...');
  return numbers.filter(number => filterType === 'even' ? number % 2 === 0 : number % 2 !== 0);
}
const NumberList = ({ numbers }) => {
  const [filter, setFilter] = useState('all');

  const filteredNumbers = useMemo(() => {
    if (filter === 'all') {
      return numbers;
    }
    return filterNumbers(numbers, filter);
  }, [numbers, filter]);

  return (
    <div>
      <h1>Números</h1>
      <button onClick={() => setFilter('all')}>Todos</button>
      <button onClick={() => setFilter('even')}>Pares</button>
      <button onClick={() => setFilter('odd')}>Impares</button>
      <ul>
        {filteredNumbers.map(number => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );

 
};

export default NumberList
