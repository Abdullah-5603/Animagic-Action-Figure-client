import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center my-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-t-[#01b0e9] border-b-[#00e83b] border-b-4 border-primary"></div>
        </div>
    );
};

export default Loader;