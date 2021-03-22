export const envoiMessage = (message) => {
    return {
        type: 'ENVOI_MESSAGE',
        payload: { message }
    }
}