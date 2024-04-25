class Pokemon{
    constructor(number, species, name, image, type1, type2, ability, hp, atk, def, spatk, spdef, speed, moves1, moves2, moves3, moves4, item){
      this.number = number
      this.species = species;    //プロパティ
      this.name = name;
      this.image = image;  //プロパティ
      this.type1 = type1;
      this.type2 = type2;
      this.ability = ability;
      this.hp = hp;
      this.atk = atk;
      this.def = def;
      this.spatk = spatk;
      this.spdef = spdef;
      this.speed = speed;
      this.moves1 = moves1;
      this.moves2 = moves2;
      this.moves3 = moves3;
      this.moves4 = moves4;
      this.item = item;
    }
  
    getType(){
      return(this.type1, this.type2);
  
    }
  
  }

//   export{Pokemon};
exports.Pokemon  = Pokemon;

  let Kairyu = new Pokemon(149, "Kairyu", "カイリュー", "./images/0149_kairyu.png", "ドラゴン", "ひこう", "マルチスケイル", 198, 187, 115, 108, 120, 101, "しんそく", "げきりん", "ブレイブバード" , "じしん", "こだわりハチマキ")
  let Mewtwo = new Pokemon(150, "Mewtwo", "ミュウツー", "./images/0150_mewtwo.png", "エスパー", "type2", "プレッシャー", 213, 103, 111, 226, 110, 150, "サイコブレイク", "れいとうビーム", "10まんボルト" , "はどうだん", "こだわりメガネ")

//   export{Kairyu, Mewtwo};
exports.Kairyu = Kairyu;
exports.Mewtwo = Mewtwo;