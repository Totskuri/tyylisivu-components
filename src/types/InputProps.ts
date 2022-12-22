import {ComponentProps} from "./ComponentProps";

export interface InputProps extends ComponentProps{
    placeholder?: string,
    readOnly?: boolean,
    autoFocus?: boolean,
    maxLength?: number,
    onSubmit?: () => void,
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
}
