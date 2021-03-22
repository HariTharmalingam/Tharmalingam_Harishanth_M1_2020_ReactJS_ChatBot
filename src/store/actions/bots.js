import axios from 'axios'

import { envoiMessage } from './chat'

export const conversaWatsonRequest = () => {
    return {
        type: 'CONVERSA_WATSON_REQUEST',
        carregando: true,
        erro: false
    }
}

export const conversaWatsonSucess = (reponses) => {
    return {
        type: 'CONVERSA_WATSON_SUCESS',
        reponses,
        carregando: false,
        erro: false
    }
}

export const conversaWatsonError = () => {
    return {
        type: 'CONVERSA_WATSON_ERROR',
        carregando: false,
        erro: true
    }
}

export const conversaWatson = ((message, context) => {
    return dispatch => {
        dispatch(conversaWatsonRequest())
        //chama o backend do watson (Firebase cloud functions)
        const url = 'https://us-central1-chatbot-em-react.cloudfunctions.net/conversa'
        axios
            .post(url, { input: message.text, context: context })
            .then((data) => {
                dispatch(conversaWatsonSucess(data))
                const msg = {
                    text: data.data.output.text[0],
                    source: 'bot'
                }
                dispatch(envoiMessage(msg))
            })
            .catch(() => dispatch(conversaWatsonError()))
    }
})


// conversaWatson(message, context)


// conversaWatsonRequest() => 
//    conversaWatsonSucess(reponse) 
//    converWatsonError()
