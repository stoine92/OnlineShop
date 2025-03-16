import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import css from './Filters.module.scss';

interface Filter {
    Component: any;
    options: any;
    name: string;
}

const Filters = ({ filters }: any) => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const toggleFilter = (name: string) => {
        setActiveFilter(activeFilter === name ? null : name);
    };

    return (
        <>
            {filters.map((filter: Filter) => {
                const { Component, options, name } = filter;
                const isActive = activeFilter === name;

                return (
                    <div key={name} className={css['filters']}>
                        <button
                            className={css['filters_title']}
                            onClick={() => toggleFilter(name)}
                        >
                            <span>{name}</span>
                            {isActive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </button>
                        <div
                            className={`${css['filters_options']} ${isActive ? css['hidden'] : ''}`}
                        >
                        <Component
                            options={options}
                            name={name}
                        />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Filters;