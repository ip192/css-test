$(document).ready(function () {
    var arr = [1, 2, '3', '4', 5];
    var str_1 = 'abcdefg';
    var str_2 = '12345';
    var num = [1, 2, 3, 4, 5];

    // map
    // console.log(arr.map(String));
    // console.log(arr.map(String).map(Number));

    // console.log(num.map(pow));


    // reduce
    // console.log(arr.map(Number).reduce(function (a, b) {
    //     return a + b;
    // }));

    // console.log('"12345" to 12345:', str_2.split('').map(Number).reduce(function (a, b) {
    //     return a * 10 + b;
    // }));

    // simpleConsole(eval('["1","2","3","4"]').map(Number));

    // console.log(['aBc', 'Def', 'hiJ', 'KLm', 'nOP', 'QRS', 'tuv'].map(function (str) {
    //     var reg = /(\b)[a-z](?=[a-z])*/;
    //     return str.replace(reg, '#');
    // }));

    // simpleConsole(document.getElementById('data-test').dataset.content);
    var ele = document.getElementById('data-testt');
    simpleConsole(ele.dataset.contentChange);
    ele.dataset.contentChange = 'changed';
    simpleConsole(ele.dataset.contentChange);

});

function pow(x) {
    return x*x;
}

function simpleConsole(content) {
    console.log(`%c${content}`, 'background-color: black; color: white; font-size: 20px');
}

function progressChange(value) {
    console.log(value);
}
