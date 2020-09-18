import React from 'react';

const Button = ({ onClick, isLeftPointed }) => {
  const arrow = isLeftPointed ? '<' : '>';

  return <button className="button" onClick={onClick}>{arrow}</button>;
}

export const ButtonPrev = ({ onPrevClick }) => <Button onClick={onPrevClick} isLeftPointed />;
export const ButtonNext = ({ onNextClick }) => <Button onClick={onNextClick} isLeftPointed={false} />;