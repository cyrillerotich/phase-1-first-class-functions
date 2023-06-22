function receivesAFunction(callBackFunction) {
    callBackFunction();
}
function returnsANamedFunction() {
    return function beforeAll() { };
}
function returnsAnAnonymousFunction() {
    return function () { };
}
