let kurabiyeMetni = document.getElementById("kurabiyeler");
let arttirmaButonu = document.getElementById("arttir");
let azaltmaButonu = document.getElementById("azalt");
let girisMetni = document.getElementById("girisMetni")
let geciciKurabiyeler = 0;


  girisMetni.textContent = "Hosgeldiniz " + Cookies.get("girisAdi") ;

if (Cookies.get("kurabiye")) {
  geciciKurabiyeler = Number(Cookies.get("kurabiye").toString());
  
}
else {
  Cookies.set("kurabiye", "0",{ expires: 100 });
  geciciKurabiyeler = 0
}


kurabiyeMetni.innerHTML = "Toplam " + "<span style=\"color : blue\">" + geciciKurabiyeler.toString() + "</span>" + " kurabiyeniz var.";

let arttirmaHandler = () => {
  geciciKurabiyeler++;
  Cookies.set("kurabiye" , geciciKurabiyeler.toString(),{ expires: 100 });
  kurabiyeMetni.innerHTML = "Toplam " + "<span style=\"color : blue\">" + geciciKurabiyeler.toString() + "</span>" + " kurabiyeniz var.";

}

let azaltmaHandler = () => {
  if (geciciKurabiyeler > 0 ) {
    
  
  geciciKurabiyeler--;
  Cookies.set("kurabiye" , geciciKurabiyeler.toString(),{ expires: 100 });
  kurabiyeMetni.innerHTML = "Toplam " + "<span style=\"color : blue\">" + geciciKurabiyeler.toString() + "</span>" + " kurabiyeniz var.";
  }
}

arttirmaButonu.onclick = arttirmaHandler ;
azaltmaButonu.onclick = azaltmaHandler ;