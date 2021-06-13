export const utilService = {
    getRandomInt,
    millisToMinsSecs,
    makeId,
    saveToStorage,
    loadFromStorage,
    removeFromStorage
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

function millisToMinsSecs(millis) {
    var mins = Math.floor(millis / 60000)
    var secs = ((millis % 60000) / 1000).toFixed(0)
    return (
        secs === 60 ?
            (mins + 1) + ":00"
            : mins + ":" + (secs < 10 ? "0" : "") + secs
    )
}

function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function saveToStorage(key, val) {
    const str = JSON.stringify(val)
    localStorage.setItem(key, str)
}
function loadFromStorage(key) {
    const str = localStorage.getItem(key)
    return JSON.parse(str)
}
function removeFromStorage(key) {
    localStorage.removeItem(key)
}