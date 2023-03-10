import {InputProps} from "../../../types/InputProps";

export interface TextInputProps extends InputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    maxLength?: number;
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
}
