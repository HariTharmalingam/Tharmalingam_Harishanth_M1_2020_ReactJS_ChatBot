const INITIAL_STATE = {
    messages : []
}

export default function chat(state = INITIAL_STATE, action = {}) {
    if (action.type === 'ENVOI_MESSAGE'){
        return {
            messages: [...state.messages, action.payload.message]
        }
    } else {
        return state
    }
}