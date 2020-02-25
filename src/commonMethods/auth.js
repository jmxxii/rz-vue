exports.checkIfLoggedIn = () => {
    const loggedIn = sessionStorage.getItem("xlgn");
    if (loggedIn === null) {
        return false;
    }

    return true;
};

exports.checkForToken = () => {
    const jwtToken = sessionStorage.getItem("xjt");

    if (jwtToken === null) {
      return "";
    }

    return jwtToken;
};