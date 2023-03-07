import { getVoicesAsync, printVoices } from './voices';

getVoicesAsync().then((voices) => {
    printVoices(voices);
    let utterance = new SpeechSynthesisUtterance("Чтоб тебе жилось хорошо!");
    utterance.voice = voices[27];
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
})