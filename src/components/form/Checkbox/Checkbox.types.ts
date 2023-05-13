import {ComponentProps} from "../../../types/ComponentProps";

export interface CheckboxProps extends ComponentProps {
    checked: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean;
}
