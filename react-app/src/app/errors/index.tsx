import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import * as HttpStatus from 'http-status-codes';
import vars from '../../scss/vars';
import './style.scss';

const Error: React.FC<{ errorCode?: number }> = props => {
  const { errorCode } = props;

  let message: string = 'Unkown error ocurred';
  if (!!errorCode) {
    try {
      message = HttpStatus.getStatusText(errorCode);
    } catch (error) {
      console.error(error.toString());
    }
  }

  return (
    <div className={`error-page ${errorCode}`}>
      <div className="stuff">
        <div className="left">
          <FontAwesomeIcon icon={FaSolidIcons.faPoo} className="bounce" />
          <span>Oh crap!</span>
        </div>
        <div className="right">
          <span className="code">{errorCode}</span>
          <span className="message">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Error;
