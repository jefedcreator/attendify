export const shortenAddress = (address) => {
    if (!address) return null;
    return `${address.substr(0, 6)}...${address.substr(
        address.length - 4,
        address.length
    )}`;
};
export const isPositiveInt = (value) => /^\+?([1-9]\d*)$/.test(value);