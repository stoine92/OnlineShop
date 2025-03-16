import { FC } from 'react';
import { FilterOption } from '../../context/ContextTypes';

import css from './Checkbox.module.scss';

interface CheckboxProps {
    options: FilterOption[];
    onChange: (options: FilterOption) => void;
}

const Checkbox: FC<CheckboxProps> = ({ options, onChange }) => {
    const handleChange = (option: FilterOption) => {
        onChange(option);
    };
    
    return (
        <div className={css.checkboxGroup}>
            {options.map((option, index) => (
                <label key={index} className={css.checkbox}>
                    <input
                        type="checkbox"
                        value={option.value}
                        checked={option.selected}
                        onChange={() => handleChange(option)}
                    />
                    <span className={css['checkbox-custom']}></span>
                    <span className={css['checkbox-description']}>{option.description}</span>
                </label>
            ))}
        </div>
    );
};

export default Checkbox;