import wrapper from '../wrapper'

export const add = wrapper( ( nums: Array<number> ) => {
    return nums.reduce((sum, current) => sum + current);
} )

export const subtract = wrapper( ( nums: Array<number> ) => {
    return nums.reduce((sum, current) => sum - current);
} )

export const multiply = wrapper( ( nums: Array<number> ) => {
    return nums.reduce((sum, current) => sum * current);
} )

export const divide = wrapper( ( nums: Array<number> ) => {
    return nums.reduce((sum, current) => sum / current);
} )


