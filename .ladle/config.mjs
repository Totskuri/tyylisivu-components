export default {
    outDir: "docs",
    base: "./",
    addons: {
        a11y: {
            enabled: false,
        },
        action: {
            enabled: true,
            defaultState: [],
        },
        control: {
            enabled: true,
            defaultState: {},
        },
        ladle: {
            enabled: false,
        },
        mode: {
            enabled: false,
            defaultState: "full",
        },
        rtl: {
            enabled: false,
            defaultState: false,
        },
        source: {
            enabled: true,
            defaultState: false,
        },
        theme: {
            enabled: true,
            defaultState: "light",
        },
        width: {
            enabled: false,
            options: {
                xsmall: 414,
                small: 640,
                medium: 768,
                large: 1024,
            },
            defaultState: 0,
        },
    },
};
