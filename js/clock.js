setInterval(function () {
    let today = new Date();

    let dayList = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    let dayListEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday']


    let hh = addZero(today.getHours());
    let mm = addZero(today.getMinutes());
    let ss = addZero(today.getSeconds());
    let yy = addZero(today.getFullYear());
    let mon = today.getMonth() + 1; //0부터 시작함으로 1을 더해줘야함
    let dd = today.getDate();
    let day = dayListEn[today.getDay()].toUpperCase(); // 요일 (화요일 = 2)


    document.querySelector("#hours").innerHTML = hh;
    document.querySelector("#min").innerHTML = mm;
    document.querySelector("#sec").innerHTML = ss;
    document.querySelector("#year").innerHTML = yy;
    document.querySelector("#month").innerHTML = mon;
    document.querySelector("#date").innerHTML = dd;
    document.querySelector("#day").innerHTML = day;

    function addZero(num) {

        return (num < 10 ? "0" + num : '' + num)
    }



}, 1000)