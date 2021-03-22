import { combineReducers } from "redux";

import chat from './chat'
import bots from './bots'

const rootReducer = combineReducers({
    chat,
    bots
})

export default rootReducer