export const urlExtractorUtils = (path) => {
    if (path.length < 1) {
        return;
    }
    const notUrl = /([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/;
    return path.match(notUrl)[1];
};
