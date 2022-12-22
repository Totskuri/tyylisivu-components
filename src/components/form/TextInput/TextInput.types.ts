import {InputProps} from "../../../types/InputProps";

export interface TextInputProps extends InputProps {
    value: string,
    onChange: (value: string) => void,
}
