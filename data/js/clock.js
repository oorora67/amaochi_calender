const clock = () => {
    // 現在の日時・時刻の情報を取得
    const d = new Date();
  
    // 年を取得
    let year = d.getFullYear();
    // 月を取得
    let month = d.getMonth() + 1;
    // 日を取得
    let date = d.getDate();
    // 曜日を取得
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    // 時を取得
    let hour = d.getHours();
    // 分を取得
    let min = d.getMinutes();
    // 秒を取得
    let sec = d.getSeconds();
  
    // 1桁の場合は0を足して2桁に
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    // 日付・時刻の文字列を作成
    let today = `${year}.${month}.${date} ${day}`;
    let time = `${hour}:${min}:${sec}`;
  
    // 文字列を出力
    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;
  };
  
  // 1秒ごとにclock関数を呼び出す
  setInterval(clock, 1000);
document.getElementById("button").onclick = function(e) {
    if(document.querySelector(".button-text").innerText == "PlayNow."){
        return;
    };
    document.querySelector(".button-text").innerText = "PlayNow.";
    let playlist = new Array();
    // 現在の日時・時刻の情報を取得
    const d = new Date();
    // 年を取得
    let year = d.getFullYear();
    // 月を取得
    let month = d.getMonth() + 1;
    // 日を取得
    let date = d.getDate();
    // 曜日を取得
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    // 時を取得
    let hour = d.getHours();
    // 分を取得
    let min = d.getMinutes();
    // 秒を取得
    let sec = d.getSeconds();
    // 1桁の場合は0を足して2桁に
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    //日付音声
    let month_s = String(month).split('');
    let date_s = String(date).split('');
    switch(month_s[0]){
        case '0':
            console.log('0');
            break;
        case '1':
            console.log('1');
            playlist.push('data/sound/10.mp3');
            break;
        default:
            console.log('e');
    }
    switch(month_s[1]){
        case '0':
            console.log('0');
            break;
        case '1':
            console.log('1');
            playlist.push('data/sound/1.mp3');
            break;
        case '2':
            console.log('2');
            playlist.push('data/sound/2.mp3');
            break;
        case '3':
            console.log('3');
            playlist.push('data/sound/3.mp3');
            break;
        case '4':
            console.log('4');
            playlist.push('data/sound/4.mp3');
            break;
        case '5':
            console.log('5');
            playlist.push('data/sound/5.mp3');
            break;
        case '6':
            console.log('6');
            playlist.push('data/sound/6.mp3');
            break;
        case '7':
            console.log('7');
            playlist.push('data/sound/7.mp3');
            break;
        case '8':
            console.log('8');
            playlist.push('data/sound/8.mp3');
            break;
        case '9':
            console.log('9');
            playlist.push('data/sound/9.mp3');
            break;
        default:
            console.log('e');
    }
    playlist.push('data/sound/月.mp3');
    switch(date_s[0]){
        case '0':
            console.log('0');
            break;
        case '1':
            console.log('1');
            playlist.push('data/sound/10.mp3');
            break;
        case '2':
            console.log('2');
            playlist.push('data/sound/20.mp3');
            break;
        case '3':
            console.log('2');
            playlist.push('data/sound/30.mp3');
            break;
        default:
            console.log('e');
    }
    switch(date_s[1]){
        case '0':
            console.log('0');
            break;
        case '1':
            console.log('1');
            playlist.push('data/sound/1.mp3');
            break;
        case '2':
            console.log('2');
            playlist.push('data/sound/2.mp3');
            break;
        case '3':
            console.log('3');
            playlist.push('data/sound/3.mp3');
            break;
        case '4':
            console.log('4');
            playlist.push('data/sound/4.mp3');
            break;
        case '5':
            console.log('5');
            playlist.push('data/sound/5.mp3');
            break;
        case '6':
            console.log('6');
            playlist.push('data/sound/6.mp3');
            break;
        case '7':
            console.log('7');
            playlist.push('data/sound/7.mp3');
            break;
        case '8':
            console.log('8');
            playlist.push('data/sound/8.mp3');
            break;
        case '9':
            console.log('9');
            playlist.push('data/sound/9.mp3');
            break;
        default:
            console.log('e');
    }
    playlist.push('data/sound/日.mp3');
    switch(day){
        case 'SUN':
            console.log('1');
            playlist.push('data/sound/日曜日.mp3');
            break;
        case 'MON':
            console.log('2');
            playlist.push('data/sound/月曜日.mp3');
            break;
        case 'TUE':
            console.log('3');
            playlist.push('data/sound/火曜日.mp3');
            break;
        case 'WED':
            console.log('4');
            playlist.push('data/sound/水曜日.mp3');
            break;
        case 'THU':
            console.log('5');
            playlist.push('data/sound/木曜日.mp3');
            break;
        case 'FRI':
            console.log('6');
            playlist.push('data/sound/金曜日.mp3');
            break;
        case 'SAT':
            console.log('7');
            playlist.push('data/sound/土曜日.mp3');
            break;
        default:
            console.log('e');
    }
    //時間音声
    let hour_s = String(hour).split('');
    let min_s = String(min).split('');
    let sec_s = String(sec).split('');
    console.log(hour_s);
    switch(hour_s[0]){
        case '0':
            console.log('0');
            break;
        case '1':
            console.log('1');
            playlist.push('data/sound/10.mp3');
            break;
        case '2':
            console.log('2');
            playlist.push('data/sound/20.mp3');
            break;
        default:
            console.log('e');
    }
    switch(hour_s[1]){
        case '0':
            console.log('0');
            if(hour_s[0]==0){
                playlist.push('data/sound/0.mp3');
            }
            break;
        case '1':
            console.log('1');
            playlist.push('data/sound/1.mp3');
            break;
        case '2':
            console.log('2');
            playlist.push('data/sound/2.mp3');
            break;
        case '3':
            console.log('3');
            playlist.push('data/sound/3.mp3');
            break;
        case '4':
            console.log('4');
            playlist.push('data/sound/4.mp3');
            break;
        case '5':
            console.log('5');
            playlist.push('data/sound/5.mp3');
            break;
        case '6':
            console.log('6');
            playlist.push('data/sound/6.mp3');
            break;
        case '7':
            console.log('7');
            playlist.push('data/sound/7.mp3');
            break;
        case '8':
            console.log('8');
            playlist.push('data/sound/8.mp3');
            break;
        case '9':
            console.log('9');
            playlist.push('data/sound/9.mp3');
            break;
        default:
            console.log('e');
    }
    playlist.push('data/sound/時.mp3');
    switch(min_s[0]){
        case '0':
            console.log('0');
            break;
        case '1':
            console.log('1');
            playlist.push('data/sound/10.mp3');
            break;
        case '2':
            console.log('2');
            playlist.push('data/sound/20.mp3');
            break;
        case '3':
            console.log('3');
            playlist.push('data/sound/30.mp3');
            break;
        case '4':
            console.log('4');
            playlist.push('data/sound/40.mp3');
            break;
        case '5':
            console.log('5');
            playlist.push('data/sound/50.mp3');
            break;
        default:
            console.log('e');
    }
    switch(min_s[1]){
        case '0':
            console.log('0');
            if(min_s[0]==0){
                playlist.push('data/sound/0.mp3');
            }
            break;
        case '1':
            console.log('1');
            playlist.push('data/sound/1.mp3');
            break;
        case '2':
            console.log('2');
            playlist.push('data/sound/2.mp3');
            break;
        case '3':
            console.log('3');
            playlist.push('data/sound/3.mp3');
            break;
        case '4':
            console.log('4');
            playlist.push('data/sound/4.mp3');
            break;
        case '5':
            console.log('5');
            playlist.push('data/sound/5.mp3');
            break;
        case '6':
            console.log('6');
            playlist.push('data/sound/6.mp3');
            break;
        case '7':
            console.log('7');
            playlist.push('data/sound/7.mp3');
            break;
        case '8':
            console.log('8');
            playlist.push('data/sound/8.mp3');
            break;
        case '9':
            console.log('9');
            playlist.push('data/sound/9.mp3');
            break;
        default:
            console.log('e');
    }
    playlist.push('data/sound/分.mp3');
    
    var audio = document.createElement('audio');
    document.body.appendChild(audio);
    audio.style.width = '100%';
    audio.style.height = 'auto';
    audio.controls = true;
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

document.getElementById("url-button").onclick = async function() {
    window.location.href = 'https://www.youtube.com/channel/UCrgaidd-K-sjnoz61y52f1Q';
};
function myHandler(e){
    e.preventDefault();
}