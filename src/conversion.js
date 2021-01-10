//#region Larger unit
export function millisecondsToSecond(ms) {
    return ms / 1_000
}

export function secondsToMinutes(seconds) {
    return seconds / 60
}

export function minutesToHours(minutes) {
    return minutes / 60
}

export function hoursToDays(hours) {
    return hours / 24
}
//#endregion

//region Smaller unit
export function secondsToMilliseconds(seconds) {
    return seconds * 1_000
}

export function minutesToSeconds(minutes) {
    return minutes * 60
}

export function hoursToMinutes(hours) {
    return hours * 60
}

export function daysToHours(days) {
    return days * 24
}
//endregion