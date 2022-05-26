//答え
let kotae = Math.floor(Math.random()*10+1);
console.log('答え'+kotae);
//入力回数（予想回数）
let kaisu =0;
let b= document.querySelector('#print');
b.addEventListener('click',hantei);
//予想を4回実行する
//将来：ボタンを押したら、hantei()を呼び出すように修正する

//ボタンを押したら後の処理をする関数　hantei()の定義
function hantei(){
    let ul=document.querySelector('input[name="num"]');
    let num=ul.value;
    let yoso=Math.floor(num);
      kaisu=kaisu+1;
      let s = document.querySelector('span#kaisu');
      s.textContent = kaisu;
      let t = document.querySelector('span#yoso');
      t.textContent = yoso; 
      let i =document.querySelector('p#result');
         let result;
        if(kaisu>=4){
            result="答えは"+kotae+"でした。すでにゲームは終わっています。";
            
        }if(kotae==yoso){
            result="正解です。おめでとう！";
        }
        if(kaisu==3&&kotae!=yoso){
            result="間違い残念でした答えは"+kotae+"でした。";
        }
        if(kotae>yoso&&kaisu<3){
            result="間違い。答えはもっと大きいですよ。";
        }
        if(kotae<yoso&&kaisu<3){
            result="間違い。答えはもっと小さいですよ。";
        }

        
        i.textContent = result;
        

}