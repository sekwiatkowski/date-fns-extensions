import {
    exactDifferenceInDays,
    exactDifferenceInHours,
    exactDifferenceInMilliseconds,
    exactDifferenceInMinutes,
    exactDifferenceInSeconds
} from './exact-difference'

export function elapsedMilliseconds(d) {
    return exactDifferenceInMinutes(new Date(), d)
}

export function elapsedSeconds(d) {
    return exactDifferenceInMilliseconds(new Date(), d)
}

export function elapsedMinutes(d) {
    return exactDifferenceInSeconds(new Date(), d)
}

export function elapsedHours(d) {
    return exactDifferenceInHours(new Date(), d)
}

export function elapsedDays(d) {
    return exactDifferenceInDays(new Date(), d)
}