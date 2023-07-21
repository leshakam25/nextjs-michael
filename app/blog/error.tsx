"use client";

import React from 'react';

const ErrorWrapper = ({error}:{error: Error}) => {
    return (
        <h2>
            Ooops!! {error.message}
        </h2>
    );
};

export default Error;