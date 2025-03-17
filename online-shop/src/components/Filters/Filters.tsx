import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleIcon from '@mui/icons-material/Circle';
import css from './Filters.module.scss';

interface Filter {
    Component: any;
    options: any;
    name: string;
    isActive: boolean;
}

const Filters = ({ filters }: any) => {
    const initialActiveFilters = filters.reduce((acc: { [key: string]: boolean }, filter: Filter) => {
        acc[filter.name] = true;
        return acc;
    }, {});

    const [activeFilters, setActiveFilters] = useState<{ [key: string]: boolean }>(initialActiveFilters);

    const toggleFilter = (name: string) => {
        setActiveFilters(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    };

    return (
        <div className={css['filters']}>
            {filters.map((filter: Filter) => {
                const { Component, options, name, isActive } = filter;
                const isOpen = !!activeFilters[name];

                return (
                    <div key={name} className={css['filters_container']}>
                        <button
                            className={css['filters_container-title']}
                            onClick={() => toggleFilter(name)}
                        >
                            <div className={css['filters_description']}>
                                <span className={css['filters_description-text']}>{name}</span>
                                {isActive ? <CircleIcon fontSize='inherit'/> : null}
                            </div>
                            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </button>
                        <div
                            className={`${css['filters_container-options']} ${isOpen ? '' : css['hidden']}`}
                        >
                            <Component
                                options={options}
                                name={name}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Filters;