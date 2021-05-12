import React from 'react';
import './WithSpinner.style.scss';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
const Spinner = (isLoading ? (
        <div className="SpinnerOverlay">
            <div className="SpinnerContainer" />
        </div>
    ) : (<WrappedComponent {...otherProps} />));
    return Spinner;
}

export default WithSpinner;