import React, { Component } from 'react'
import { Alert, Badge } from 'reactstrap'
import { connect } from 'react-redux'

class ChatConversation extends Component {

    renderMessage(msg, k) {
        return (
            <div key={k}>
                {
                    msg.source === 'user' && <span>
                        <Badge color='primary'>Vous</Badge>
                        <Alert color='primary'>{msg.text}</Alert>
                    </span>
                }

                {
                    msg.source === 'bot' && <span>
                        <Badge color='warning'>Bot</Badge>
                        <Alert color='warning'>{msg.text}</Alert>
                    </span>
                }
            </div>
        )
    }

    render() {
        return (
            <div className='chat-conversation'>
                {
                    Object.keys(this.props.messages).map(key => {
                        return this.renderMessage(this.props.messages[key], key)
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages
    }
}

export default connect(mapStateToProps, null)(ChatConversation)