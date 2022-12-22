const classNames = (strings: string[]): string => {
    return strings.filter((string) => string.length > 0).join(' ');
}

export default classNames;
