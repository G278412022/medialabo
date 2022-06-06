let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};
/////////////////// 課題3-2 はここから書き始めよう
let ul=document.querySelector('#print');
ul.addEventListener('click',sendRequest);

function sendRequest(){
  let ur1='https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0000-j.json';
  let ur2='https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0100-j.json';
  let ur3='https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0205-j.json';
  let ur4='https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0300-j.json';
  let ur5='https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0409-j.json';
  let ur6='https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0502-j.json';
  let ul=document.querySelector('input[name="bangumi"]');
  let num=ul.value;
  let num2=Math.floor(num);
  if(num2==1){
  console.log(ur1);
  axios.get(ur1)
  .then(showResult)
  .catch(showError)
  .then(finish);}
  if(num2==2){
    console.log(ur2);
    axios.get(ur2)
    .then(showResult)
    .catch(showError)
    .then(finish); 
  }
  if(num2==3){
    console.log(ur3);
    axios.get(ur3)
    .then(showResult)
    .catch(showError)
    .then(finish); 
  }
  if(num2==4){
    console.log(ur4);
    axios.get(ur4)
    .then(showResult)
    .catch(showError)
    .then(finish); 
  }
  if(num2==5){
    console.log(ur5);
    axios.get(ur5)
    .then(showResult)
    .catch(showError)
    .then(finish); 
  }
  if(num2==5){
    console.log(ur6);
    axios.get(ur6)
    .then(showResult)
    .catch(showError)
    .then(finish); 
  }
}

function showResult(resp){
  let data=resp.data;
  if(typeof data==='string'){
    data=JSON.parse(data);
  }
  console.log(data.list.g1[0].title);
  let i=document.querySelector('td#result');
  i.textContent=(data.list.g1[0].title);
  let l=document.querySelector('td#result2');
  l.textContent=(data.list.g1[0].start_time);

  let r=document.querySelector('td#result3');
  r.textContent=(data.list.g1[0].end_time);

}

function showError(err){
 console.log(err);
}

function finish(){
  console.log('Ajax 通信が終わりました。')
}