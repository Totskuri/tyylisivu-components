import {InputProps} from "../../../types/InputProps";

export interface TextareaProps extends InputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    maxLength?: number;
    rows?: number;
}
