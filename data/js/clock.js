const clock = () => {
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let today = `${year}.${month}.${date} ${day}`;
    let time = `${hour}:${min}:${sec}`;
    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;
};
setInterval(clock, 1000);
document.getElementById("button").onclick = function(e) {
    if(document.querySelector(".button-text").innerText == "PlayNow"){
        return;
    };
    document.querySelector(".button-text").innerText = "PlayNow";
    let playlist = new Array();
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const random = ['data/sound/etc/random/p1.mp3','data/sound/etc/random/p2.mp3','data/sound/etc/random/p3.mp3'];
    let day = weekday[dayNum];
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let month_s = String(month).split('');
    let date_s = String(date).split('');
    switch(month_s[0]){
        case '0':
            break;
        case '1':
            playlist.push('data/sound/number/10.mp3');
            break;
        default:
    }
    switch(month_s[1]){
        case '0':
            break;
        case '1':
            playlist.push('data/sound/number/1.mp3');
            break;
        case '2':
            playlist.push('data/sound/number/2.mp3');
            break;
        case '3':
            playlist.push('data/sound/number/3.mp3');
            break;
        case '4':
            playlist.push('data/sound/number/4.mp3');
            break;
        case '5':
            playlist.push('data/sound/number/5.mp3');
            break;
        case '6':
            playlist.push('data/sound/number/6.mp3');
            break;
        case '7':
            playlist.push('data/sound/number/7.mp3');
            break;
        case '8':
            playlist.push('data/sound/number/8.mp3');
            break;
        case '9':
            playlist.push('data/sound/number/9.mp3');
            break;
        default:
    }
    playlist.push('data/sound/etc/月.mp3');
    switch(date_s[0]){
        case '0':
            break;
        case '1':
            playlist.push('data/sound/number/10.mp3');
            break;
        case '2':
            playlist.push('data/sound/number/20.mp3');
            break;
        case '3':
            playlist.push('data/sound/number/30.mp3');
            break;
        default:
    }
    switch(date_s[1]){
        case '0':
            break;
        case '1':
            playlist.push('data/sound/number/1.mp3');
            break;
        case '2':
            playlist.push('data/sound/number/2.mp3');
            break;
        case '3':
            playlist.push('data/sound/number/3.mp3');
            break;
        case '4':
            playlist.push('data/sound/number/4.mp3');
            break;
        case '5':
            playlist.push('data/sound/number/5.mp3');
            break;
        case '6':
            playlist.push('data/sound/number/6.mp3');
            break;
        case '7':
            playlist.push('data/sound/number/7.mp3');
            break;
        case '8':
            playlist.push('data/sound/number/8.mp3');
            break;
        case '9':
            playlist.push('data/sound/number/9.mp3');
            break;
        default:
    }
    playlist.push('data/sound/etc/日.mp3');
    switch(day){
        case 'SUN':
            playlist.push('data/sound/week/日曜日.mp3');
            break;
        case 'MON':
            playlist.push('data/sound/week/月曜日.mp3');
            break;
        case 'TUE':
            playlist.push('data/sound/week/火曜日.mp3');
            break;
        case 'WED':
            playlist.push('data/sound/week/水曜日.mp3');
            break;
        case 'THU':
            playlist.push('data/sound/week/木曜日.mp3');
            break;
        case 'FRI':
            playlist.push('data/sound/week/金曜日.mp3');
            break;
        case 'SAT':
            playlist.push('data/sound/week/土曜日.mp3');
            break;
        default:
    }
    let hour_s = String(hour).split('');
    let min_s = String(min).split('');
    let sec_s = String(sec).split('');
    switch(hour_s[0]){
        case '0':
            break;
        case '1':
            playlist.push('data/sound/number/10.mp3');
            break;
        case '2':
            playlist.push('data/sound/number/20.mp3');
            break;
        default:
    }
    switch(hour_s[1]){
        case '0':
            if(hour_s[0]==0){
                playlist.push('data/sound/number/0.mp3');
            }
            break;
        case '1':
            playlist.push('data/sound/number/1.mp3');
            break;
        case '2':
            playlist.push('data/sound/number/2.mp3');
            break;
        case '3':
            playlist.push('data/sound/number/3.mp3');
            break;
        case '4':
            playlist.push('data/sound/number/4.mp3');
            break;
        case '5':
            playlist.push('data/sound/number/5.mp3');
            break;
        case '6':
            playlist.push('data/sound/number/6.mp3');
            break;
        case '7':
            playlist.push('data/sound/number/7.mp3');
            break;
        case '8':
            playlist.push('data/sound/number/8.mp3');
            break;
        case '9':
            playlist.push('data/sound/number/9.mp3');
            break;
        default:
    }
    playlist.push('data/sound/etc/時.mp3');
    switch(min_s[0]){
        case '0':
            break;
        case '1':
            playlist.push('data/sound/number/10.mp3');
            break;
        case '2':
            playlist.push('data/sound/number/20.mp3');
            break;
        case '3':
            playlist.push('data/sound/number/30.mp3');
            break;
        case '4':
            playlist.push('data/sound/number/40.mp3');
            break;
        case '5':
            playlist.push('data/sound/number/50.mp3');
            break;
        default:
    }
    switch(min_s[1]){
        case '0':
            if(min_s[0]==0){
                playlist.push('data/sound/number/0.mp3');
            }
            break;
        case '1':
            playlist.push('data/sound/number/1.mp3');
            break;
        case '2':
            playlist.push('data/sound/number/2.mp3');
            break;
        case '3':
            playlist.push('data/sound/number/3.mp3');
            break;
        case '4':
            playlist.push('data/sound/number/4.mp3');
            break;
        case '5':
            playlist.push('data/sound/number/5.mp3');
            break;
        case '6':
            playlist.push('data/sound/number/6.mp3');
            break;
        case '7':
            playlist.push('data/sound/number/7.mp3');
            break;
        case '8':
            playlist.push('data/sound/number/8.mp3');
            break;
        case '9':
            playlist.push('data/sound/number/9.mp3');
            break;
        default:
    }
    playlist.push('data/sound/etc/分.mp3');
    playlist.push(random[Math.floor( Math.random() * random.length ) ]);
    playlist.push(getEvent_voice(month+date));
    var audio = document.createElement('audio');
    document.body.appendChild(audio);
    audio.style.width = '100%';
    audio.style.height = 'auto';
    audio.controls = false;
    audio.volume = 1.0;
    audio.src = playlist[0];
    audio.play();
    let index = 0;
    audio.addEventListener('ended', function(){
    index++;
    if (index < playlist.length) {
        audio.src = playlist[index];
        audio.play();
    }
    else {
        document.body.removeChild(audio);
        document.querySelector(".button-text").innerText = "SOUND";
    }
    });
};

document.getElementById("url-button").onclick = function() {
    window.location.href = 'https://www.youtube.com/channel/UCrgaidd-K-sjnoz61y52f1Q';
};
document.getElementById("url-button2").onclick = function() {
    window.location.href = 'https://twitter.com/amaochi_003';
};
function myHandler(e){
    e.preventDefault();
}
//CSVファイルを読み込む関数getCSV()の定義
function getEvent_voice(date){
    let ret = 'data/sound/blank.mp3';
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    console.log(date+'1');
    req.open("GET", "data/js/event_day.csv", false); // アクセスするファイルを指定
    console.log(date+'2');
    req.send(); // HTTPリクエストの発行
    console.log(date+'3');
    ret=convertCSVtoArray(req.responseText,date);
    console.log(date+'4');
    return ret;

}
 
// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str,date){ // 読み込んだCSVデータが文字列として渡される
    console.log(date+'5');
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.toString().split("\n"); // 改行を区切り文字として行を要素とした配列を生成
    console.log(tmp);
    let ret = 'data/sound/blank.mp3';
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        console.log(date+'6');
        result = tmp[i].toString().split(',');
        console.log(result);
        if(result[0]==date){
            ret = result[1];
            console.log(date+'7');
        }
    }
    return ret;
}