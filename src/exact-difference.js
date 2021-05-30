import {hoursToDays, millisecondsToSecond, minutesToHours, secondsToMinutes} from './conversion'

export function exactDifferenceInMilliseconds(second) {
    return first => first - second
}

export function exactDifferenceInSeconds(second) {
    return first => millisecondsToSecond(exactDifferenceInMilliseconds(first) (second))
}

export function exactDifferenceInMinutes(second) {
    return first => secondsToMinutes(exactDifferenceInSeconds(first) (second))
}

export function exactDifferenceInHours(second) {
    return first => minutesToHours(exactDifferenceInMinutes(first) (second))
}

export function exactDifferenceInDays(second) {
    return first => hoursToDays(exactDifferenceInHours(first) (second))
}