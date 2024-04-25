// const waza = ["10まんボルト","れいとうビーム","かえんほうしゃ","なみのり","サイコキネシス","10まんボルト","だいもんじ","ふぶき"
//   ];

// const pokeName = ["カイリュー","ミュウツー"
// ];

// import {Pokemon} from "./pokemon/individual/individual.js";
// import {Individual} from "./pokemon/individual/individual.js";
// import {ant} from "./species.js";

let pokemon = require('./species.js');
let move = require('./move.js');

// import {Pokemon} from "./species.js";
// import {Kairyu} from "./species.js";
// import {Mewtwo} from "./species.js";

// let Kairyu = new Pokemon(149, 'カイリュー', '0149_kairyu.png', 'ドラゴン', 'ひこう', 91, 134, 95, 100, 100, 80);
// let Mewtwo = new Pokemon(150, 'ミュウツー', '0150_mewtwo.png', 'エスパー', 'null', 106, 110, 90, 154, 90, 130);

// let Kairyu1 = new Individual(149, 'カイリュー', '0149_kairyu.png', 'ドラゴン', 'ひこう', 91, 134, 95, 100, 100, 80,
// 31, 31, 31, 31, 31, 31, 252, 252, 0, 0, 0, 4, 'いじっぱり', 'マルチスケイル', 'しんそく', 'ほのおのパンチ', 'しんそく', 'げきりん', 'じしん',
// 'オス', 'ノーマル', 50, 'こだわりハチマキ'
// );

// let Mewtwo1 = new Individual(150, 'ミュウツー', '0150_mewtwo.png', 'エスパー', 'null', 106, 110, 90, 154, 90, 130,
// 31, 0, 31, 31, 31, 31, 4, 0, 0, 252, 0, 252, 'おくびょう', 'プレッシャー', 'ぎゃくしゅう', 'だいもんじ', 'れいとうビーム', 'サイコブレイク', '10まんボルト',
// 'null', 'エスパー', 50, 'いのちのたま' 
// );
// const quizLength = quiz.length;
// let quizIndex = 0;
// let score = 0;

//定数の文字列をHTMLに反映する
//document.getElementsByTagName('button')[0].textContent = answers[0];
//document.getElementsByTagName('button')[1].textContent = answers[1];
//document.getElementsByTagName('button')[2].textContent = answers[2];
//document.getElementsByTagName('button')[3].textContent = answers[3];

//定数を定義して同じ文字列の繰り返しを短縮
//document.getElementsByTagName('button')と毎回書くのがだるいので$buttonで呼べるようにしている
// const $button = document.getElementsByTagName('button'); //getElementsByTagName('button'):タグ名('button')を指定して要素ノードを取得
// const buttonLength = $button.length;

// $はHTMLのオブジェクトであることがわかりやすいように入れている

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

//クイズの問題文、選択肢を関数で定義する
// const setupQuiz = () => {
//   document.getElementById('js-question').textContent = question;
//   //ループ文
//   let buttonIndex = 0;
//   while(buttonIndex < buttonLength){
//     //繰り返したい命令
//     $button[buttonIndex].textContent = answers[buttonIndex];
//     buttonIndex++;
//   }
// }

// const lifeBar = document.getElementById('life-bar')         // ライフバー
// const lifeMark = document.getElementById('life-mark')       // ライフの光部分

//クイズの問題文、選択肢を関数で定義する
const setupBattleScreen = () => {
  //問題文を拡張したのでquestionを書き直す
  document.getElementById('js-question').textContent = "対戦シミュレーション";//タグjs-questionの要素のtextContentを"対戦シミュレーション"に書き換え

    document.getElementsByClassName('h1')[0].textContent = pokemon.Kairyu.name;//タグh1 0番目の要素のtextContentを"カイリュー"に書き換え
    document.getElementsByTagName('h1')[1].textContent = pokemon.Mewtwo.name;//タグh1 1番目の要素のtextContentを"ミュウツー"に書き換え


    document.getElementsByTagName('button')[0].textContent = move.gekirin.name;
    document.getElementsByTagName('button')[4].textContent = move.phycobreak.name;

    document.getElementsByClassName('card-text')[1].textContent = pokemon.Kairyu.hp;
    document.getElementsByClassName('card-text')[4].textContent = pokemon.Mewtwo.hp;

    // lifeBar.style.width = "100%"                                // ライフ初期幅
  // //ループ文
  // let buttonIndex = 0;
  // while(buttonIndex < buttonLength){
  //   //繰り返したい命令
  //   $button[buttonIndex].textContent = Kairyu1.waza[buttonIndex];//buttonIndex番目のbuttonのtextContentに代入
  //   buttonIndex++;
  // }
}

