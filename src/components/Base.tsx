import { useState } from 'react';
import Memoized from './Memoized';

const Base = () => {
  const [str, setStr] = useState('1');
  const [arr, setArr] = useState(['1']);

  console.log('App called.');

  const handleResetClick = () => {
    setStr('1');
    setArr(['1']);
  };

  const handleAddClick = () => {
    setStr(
      (previousState) => previousState + (previousState.length + 1).toString()
    );
    setArr((previousState) => [
      ...previousState,
      (previousState.length + 1).toString(),
    ]);
  };

  return (
    <>
      <Memoized type="String" value={str} />
      <Memoized type="Array" value={arr} />

      <button onClick={handleResetClick}>Reset</button>
      <button onClick={handleAddClick}>Add</button>
    </>
  );
};

export default Base;
