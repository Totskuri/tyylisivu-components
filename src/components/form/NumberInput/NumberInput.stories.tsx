import React, {useState} from "react";
import NumberInput from './NumberInput';
import {Story} from "@ladle/react";
import {NumberInputProps} from "./NumberInput.types";
import componentDefaults from "../../../defaults/ComponentDefaults";

export default {
    title: "form",
};

export const Default: Story<NumberInputProps> = ({
    min,
    max,
    readOnly,
    autoFocus,
    className,
    style,
    enterKeyHint
}) => {
    const [value, setValue] = useState(0);
    return (
        <NumberInput
            value={value}
            onChange={(val) => setValue(val)}
            onSubmit={() => alert('onSubmit')}
            min={min}
            max={max}
            readOnly={readOnly}
            autoFocus={autoFocus}
            className={className}
            style={style}
            enterKeyHint={enterKeyHint}
        />
    )
}

Default.storyName = "NumberInput";

Default.args = {
    min: undefined,
    max: undefined,
    placeholder: '',
    readOnly: false,
    autoFocus: false,
    maxLength: 524288,
    enterKeyHint: undefined,
    ...componentDefaults
};

Default.argTypes = {
    enterKeyHint: {
        options: ['none', 'enter', 'done', 'go', 'next', 'previous', 'search', 'send'],
        control: {type: "select"},
        defaultValue: 'none',
    }
};
