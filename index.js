// Dom elementleri
let main = document.getElementById("main")
let girisButonu = document.getElementById("giris-buton")
let checkBox = document.getElementById("hatirla")
let inputBox = document.getElementById("ad")



if (Cookies.get("ad")) {
  inputBox.value = Cookies.get("ad")
}


let girisHandle = () => {
  Cookies.set("girisAdi" , inputBox.value.toString(),{ expires: 100 })
  if (checkBox.checked) {
    Cookies.set("ad", inputBox.value.toString(),{ expires: 100 });
  }
  else {
    if (Cookies.get("ad")) {
      Cookies.remove("ad");
    }
    
  }
  console.log((Cookies.get("ad")));
  window.open("giris.html","_self")
}


girisButonu.onclick = girisHandle