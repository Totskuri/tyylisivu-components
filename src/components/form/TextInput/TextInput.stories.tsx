import React, {useState} from "react";
import {Story} from "@ladle/react";
import {TextInputProps} from "./TextInput.types";
import TextInput from "./TextInput";
import componentDefaults from "../../../defaults/ComponentDefaults";

export default {
    title: "form",
};

export const Default: Story<TextInputProps> = ({
    placeholder,
    readOnly,
    autoFocus,
    maxLength,
    className,
    style,
    enterKeyHint
}) => {
    const [value, setValue] = useState('');
    return (
        <TextInput
            value={value}
            onChange={(val) => setValue(val)}
            onSubmit={() => alert('onSubmit')}
            placeholder={placeholder}
            readOnly={readOnly}
            autoFocus={autoFocus}
            maxLength={maxLength}
            className={className}
            style={style}
            enterKeyHint={enterKeyHint}
        />
    )
}

Default.storyName = "TextInput";

Default.args = {
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
