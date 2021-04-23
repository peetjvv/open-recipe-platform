import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

const Toggle: React.FC<{
  disabled?: boolean;
  value: boolean;
  onChange: (v: boolean) => void;
  iconUnchecked?: IconDefinition;
  iconChecked?: IconDefinition;
}> = props => {
  const {
    disabled = false,

    value,
    onChange,

    iconUnchecked,
    iconChecked,
  } = props;

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
      >
        {!value && !!iconUnchecked ? (
          <FontAwesomeIcon icon={iconUnchecked} />
        ) : null}
        {value && !!iconChecked ? <FontAwesomeIcon icon={iconChecked} /> : null}
      </div>
    </div>
  );
};

export default Toggle;
