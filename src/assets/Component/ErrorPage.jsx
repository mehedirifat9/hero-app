import React from 'react';
import error from '../resources/App-Error.png'

const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto mt-20' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;