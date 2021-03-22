import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import ChatConversation from './ChatConversation'
import ChatMessage from './ChatMessage'

class Chatbot extends Component {
    render() {
        return (
            <div className='chatbot'>
                <div className='chat-contenu'>
                    <ChatHeader />
                    <ChatConversation />
                    <ChatMessage />
                </div>
            </div>
        )
    }
}

export default Chatbot