import {
    exactDifferenceInDays,
    exactDifferenceInHours,
    exactDifferenceInMilliseconds,
    exactDifferenceInMinutes,
    exactDifferenceInSeconds
} from './exact-difference'

export const elapsedMilliseconds = exactDifferenceInMilliseconds(new Date())

export const elapsedSeconds = exactDifferenceInSeconds(new Date())

export const elapsedMinutes = exactDifferenceInMinutes(new Date())

export const elapsedHours = exactDifferenceInHours(new Date())

export const elapsedDays = exactDifferenceInDays(new Date())