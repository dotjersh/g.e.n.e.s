//version
var version = '0.1.0';

//images
var image = {size:400,display:320};

var geno = {mom:[],dad:[],child:[]}

//Phenotypes
var pheno = {
  sex:{name:"Sex",genes:[
    {name:'Male',gene:["XY"]},
    {name:'Female',gene:["XX"]},
  ]},
  faceShape:{name:"Face Shape",genes:[
    {name:'Round',gene:["Rr","RR"]},
    {name:'Square',gene:["rr"]},
  ]},
  chin:{name:"Chin",genes:[
    {name:'Prominant',gene:["CC","Cc"]},
    {name:'Less',gene:["cc"]},
  ]},
  chinShape:{name:"Chin Shape",genes:[
    {name:'Round',gene:["VV","Vv"]},
    {name:'Subtle',gene:["vv"]},
  ]},
  chinCleft:{name:"Cleft Chin",genes:[
    {name:'Absent',gene:["ZZ","Zz"]},
    {name:'Present',gene:["ZZ"]},
  ]},
  earSize:{name:"Ear Size",genes:[
    {name:'Large',gene:["GG"]},
    {name:'Medium',gene:["Gg"]},
    {name:'Small',gene:["gg"]},
  ]},
  earLobes:{name:"Ear Lobes",genes:[
    {name:'Free',gene:["PP","Pp"]},
    {name:'Attached',gene:["pp"]},
  ]},
  hair:{name:"Hair",genes:[
    {name:'Curly',gene:["HH"]},
    {name:'Wavy',gene:["Hh"]},
    {name:'Straight',gene:["hh"]},
  ]},
  widowsPeak:{name:"Widow's Peak",genes:[
    {name:'Present',gene:["WW","Ww"]},
    {name:'Absent',gene:["ww"]},
  ]},
  hairColor:{name:"Hair Color",genes:[
    {name:'Black',gene:["HHCC","HHCc"]},
    {name:'Red',gene:["HHcc"]},
    {name:'Brown',gene:["HhCC","HhCc"]},
    {name:'Blonde',gene:["Hhcc","hhCc"]},
    {name:'DarkBlonde',gene:["hhCC"]},
    {name:'LightBlonde',gene:["hhcc"]},
  ]},
  eyebrowThickness:{name:"Eyebrow Thickness",genes:[
    {name:'Fine',gene:["bb"]},
    {name:'Bushy',gene:["BB","Bb"]},
  ]},
  eyebrowSeperation:{name:"Eyebrow Seperation",genes:[
    {name:'Separated',gene:["SS","Ss"]},
    {name:'Close',gene:["ss"]},
  ]},
  eyebrowColor:{name:"Eyebrow Color",genes:[
    {name:'Darker than Hair',gene:["EE"]},
    {name:'Same as Hair',gene:["Ee"]},
    {name:'Lighter than Hair',gene:["ee"]},
  ]},
  mouthLength:{name:"Mouth Length",genes:[
    {name:'Long',gene:["MM"]},
    {name:'Average',gene:["Mm"]},
    {name:'Short',gene:["mm"]},
  ]},
  lips:{name:"Lips",genes:[
    {name:'Thick',gene:["TT","Tt"]},
    {name:'Thin',gene:["tt"]},
  ]},
  dimples:{name:"Dimples",genes:[
    {name:'Present',gene:["DD","Dd"]},
    {name:'Absent',gene:["dd"]},
  ]},
  hapsburg:{name:"Hapsburg Lip",genes:[
    {name:'Obvious',gene:["KK"]},
    {name:'Present',gene:["Kk"]},
    {name:'Slight',gene:["kk"]},
  ]},
  nose:{name:"Nose",genes:[
    {name:'Big',gene:["NN"]},
    {name:'Medium',gene:["Nn"]},
    {name:'Small',gene:["nn"]},
  ]},
  freckles:{name:"Freckles",genes:[
    {name:'Present',gene:["FF","Ff"]},
    {name:'Absent',gene:["ff"]},
  ]},
  eyeDistance:{name:"Eye Distance",genes:[
    {name:'Close',gene:["DD"]},
    {name:'Average',gene:["Dd"]},
    {name:'Far',gene:["dd"]},
  ]},
  eyeSize:{name:"Eye Size",genes:[
    {name:'Large',gene:["LL"]},
    {name:'Medium',gene:["Ll"]},
    {name:'Small',gene:["ll"]},
  ]},
  eyeShape:{name:"Eye Shape",genes:[
    {name:'Almond',gene:["AA","Aa"]},
    {name:'Narrow',gene:["aa"]},
  ]},
  eyeSlant:{name:"Eye Slant",genes:[
    {name:'Horizontal',gene:["JJ","Jj"]},
    {name:'Upward',gene:["jj"]},
  ]},
  eyelashes:{name:"Eyelashes",genes:[
    {name:'Long',gene:["UU","Uu"]},
    {name:'Short',gene:["uu"]},
  ]},
  eyeColor:{name:"Eye Color",genes:[
    {name:'DarkBrown',gene:["EECC","EECc"]},
    {name:'LightBrown',gene:["EeCC","EEcc","EeCc"]},
    {name:'Grey',gene:["Eecc"]},
    {name:'Green',gene:["eeCC"]},
    {name:'DarkBlue',gene:["eeCc"]},
    {name:'LightBlue',gene:["eecc"]},
  ]},
}

