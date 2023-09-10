function gmail(a){ // function works which is recently written
  return a.split("@",1).toString();
}

function capitalize(name) {
  return name.charAt(0).toUpperCase()+ name.substring(1);
}

let words = "Manikandan is typing";
let w = words.split(" ");

for (i=0;i<w.length;i++) {
  w[i] = w[i][0].toUpperCase() + w[i].substring(1);
}
console.log(w.join(' '));






