import React from 'react';

interface WebDevBackgroundProps {
    className?: string;
}

const WebDevBackground: React.FC<WebDevBackgroundProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 400"
            className={className}
            style={{
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                display: 'block'
            }}
        >
            {/* Main Background */}
            <rect width="800" height="400" fill="#1C1C1E" />

            {/* Orange Geometric Triangle (Bottom-Left, Behind Browser) */}
            <polygon points="0,400 300,400 0,150" fill="#E85D04" />

            {/* Browser Window Wrapper */}
            <g transform="translate(100, 40)">

                {/* Browser Background Panel */}
                <rect width="600" height="320" rx="8" fill="#252525" />

                {/* Browser Chrome Bar */}
                <path d="M0 8 C0 3.58 3.58 0 8 0 L592 0 C596.42 0 600 3.58 600 8 L600 28 L0 28 Z" fill="#1C1C1E" />

                {/* Chrome Top Left UI Controls */}
                <circle cx="24" cy="14" r="4" fill="#333333" />
                <circle cx="40" cy="14" r="4" fill="#333333" />
                <circle cx="56" cy="14" r="4" fill="#333333" />

                {/* --- Website Wireframe Content --- */}

                {/* Navigation Bar */}
                <rect x="40" y="48" width="520" height="32" rx="4" fill="#1A1A1A" />
                {/* Nav Logo Placeholder */}
                <rect x="56" y="56" width="60" height="16" rx="4" fill="#444444" />
                {/* Nav Links */}
                <rect x="250" y="60" width="24" height="8" rx="4" fill="#333333" />
                <rect x="290" y="60" width="24" height="8" rx="4" fill="#333333" />
                <rect x="330" y="60" width="24" height="8" rx="4" fill="#333333" />
                {/* Nav CTA Button */}
                <rect x="470" y="56" width="74" height="16" rx="4" fill="#E85D04" />

                {/* Hero Text Lines */}
                <rect x="40" y="110" width="340" height="24" rx="4" fill="#444444" />
                <rect x="40" y="146" width="280" height="24" rx="4" fill="#444444" />
                <rect x="40" y="182" width="180" height="24" rx="4" fill="#333333" />

                {/* Filter/Tabs placeholder below hero */}
                <rect x="40" y="235" width="40" height="10" rx="3" fill="#444444" />
                <rect x="90" y="235" width="40" height="10" rx="3" fill="#333333" />

                {/* 3-Column Card Grid */}
                {/* Card 1 */}
                <rect x="40" y="255" width="160" height="65" rx="6" fill="#1C1C1E" />
                <rect x="52" y="267" width="50" height="10" rx="4" fill="#444444" />
                <rect x="52" y="287" width="120" height="6" rx="3" fill="#333333" />
                <rect x="52" y="299" width="80" height="6" rx="3" fill="#333333" />

                {/* Card 2 */}
                <rect x="220" y="255" width="160" height="65" rx="6" fill="#1C1C1E" />
                <rect x="232" y="267" width="50" height="10" rx="4" fill="#444444" />
                <rect x="232" y="287" width="120" height="6" rx="3" fill="#333333" />
                <rect x="232" y="299" width="80" height="6" rx="3" fill="#333333" />

                {/* Card 3 */}
                <rect x="400" y="255" width="160" height="65" rx="6" fill="#1C1C1E" />
                <rect x="412" y="267" width="50" height="10" rx="4" fill="#444444" />
                <rect x="412" y="287" width="120" height="6" rx="3" fill="#333333" />
                <rect x="412" y="299" width="80" height="6" rx="3" fill="#333333" />

            </g>
        </svg>
    );
};

export default WebDevBackground;
