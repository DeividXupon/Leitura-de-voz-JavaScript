const visualTexto = document.querySelector(".valor-dito");
window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    const chute = e.results[0][0].transcript;
    visualTexto.innerHTML = chute;

    validaValorChute(chute);
}

recognition.addEventListener('end', () => {
    recognition.start();
} );