setupBattleScreen();


//げきりんを押したときの処理
document.getElementsByTagName('button')[0].addEventListener('click', function() {

  
  let rnd = (Math.floor(Math.random() * 16) + 85)/100;


  let a = 0;

  a = Math.floor((Math.floor((50*2/5+2) * move.gekirin.power * pokemon.Kairyu.atk / pokemon.Mewtwo.def / 50) + 2) * rnd);

  let b = pokemon.Mewtwo.hp-=a

  let c = 0
    if (b > 0) {
      c = b;
    }
    else{
      c = 0;
    }

  document.getElementsByClassName('card-text')[4].textContent = c;

  // let life = c                                              // ライフ初期値
  // if ( life <= 0 ){
  //     // 0.3秒後に光部分を非表示にする
  //     setTimeout(function(){
  //         lifeMark.style.visibility = 'hidden'
  //     }, 300)
  // } else {
  //     // 算出の結果 100 を超過した場合
  //     if ( life > pokemon.Mewtwo.hp ) {
  //         life = pokemon.Mewtwo.hp
  //     }
  //     // 光部分を表示する
  //     lifeMark.style.visibility = 'visible'
  // }
  // // スタイル(幅)を更新する
  // lifeBar.style.width = life / pokemon.Mewtwo.hp * 100 + "%"
  
}, false);

//サイコブレイクを押したときの処理
document.getElementsByTagName('button')[4].addEventListener('click', function() {

  
  let rnd = (Math.floor(Math.random() * 16) + 85)/100;


let a = 0;

a = Math.floor((Math.floor((50*2/5+2) * move.phycobreak.power * pokemon.Mewtwo.spatk / pokemon.Kairyu.spdef / 50) + 2) * rnd);

let b = pokemon.Kairyu.hp-=a

let c = 0
if (b > 0) {
  c = b;
}
else{
  c = 0;
}

document.getElementsByClassName('card-text')[1].textContent = c;

}, false);



// //正誤判定の関数を定義
// const clickHandler = (e) => {
//   if(quiz[quizIndex].correct === e.target.textContent){
//         //e.target:クリックされた要素を指す
//     window.alert(`正解！`);
//     window.alert(quiz[quizIndex].commentary1);
//     score++;
//   } else {
//     window.alert(`不正解`);
//     window.alert(quiz[quizIndex].commentary2);
//   }

//   quizIndex++;


// //次の問題に進むかどうかの判定
//   if(quizIndex < quizLength){
//     //問題がまだあればこっちを実行
//     setupQuiz(quizIndex);
//   } else {
//     //問題がもうなければこっちを実行
//     window.alert(`終了！あなたの変態レベルは` + score + `/` + quizLength);
//   }

// };

// // //1つ目のボタンをクリックしたら正誤判定できる
// // $button[0].addEventListener(`click`, (e)=> {
// //     //e:イベントのオブジェクト
// //   clickHandler(e);
// // });

// //正誤判定の発動条件(どういう場合にclickHandlerが呼び出されるか)
// //どのボタンでも正誤判定を実行できるようにしたい
// let handlerIndex = 0;
// while(handlerIndex < buttonLength){
//   //繰り返したい命令
//   $button[handlerIndex].addEventListener(`click`, (e)=> {
//     clickHandler(e);
//   });
//   handlerIndex++;
// }

// //クイズの問題文、選択肢を関数で定義する
// const setupBattleScreen = () => {
//   //問題文を拡張したのでquestionを書き直す
//   document.getElementById('js-question').textContent = "対戦シミュレーション";//タグjs-questionの要素のtextContentを"対戦シミュレーション"に書き換え

//   let cardIndex = 0;
//   while(cardIndex < document.getElementsByTagName('h1').length){
//     //繰り返したい命令
//     document.getElementsByTagName('h1')[cardIndex].textContent = pokeName[cardIndex];//タグh1 0番目の要素のtextContentを"カイリュー"に書き換え
//     cardIndex++;
//   }

//   // document.getElementsByTagName('h1')[0].textContent = "カイリュー";//タグh1 0番目の要素のtextContentを"カイリュー"に書き換え
//   // document.getElementsByTagName('h1')[1].textContent = "ミュウツー";//タグh1 1番目の要素のtextContentを"ミュウツー"に書き換え

//   // //ループ文
//   let buttonIndex = 0;
//   while(buttonIndex < buttonLength){
//     //繰り返したい命令
//     $button[buttonIndex].textContent = waza[buttonIndex];//buttonIndex番目のbuttonのtextContentに代入
//     buttonIndex++;
//   }
// }