export const nullChecker = (str) => {
    if (str.length < 1 || str === 'none' || (/^(\s*)$/).test(str) === true) {
        return false;
    }
    return true;
};

