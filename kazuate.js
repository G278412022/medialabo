//答え
let kotae = Math.floor(Math.random()*10+1);
console.log('答え'+kotae);
//入力回数（予想回数）
let kaisu =0;

//予想を4回実行する
//将来：ボタンを押したら、hantei()を呼び出すように修正する
hantei();
hantei();
hantei();
hantei();

//ボタンを押したら後の処理をする関数　hantei()の定義
function hantei(){
    let yoso=4;
      kaisu=kaisu+1;
         (kaisu+"回目の予想"+yoso);
        if(kaisu>=4){
            console.log("答えは"+kotae+"でした。すでにゲームは終わっています。");
        }if(kotae==yoso&&kaisu==1){
            console.log("正解です。おめでとう！");
        }
        if(kaisu==3&&kotae!=yoso){
            console.log("間違い残念でした答えは"+kotae+"でした。");
        }
        if(kotae>yoso&&kaisu<3){
            console.log("間違い。答えはもっと大きいですよ。");
        }
        if(kotae<yoso&&kaisu<3){
            console.log("間違い。答えはもっと小さいですよ。")
        }

}