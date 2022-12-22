import {InputProps} from "../../../types/InputProps";

export interface NumberInputProps extends InputProps {
    value: number,
    onChange: (value: number) => void,
    min?: number,
    max?: number,
}
