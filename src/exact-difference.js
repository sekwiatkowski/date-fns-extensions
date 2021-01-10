import {hoursToDays, millisecondsToSecond, minutesToHours, secondsToMinutes} from './conversion'

export function exactDifferenceInMilliseconds(first) {
    return second => first - second
}

export function exactDifferenceInSeconds(first) {
    return second => millisecondsToSecond(exactDifferenceInMilliseconds(first) (second))
}

export function exactDifferenceInMinutes(first) {
    return second => secondsToMinutes(exactDifferenceInSeconds(first) (second))
}

export function exactDifferenceInHours(first) {
    return second => minutesToHours(exactDifferenceInMinutes(first) (second))
}

export function exactDifferenceInDays(first) {
    return second => hoursToDays(exactDifferenceInHours(first) (second))
}