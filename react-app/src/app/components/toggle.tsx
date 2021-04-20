import * as React from 'react';

const Toggle: React.FC<{
  value: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
}> = props => {
  const { value, onChange, disabled = false } = props;

  return (
    <div
      className={`toggle-container w-9 h-6 inline-block bg-transparent ${
        !disabled ? 'cursor-pointer' : 'cursor-not-allowed'
      }`}
      onClick={() => onChange(!value)}
    >
      <div
        className="toggle w-9 h-3 rounded-xl top-1/2 relative cursor-pointer bg-grey-light transform -translate-y-1/2"
        aria-checked={value}
      ></div>
    </div>
  );
};

export default Toggle;
