import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto flex items-center justify-between py-5'>
            <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
            <img src="../../public/images/profile.png" alt="" />
        </div>
    );
};

export default Header;