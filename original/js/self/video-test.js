// import './h5-form';
// /* 视频播放测试 */
// $(document).ready(function () {
//
// });

function voice() {
    var video = document.getElementById('video');
    video.volume = 0.2;
    console.log(video.volume);
}

// split / splice / slice / join

(() => {
    let arr = [0, 1, 2, 3, 4, 5];
    const str = '0  1  2  3  4  5';
    console.log(arr);

    // join: 把数组用 - 连接起来，返回结果字符串
    console.log('join:', arr.join('-'));

    // splice: 把arr的0-3元素删除并返; 替换: 从index为 1 的开始，把后面的 2 个替换为 add
    console.log('splice:', '\n', arr.splice(0, 3), '\n', arr);
    arr.splice(1, 3, 'add', 'minus', 'multiply');
    console.log('splice:', '\n', arr);

    // slice: 截取数组的一部分，返回该字符串
    arr = [0, 1, 2, 3, 4, 5];
    console.log('slice', arr.slice(1, 3));

    // split: 分割字符串成数组
    console.log(str.split(' ', 4).map(Number));

    console.log(Math.random().toString());
})();