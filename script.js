'use strict';

//コンソール
console.log("JavaScriptファイル読み込み完了");

//フォームでの値取得
document.getElementById('form__search').onsubmit = function(event) {
    event.preventDefault();
    const keyword = document.getElementById('form__search').searchText.value;
    if(keyword == ''){
        document.getElementById('output').textContent = `検索欄にテキストを入力してください`
    } else {
        document.getElementById('output').textContent = `「${keyword}」の検索中・・・`
    }
}

//現在日付の表示+時間の表示変更
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const minutes = now.getMinutes();
const accessDate = `${year}年${month + 1}月${date}日 ${hour}時${minutes}分`;
document.getElementById('accessTime').textContent = accessDate;

var ampm = '';
if(hour < 12){
    ampm = 'a.m.';
} else {
    ampm = 'p.m.';
};
var ampmMinutes = '';
if(minutes < 10){
    ampmMinutes = `0${minutes}`;
} else {
    ampmMinutes = minutes;
};
document.getElementById('ampmTime').textContent = `${hour % 12}:${ampmMinutes}${ampm}`;

//小数点〇い以下で円周率を切り捨てる
function point(num, digit){
    const mover = 10 ** digit;
    return Math.floor(num * mover) / mover;
}

document.getElementById('form__pi-input').onsubmit = function(event) {
    event.preventDefault();
    var digit = document.getElementById('digit');
    console.log(`digitの値：${digit.value}`);
    document.getElementById('calcDigit').textContent = digit.value;
    document.getElementById('calcPi').textContent = point(Math.PI, digit.value);
}