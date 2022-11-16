import React from 'react';

export interface MemoizedProps {
  type: string;
  value: string | string[];
}

const Memoized = (props: MemoizedProps) => {
  console.log(`${props.type} called.`);

  if (typeof props.value === 'string') {
    return (
      <div>
        {props.value.split('').map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    );
  }
  return <div>{props.value}</div>;
};

export default React.memo(Memoized);
