export const shortenAddress = (address:string) => {
    if (!address) return null;
    return `${address.substr(0, 6)}...${address.substr(
        address.length - 4,
        address.length
    )}`;
};
export const isPositiveInt = (value:string) => /^\+?([1-9]\d*)$/.test(value);