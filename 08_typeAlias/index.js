function 함수(a) {
    return 0;
}
var 내함수 = function (a) {
    return 0;
};
var 회원정보 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { },
};
회원정보.plusOne(1);
var 함수1 = function (a) {
    a();
};
function 함수2() {
    console.log('함수우');
}
함수1(함수2);
var cutZero = function (str) {
    return str.substring(0, 1) === '0' ? str.substring(1, str.length - 2) : str;
};
var removeDash = function (str) {
    return Number(str.replace('-', ''));
};
var 만들함수 = function (str, cut, remove) {
    return remove(cut(str));
};
console.log(만들함수('010-1111-2222', cutZero, removeDash));
