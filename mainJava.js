// Sprawdzanie czy urządzenie jest mobilne
function zadzwon() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = "tel:+48123456789";
  } else {
    alert("Niestety funkcja dzwonienia jest dostępna tylko na urządzenia mobilne.");
  }
};