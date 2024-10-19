interface Config {
    utopia: {
        minViewport: number;
        maxViewport: number;
        rootSize: number;
    };
}

const config: Config = Object.freeze({
    // Utopia
    utopia: {
        minViewport: 320,
        maxViewport: 1440,
        rootSize: 16,
    },
});
export { config };
