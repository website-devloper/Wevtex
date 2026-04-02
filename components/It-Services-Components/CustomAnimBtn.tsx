'use client';

import React from 'react';
import Link from 'next/link';

interface CustomAnimBtnProps {
    label: string;
    href: string;
    outline?: boolean;
}

const CustomAnimBtn: React.FC<CustomAnimBtnProps> = ({ label, href, outline = false }) => {
    return (
        <Link href={href} className={`thm-btn thm-btn--fill_icon ${outline ? 'thm-btn--outline' : ''}`}>
            <div className="xb-item--hidden-text">
                <span className="text">{label}</span>
            </div>
            <div className="xb-item--holder">
                <span className="xb-item--text">{label}</span>
                <div className="xb-item--icon">
                    <i className="far fa-long-arrow-right"></i>
                </div>
                <span className="xb-item--text">{label}</span>
            </div>
        </Link>
    );
};

export default CustomAnimBtn;
