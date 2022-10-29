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
(function (a) {
    a();
});
function 함수2() {
    console.log('함수우');
}
함수1(함수2);
