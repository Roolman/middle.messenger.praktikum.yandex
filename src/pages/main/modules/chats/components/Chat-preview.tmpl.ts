export default
`
    <div class="chats__chat-avatar">
        {{#if avatar}}
            <img class="chats__chat-avatar-image" src="{{avatar}}"/>
        {{else}}
            <img class="chats__chat-avatar-image" src="static/img/chat_default.png"/>
        {{/if}}
    </div>
    <div class="chats__chat-info-group">
        <div class="chats__chat-message">
            <span class="chats__chat-name">{{ name }}</span>
            <span class="chats__chat-last-message-time">
                {{ lastMessageTimeShort }}
            </span>
        </div>
        <div class="chats__chat-info">
            <span class="chats__chat-last-message">
                {{#if lastMessageSentByUser}}
                    <span class="chats__chat-last-message-sent-by-user">Вы :</span>
                {{/if}}
                {{ lastMessage }}
            </span>
            {{#if unreadCount}}
                <div class="chats__chat-unread-count">
                    {{ unreadCount }}
                </div>
            {{/if}}
        </div>                    
    </div>
`