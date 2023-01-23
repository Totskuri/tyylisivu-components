import React from "react";

export const KEY_ENTER = 'Enter';
export const KEY_ESCAPE = 'Escape';

export interface KeyboardAction {
    key: string,
    action: () => void,
}

export default class KeyboardListener {
    keyboardActions: KeyboardAction[];

    constructor(keyboardActions: KeyboardAction[]) {
        this.keyboardActions = keyboardActions;
    }

    listen = (e: React.KeyboardEvent): void => {
        const needle = this.keyboardActions.find(
            (keyboardAction) => keyboardAction.key === e.key
        );
        if (needle) {
            needle.action();
        }
    };
}
