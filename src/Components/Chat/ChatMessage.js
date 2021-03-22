import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'

import { envoiMessage } from '../../store/actions/chat'
import { bots } from '../../store/actions/bots'

class ChatMessage extends Component {
    constructor(props) {
        super(props)

        this.inputEnvoiText = this.inputEnvoiText.bind(this)
        //this.props.conversaWatson("inicio", '')
    }

    inputEnvoiText(e) {
        if (e.keyCode === 13) {
            console.log(e.target.value)
            const message = {
                text: e.target.value,
                source: 'user'
            }
            let context = {}
            if (this.props.reponse.data && this.props.reponse.data.context){
                context = this.props.reponse.data.context
            }
            this.props.envoiText(message)
            //this.props.conversaWatson(message, context)
            e.target.value = ''
        }
    }

    render() {
        return (
            <div className='chat-message'>
                <hr />
                <InputGroup>
                    <Input onKeyDown={this.inputEnvoiText} placeholder='Ecrire un message' />
                    <InputGroupAddon addonType='append'>
                        <Button color='success'>Envoyer</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        envoiText: (msg) => dispatch(envoiMessage(msg)),
        //conversaWatson: (msg, context) => dispatch(conversaWatson(msg, context))
    }
}

const mapStateToProps = (state) => {
    return {
        reponse: state.watson.reponses
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessage)