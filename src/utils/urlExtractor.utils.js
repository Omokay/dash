export const urlExtractorUtils = (path) => {
    if (path.length < 1) {
        return;
    }

    const notUrl = /([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/;
    let result = path.match(notUrl)[1];

    console.log(result);
    return result;
};
