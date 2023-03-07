export const getVoicesAsync = () => new Promise((resolve, reject)=> {
    let voices = [];
    
    const descriptor = setInterval(() => {
        voices = window.speechSynthesis.getVoices();
        if (voices.length) {
            clearInterval(descriptor);
            resolve(voices);
        }
    }, 10);

});

export const printVoices = voices => {
    voices.forEach((voice, index) => {
        console.log(`${index} ${voice.lang} - ${voice.name} ${voice.ocalService} ${voice.localService} ${voice.voiceURI}`);
    });
};