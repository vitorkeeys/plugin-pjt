
document.getElementById("btnnoti").addEventListener("click", function() {
    navigator.notification.alert("Isto é uma mensagem", null, "Mensagem", "OK");
});

document.getElementById("btnbarulho").addEventListener("click", function() {
    navigator.notification.beep(5);
});

document.getElementById("btnvibrar").addEventListener("click", function() {
    navigator.vibrate(3000);
});
    