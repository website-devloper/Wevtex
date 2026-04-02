'use client';

import React from 'react';

interface PortfolioFilterProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const filters = [
    { id: 'all', label: 'All' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'ai-automation', label: 'AI Automation' },
    { id: 'e-commerce', label: 'E-Commerce' },
];

const PortfolioFilter: React.FC<PortfolioFilterProps> = ({ activeFilter, onFilterChange }) => {
    return (
        <section className="portfolio-filter pt-80 pb-30" style={{ backgroundColor: '#ffffff' }}>
            <style>{`
                .filter-row {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .filter-pill {
                    padding: 10px 28px;
                    border-radius: 50px;
                    border: 1.5px solid #E85D04;
                    background: transparent;
                    color: #E85D04;
                    font-size: 15px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    white-space: nowrap;
                }
                .filter-pill:hover {
                    background: rgba(232, 93, 4, 0.08);
                }
                .filter-pill.active {
                    background: #E85D04;
                    color: #ffffff;
                    border-color: #E85D04;
                }
                @media (max-width: 767px) {
                    .filter-row {
                        flex-wrap: nowrap;
                        overflow-x: auto;
                        justify-content: flex-start;
                        padding: 0 15px;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none;
                    }
                    .filter-row::-webkit-scrollbar { display: none; }
                }
            `}</style>
            <div className="container">
                <div className="filter-row">
                    {filters.map((f) => (
                        <button
                            key={f.id}
                            className={`filter-pill ${activeFilter === f.id ? 'active' : ''}`}
                            onClick={() => onFilterChange(f.id)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioFilter;
