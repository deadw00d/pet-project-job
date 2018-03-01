import {TOGGLE_SHOW_DAY, TOGGLE_SHOW_MONTH, TOGGLE_SHOW_YEAR, CLEAR} from "../consts/actionTypes";


export const toggleShowDay = () => new Object({type: TOGGLE_SHOW_DAY})

export const toggleShowMonth = () => new Object({type: TOGGLE_SHOW_MONTH})

export const toggleShowYear = () => new Object({type: TOGGLE_SHOW_YEAR})

export const clear = () => new Object({type: CLEAR})