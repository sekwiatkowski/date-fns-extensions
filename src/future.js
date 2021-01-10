export function inMilliseconds(milliseconds) {
    return addMilliseconds(milliseconds) (new Date())
}

export function inSeconds(seconds) {
    return inMilliseconds(secondsToMilliseconds(seconds))
}

export function inMinutes(minutes) {
    return inSeconds(minutesToSeconds(minutes))
}

export function inHours(hours) {
    return inMinutes(hoursToMinutes(hours))
}

export function inDays(days) {
    return inHours(daysToHours(days))
}