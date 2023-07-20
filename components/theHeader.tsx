import React from 'react';
import Link from "next/link";

const TheHeader = () => {
    return (
        <header className='container'>
            <Link href={'/'}>Home</Link>&nbsp;
            <Link href={'/blog'}>Blog</Link>&nbsp;
            <Link href={'/about'}>About</Link>
        </header>
    );
};

export default TheHeader;