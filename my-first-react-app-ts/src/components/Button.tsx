import { useState } from 'react';

type ButtonProps = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  onChange?: (id: number) => void;
  objArr?: ObjArr[];
  setState?: React.Dispatch<React.SetStateAction<string>>;
};

interface ObjArr {
  id: string;
  title: string;
}

const Button = ({ title, onClick, disabled, setState }: ButtonProps) => {
  const [counter, setCounter] = useState<number>(0);
  const string = disabled
    ? 'disabled'
    : title + ' number of clicks: ' + counter;

  function handleClick() {
    onClick();
    setCounter(prev => prev + 1);
    if (setState) {
      setState('');
    }
  }

  return (
    <button disabled={disabled} onClick={handleClick}>
      {string}
    </button>
  );
};

export default Button;
