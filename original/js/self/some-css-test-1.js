function showGeo() {
    navigator.geolocation.getCurrentPosition(function (pos) {
        console.log('纬度', pos.coords.latitude, '经度', pos.coords.longitude);
    }, function (err) {
        console.log(err);
    });
}

// ready()
(function () {
    navigator.geolocation.getCurrentPosition(function (pos) {
        console.log('纬度', pos.coords.latitude, '经度', pos.coords.longitude);
    }, function (err) {
        console.log(err);
    });
    console.log(document.getElementsByClassName('outer-bottom')[0]);
})();

