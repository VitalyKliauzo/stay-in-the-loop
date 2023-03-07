document.addEventListener("DOMContentLoaded", (event) => {
    navigator.getBattery()
        .then(batteryManager => {
            batteryManager.onlevelchange = (event) => {
                const level = event.currentTarget.level * 100;
                const charge = level <= 20;
                const unplug = level >= 80;
                const charging = event.currentTarget.charging;
                chrome.action.setBadgeText({
                    text: event.currentTarget.level !== 1 ? level.toString() : ''
                });
                //if (!charging && charge || charging && unplug) {
                    chrome.notifications.create('NOTFICATION_ID', {
                        type: 'basic',
                        iconUrl: 'images/icon-48.png',
                        title: 'Charge Battery Message',
                        message: charge ? 'CHARGE ME' : 'UNPLUG ME',
                        priority: 2
                    })
               // }
            }
        })
});
document.addEventListener('unload', (event) => {
    alert('unload');
 });