import React from "react";
import Button from './Button';

export const Default = () => {
    return (
        <Button
            onClick={() => alert('You clicked me!')}
        >
            Click me!
        </Button>
    )
}

export const Primary = () => {
    return (
        <Button
            onClick={() => alert('You clicked me!')}
            variation="primary"
        >
            Click me!
        </Button>
    )
}

export const Secondary = () => {
    return (
        <Button
            onClick={() => alert('You clicked me!')}
            variation="secondary"
        >
            Click me!
        </Button>
    )
}

export const TransparentDark = () => {
    return (
        <Button
            onClick={() => alert('You clicked me!')}
            variation="transparentDark"
        >
            Click me!
        </Button>
    )
}

export const TransparentLight = () => {
    return (
        <Button
            onClick={() => alert('You clicked me!')}
            variation="transparentLight"
        >
            Click me!
        </Button>
    )
}

export const TextDark = () => {
    return (
        <Button
            onClick={() => alert('You clicked me!')}
            variation="textDark"
        >
            Click me!
        </Button>
    )
}

export const TextLight = () => {
    return (
        <Button
            onClick={() => alert('You clicked me!')}
            variation="textLight"
        >
            Click me!
        </Button>
    )
}

export const Disabled = () => {
    return (
        <Button
            onClick={() => alert('You clicked me!')}
            disabled
        >
            Click me!
        </Button>
    )
}
