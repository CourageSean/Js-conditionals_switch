let bundeslandInfo = document.getElementById("bundeslandInfo");
let ergebnisTxt = document.getElementById("ergebnisTxt");

let a =
  "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
let b = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
let c = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
let d = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
let e = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
let f = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
let g = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
let h =
  "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
let i = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
let j =
  "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
let k = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
let l = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
let m = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
let n =
  "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
let o =
  "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
let p = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
let z = "Ein solches Bundesland gibt es in Deutschland nicht";

let a1 = "Baden-Württemberg";
let b1 = "Bayern";
let c1 = "Berlin";
let d1 = "Brandenburg";
let e1 = "Bremen";
let f1 = "Hamburg";
let g1 = "Hessen";
let h1 = "Mecklenburg-Vorpommern";
let i1 = "Niedersachsen";
let j1 = "Nordrhein-Westfalen";
let k1 = "Rheinland-Pfalz";
let l1 = "Saarland";
let m1 = "Sachsen";
let n1 = "Sachsen-Anhalt";
let o1 = "Schleswig-Holstein";
let p1 = "Thüringen";
let z1 = "";

function check() {
  switch (bundeslandInfo.value.toLowerCase()) {
    case a1.toLowerCase():
      ergebnisTxt.innerHTML = a;
      break;

    case b1.toLowerCase():
      ergebnisTxt.innerHTML = b;
      break;
    case c1.toLowerCase():
      ergebnisTxt.innerHTML = c;
      break;
    case d1.toLowerCase():
      ergebnisTxt.innerHTML = d;
      break;
    case e1.toLowerCase():
      ergebnisTxt.innerHTML = e;
      break;
    case f1.toLowerCase():
      ergebnisTxt.innerHTML = f;
      break;
    case g1.toLowerCase():
      ergebnisTxt.innerHTML = g;
      break;
    case h1.toLowerCase():
      ergebnisTxt.innerHTML = h;
      break;
    case i1.toLowerCase():
      ergebnisTxt.innerHTML = i;
      break;
    case j1.toLowerCase():
      ergebnisTxt.innerHTML = j;
      break;
    case k1.toLowerCase():
      ergebnisTxt.innerHTML = k;
      break;
    case l1.toLowerCase():
      ergebnisTxt.innerHTML = l;
      break;
    case m1.toLowerCase():
      ergebnisTxt.innerHTML = m;
      break;
    case n1.toLowerCase():
      ergebnisTxt.innerHTML = n;
      break;
    case o1.toLowerCase():
      ergebnisTxt.innerHTML = o;
      break;
    case p1.toLowerCase():
      ergebnisTxt.innerHTML = p;
      break;

    default:
      ergebnisTxt.innerHTML = z;
  }
}

let masse = document.getElementById("masse");
let myList = document.getElementById("mylist");
let briefPost = "<b>DHL Paket 10 kg</b>" + "<br>" + "bis 120 x 60 x 60 cm";
let dhlP2 = "<b>DHL Paket 2 kg</b>" + "<br>" + "bis 60 x 30 x 15 cm";
let dhlP5 = "<b>DHL Paket 5 kg</b>" + "<br>" + "bis 120 x 60 x 60 cm";

let dhlP10 = "<b>DHL Paket 10 kg</b>" + "<br>" + "bis 120 x 60 x 60 cm";
let extra = "<b>Extra große Größe</b>";
function showtxt() {
  switch (myList.value) {
    case "0":
      masse.innerHTML = briefPost;
      break;

    case "1":
      masse.innerHTML = dhlP2;
      break;

    case "2":
      masse.innerHTML = dhlP5;
      break;

    case "3":
      masse.innerHTML = dhlP10;
      break;
  }
}
