export default
`
    <div class="chats__chat-avatar">
        <div data-component="avatar"></div>
    </div>
    {{#if last_message}}
        <div class="chats__chat-info-group chats__chat-no-last-message">
            <div class="chats__chat-message">
                <span class="chats__chat-name">{{ title }}</span>
                <span class="chats__chat-last-message-time">
                    {{ lastMessageTimeShort }}
                </span>
            </div>
            <div class="chats__chat-info">
                <span class="chats__chat-last-message">
                    {{#if lastMessageSentByUser}}
                        <span class="chats__chat-last-message-sent-by-user">Вы:</span>
                    {{/if}}
                    {{ last_message.content }}
                </span>
                {{#if unread_count}}
                    <div class="chats__chat-unread-count">
                        {{ unread_count }}
                    </div>
                {{/if}}
            </div> 
        </div>
    {{#else}}
        <div class="chats__chat-info-group chats__chat-no-last-message">
            <div class="chats__chat-message">
                <span class="chats__chat-name">{{ title }}</span>
            </div>
        </div>
    {{/if}}               
`