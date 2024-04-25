class Move{
    constructor(number, name, type, power, accuracy, pp, effect, physical, direct){
      this.number = number
      this.name = name;    //プロパティ
      this.type = type;
      this.power = power
      this.accuracy = accuracy;
      this.pp = pp;
      this.effect  = effect;
      this.physical = physical;
      this.direct = direct;
    }

}

// export{Move};

let gekirin = new Move(1, "げきりん", "ドラゴン", 120, 100, 10, "2~3ターン攻撃後混乱", "物理", "接触")
let phycobreak = new Move(2, "サイコブレイク", "エスパー", 100, 100, 10, "相手の防御で計算", "特殊", "非接触")

exports.gekirin = gekirin;
exports.phycobreak = phycobreak;
