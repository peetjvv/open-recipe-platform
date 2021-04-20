import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import * as HttpStatus from 'http-status-codes';

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
    <div className={`error-page flex justify-center items-center select-none`}>
      <div className="flex items-center justify-between py-20 px-32 rounded-lg bg-white dark:bg-grey-dark bg-opacity-75 dark:bg-opacity-25">
        <div className="flex items-center flex-col mr-16">
          <FontAwesomeIcon
            icon={FaSolidIcons.faPoo}
            className="animate-mybounce text-brown mb-4 text-9xl"
          />
          <span className="text-2xl font-bold">Oh crap!</span>
        </div>
        <div className="flex items-center flex-col">
          <span className="italic font-lighter text-9xl">{errorCode}</span>
          <span className="text-2xl">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Error;
