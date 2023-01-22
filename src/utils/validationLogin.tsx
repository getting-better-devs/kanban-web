function defaultLogin(email: string, password: string) {
    let result: boolean = false;
    if (email == "email@gmail.com" && password == "123") {
        result = true;
    }
    return result;
}

export { defaultLogin };