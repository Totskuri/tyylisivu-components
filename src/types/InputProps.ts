import {ComponentProps} from "./ComponentProps";

export interface InputProps extends ComponentProps {
    readOnly?: boolean;
    autoFocus?: boolean;
    onSubmit?: () => void;
    autoComplete?: string;
    onFocus?: () => void;
    onBlur?: () => void;
}