function ig(src){
  var img = new Image();
  img.src = "data/layers/" + src;

  return img;
}

var imgLIB = [
  {id:"Background.png"},
  {id:"cleft.png"},
  {id:"clothes.png"},
  {id:"dimples.png"},
  {id:"ear-large-attached.png"},
  {id:"ear-large-free.png"},
  {id:"ear-medium-attached.png"},
  {id:"ear-medium-free.png"},
  {id:"ear-small-attached.png"},
  {id:"ear-small-free.png"},
  {id:"eye-large-almond-horizontal.png"},
  {id:"eye-large-almond-upward.png"},
  {id:"eye-large-narrow-horizontal.png"},
  {id:"eye-large-narrow-upward.png"},
  {id:"eye-medium-almond-horizontal.png"},
  {id:"eye-medium-almond-upward.png"},
  {id:"eye-medium-narrow-horizontal.png"},
  {id:"eye-medium-narrow-upward.png"},
  {id:"eye-small-almond-horizontal.png"},
  {id:"eye-small-almond-upward.png"},
  {id:"eye-small-narrow-horizontal.png"},
  {id:"eye-small-narrow-upward.png"},
  {id:"eyelashes-bushy-close-black.png"},
  {id:"eyelashes-bushy-close-blonde.png"},
  {id:"eyelashes-bushy-close-brown.png"},
  {id:"eyelashes-bushy-close-darkblonde.png"},
  {id:"eyelashes-bushy-close-lightblonde.png"},
  {id:"eyelashes-bushy-separated-black.png"},
  {id:"eyelashes-bushy-separated-blonde.png"},
  {id:"eyelashes-bushy-separated-brown.png"},
  {id:"eyelashes-bushy-separated-darkblonde.png"},
  {id:"eyelashes-bushy-separated-lightblonde.png"},
  {id:"eyelashes-bushy-separated-red.png"},
  {id:"eyelashes-fine-close-black.png"},
  {id:"eyelashes-fine-close-blonde.png"},
  {id:"eyelashes-fine-close-brown.png"},
  {id:"eyelashes-fine-close-darkbrown.png"},
  {id:"eyelashes-fine-close-lightblonde.png"},
  {id:"eyelashes-fine-close-red.png"},
  {id:"eyelashes-fine-close-red.png"},
  {id:"eyelashes-fine-separated-black.png"},
  {id:"eyelashes-fine-separated-blonde.png"},
  {id:"eyelashes-fine-separated-darkblonde.png"},
  {id:"eyelashes-fine-separated-lightblonde.png"},
  {id:"eyelashes-fine-separated-red.png"},
  {id:"eyelashes-fine-separated-brown.png"},
  {id:"eyelashes-fine-separated-red.png"},
  {id:"face-round-less-.png"},
  {id:"face-round-prominant-round.png"},
  {id:"face-round-prominant-square.png"},
  {id:"face-square-less-.png"},
  {id:"face-square-prominant-round.png"},
  {id:"face-square-prominant-square.png"},
  {id:"freckles.png"},
  {id:"hair-demale-straight-red.png"},
  {id:"hair-female-back-black.png"},
  {id:"hair-female-back-blonde.png"},
  {id:"hair-female-back-brown.png"},
  {id:"hair-female-back-darkblonde.png"},
  {id:"hair-female-back-lightblonde.png"},
  {id:"hair-female-back-red.png"},
  {id:"hair-female-curly-black.png"},
  {id:"hair-female-curly-blonde.png"},
  {id:"hair-female-curly-brown.png"},
  {id:"hair-female-curly-darkblonde.png"},
  {id:"hair-female-curly-lightblonde.png"},
  {id:"hair-female-curly-red.png"},
  {id:"hair-female-straight-black.png"},
  {id:"hair-female-straight-brown.png"},
  {id:"hair-female-straight-darkblonde.png"},
  {id:"hair-female-straight-lightblonde.png"},
  {id:"hair-female-striaght-blonde.png"},
  {id:"hair-female-wavy-black.png"},
  {id:"hair-female-wavy-blonde.png"},
  {id:"hair-female-wavy-brown.png"},
  {id:"hair-female-wavy-darkblonde.png"},
  {id:"hair-female-wavy-lightblonde.png"},
  {id:"hair-female-wavy-red.png"},
  {id:"hair-male-curly-black.png"},
  {id:"hair-male-curly-blonde.png"},
  {id:"hair-male-curly-brown.png"},
  {id:"hair-male-curly-darkblonde.png"},
  {id:"hair-male-curly-lightblonde.png"},
  {id:"hair-male-curly-red.png"},
  {id:"hair-male-straight-black.png"},
  {id:"hair-male-straight-blonde.png"},
  {id:"hair-male-straight-brown.png"},
  {id:"hair-male-straight-darkblonde.png"},
  {id:"hair-male-straight-lightblonde.png"},
  {id:"hair-male-straight-red.png"},
  {id:"hair-male-wavy-black.png"},
  {id:"hair-male-wavy-blonde.png"},
  {id:"hair-male-wavy-brown.png"},
  {id:"hair-male-wavy-darkblonde.png"},
  {id:"hair-male-wavy-lightblonde.png"},
  {id:"hair-male-wavy-red.png"},
  {id:"hapsburg-obvious.png"},
  {id:"hapsburg-present.png"},
  {id:"hapsburg-slight.png"},
  {id:"iris-bck.png"},
  {id:"iris-large-darkblue.png"},
  {id:"iris-large-darkbrown.png"},
  {id:"iris-large-green.png"},
  {id:"iris-large-grey.png"},
  {id:"iris-large-lightblue.png"},
  {id:"iris-large-lightbrown.png"},
  {id:"iris-medium-darkblue.png"},
  {id:"iris-medium-darkbrown.png"},
  {id:"iris-medium-green.png"},
  {id:"iris-medium-grey.png"},
  {id:"iris-medium-lightblue.png"},
  {id:"iris-medium-lightbrown.png"},
  {id:"iris-small-darkblue.png"},
  {id:"iris-small-darkbrown.png"},
  {id:"iris-small-green.png"},
  {id:"iris-small-grey.png"},
  {id:"iris-small-lightblue.png"},
  {id:"iris-small-lightbrown.png"},
  {id:"mouth-male-average-thick.png"},
  {id:"mouth-male-average-thin.png"},
  {id:"mouth-male-long-thick.png"},
  {id:"mouth-male-long-thin.png"},
  {id:"mouth-male-short-thick.png"},
  {id:"mouth-male-short-thin.png"},
  {id:"nose-big.png"},
  {id:"nose-medium.png"},
  {id:"nose-small.png"}
];

var imglost = "";

function findIMG(data){
  return data.id === imglost;
}

function searchIMG(value){
  imglost = value + ".png";
  var result = imgLIB.find(findIMG);
  if(!result){
    throw(value + " is missing.")
  }
  return result.img;
}

for(var i = 0; i < imgLIB.length; i++){
  imgLIB[i].img = ig(imgLIB[i].id);
}
