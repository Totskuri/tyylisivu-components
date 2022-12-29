import {ComponentProps} from "./ComponentProps";

export interface InputProps extends ComponentProps{
    readOnly?: boolean,
    autoFocus?: boolean,
    onSubmit?: () => void,
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
}
