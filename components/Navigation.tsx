"use client"
import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

type NavLink = {
    label: string,
    href: string
}

type NavProps = {
    navLinks: NavLink[]
}

const Navigation = ({navLinks}: NavProps) => {
    const pathname = usePathname()
    return (
        <>
            {navLinks && navLinks.map((link: NavLink) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        href={link.href}
                        key={link.label}
                        className={isActive ? "active" : "disable"}
                    >
                        {link.label}
                    </Link>
                )
            })}
        </>
    );
};

export default Navigation;