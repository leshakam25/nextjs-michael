import React from 'react';
import Link from "next/link";

const Layout = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            <h1>About us</h1>
            <ul>
                <li>
                    <Link href={'/about/contacts'}>Contacts</Link>
                </li>
                <li>
                    <Link href={'/about/team'}>Team</Link>
                </li>
            </ul>
            {children}
        </div>
    );
};

export default Layout;