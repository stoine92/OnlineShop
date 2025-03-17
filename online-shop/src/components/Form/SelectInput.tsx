import { FC } from 'react';
import { FilterOption } from '../../context/ContextTypes';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import css from "./SelectInput.module.scss";

interface SelectInputProps {
    label?: string;
    options: FilterOption[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: FC<SelectInputProps> = ({ label, options, value, onChange }) => {
    return (
        <div className={css['select']}>
            {label && <label className={css['select-label']}>{label}</label>}
            <select value={value} onChange={onChange} className={css['select-element']}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.description}
                    </option>
                ))}
            </select>
            <KeyboardArrowDownIcon className={css['select-arrow']} />
        </div>
    );
};

export default SelectInput;