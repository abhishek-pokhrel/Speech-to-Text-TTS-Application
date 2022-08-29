let microphoneButton = document.querySelector('.voice');
let speakButton = document.querySelector('.speak');
let textArea = document.querySelector('#txtarea');

let clearButton = document.querySelector('.eraser');

microphoneButton.addEventListener('click', ()=> {
    let recognition = new webkitSpeechRecognition()
    recognition.lang = 'en-GB'
    recognition.addEventListener('result', (e) => {
        textArea.value = e.results[0][0].transcript
    })
    
    recognition.start();
})


clearButton.addEventListener('click', ()=>{
    textArea.value = '';
})


speakButton.addEventListener('click', ()=>{
    var synthesis = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance("Hello World");
    utterance.text = textArea.value;
    synthesis.speak(utterance);
})
