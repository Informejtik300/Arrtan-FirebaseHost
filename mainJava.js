// Sprawdzanie czy urządzenie jest mobilne
function zadzwon() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = "tel:+48123456789";
  } else {
    alert("Niestety funkcja dzwonienia jest dostępna tylko na urządzenia mobilne.");
  }
};

//Zmiana motywu
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
themeToggle.addEventListener('change', function (){
  body.classList.toggle("bodyDark", themeToggle.checked);
  if(themeToggle.checked){
    document.getElementById('phone-ico').href = "Zdjecia/Systemowe/phone-call-white.svg";
    document.getElementById('mail-box-ico').href = "Zdjecia/Systemowe/email-box-white.svg";
    document.getElementById('facebook-ico').href = "Zdjecia/Systemowe/facebook-white.svg";
    document.getElementById('themeIcon').href = "Zdjecia/Systemowe/dark-bright-white.svg";
    document.getElementById('baner').href = "Zdjecia/Systemowe/banerArtan(szary).png";
    console.log("Ciemny motyw włączony");
  } else {
    document.getElementById('phone-ico').href = "Zdjecia/Systemowe/phone-call-black.svg";
    document.getElementById('mail-box-ico').href = "Zdjecia/Systemowe/email-box-black.svg";
    document.getElementById('facebook-ico').href = "Zdjecia/Systemowe/facebook-black.svg";
    document.getElementById('themeIcon').href = "Zdjecia/Systemowe/dark-bright-black.svg";
    document.getElementById('baner').href = "Zdjecia/Systemowe/banerArtan(szary).png";
    console.log("Jasny motyw włączony");
  }
});