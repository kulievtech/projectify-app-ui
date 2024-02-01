import React from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import getDate from "date-fns/getDate";
import "./DatePicker.css";

interface DataPickerProps {
    selected: ReactDatePickerProps["selected"];
    onSelect?: (value: Date) => void;
    onChange: (value: Date) => void;
    placeholder: string;
    disabled?: boolean;
}

const DatePicker: React.FC<DataPickerProps> = ({
    selected,
    onSelect,
    onChange,
    placeholder,
    disabled
}) => {
    const handleOnChange = (date: Date) => {
        onChange(date);
    };
    const handleOnSelect = (date: Date) => {
        onSelect && onSelect(date);
    };

    const customizeDay = (date: Date) => {
        return "date-picker__day-wrapper";
    };

    const renderDayContents = (_: number, date: Date) => {
        return <div className="date-picker__day">{getDate(date)}</div>;
    };
    return (
        <ReactDatePicker
            selected={selected}
            onSelect={handleOnSelect}
            onChange={handleOnChange}
            className="input input-large input-rounded"
            placeholderText={placeholder}
            disabled={disabled}
            dayClassName={customizeDay}
            renderDayContents={renderDayContents}
            calendarClassName="date-picker"
        />
    );
};

export { DatePicker };
