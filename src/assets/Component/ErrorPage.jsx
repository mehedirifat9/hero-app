import React from 'react';
import error from '../resources/App-Error.png'

const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;