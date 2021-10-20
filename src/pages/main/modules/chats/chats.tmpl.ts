export default
`
    <div class="chats__controls">
        <div class="chats__actions">
            <a href="" class="chats__profile-link">
                Профиль
                <i class="fa fa-chevron-right"></i>
            </a>                   
        </div>
        <div class="chats__search">
            <input type="search" id="chatSearch" name="chatSearch" class="chats__search__input" placeholder="Поиск"/>
            <label for="chatSearch" class="chats__search__label">
                <i class="fa fa-search"></i>
                Поиск
            </label>
        </div>
    </div>
    <ul class="chats__chats-list">
        {{#each chats}}
            <li class="chats__chat-container">
                <div class="chats__chat-avatar">
                    {{#if this.avatar}}
                        <img class="chats__chat-avatar-image" src="{{this.avatar}}"/>
                    {{else}}
                        <img class="chats__chat-avatar-image" src="static/img/chat_default.png"/>
                    {{/if}}
                </div>
                <div class="chats__chat-info-group">
                    <div class="chats__chat-message">
                        <span class="chats__chat-name">{{ this.name }}</span>
                        <span class="chats__chat-last-message-time">
                            {{ this.lastMessageTime }}
                        </span>
                    </div>
                    <div class="chats__chat-info">
                        <span class="chats__chat-last-message">
                            {{#if this.lastMessageSentByUser}}
                                <span class="chats__chat-last-message-sent-by-user">Вы :</span>
                            {{/if}}
                            {{ this.lastMessage }}
                        </span>
                        {{#if this.unreadCount}}
                            <div class="chats__chat-unread-count">
                                {{ this.unreadCount }}
                            </div>
                        {{/if}}
                    </div>                    
                </div>
            </li>
        {{/each}}
    </ul>
`