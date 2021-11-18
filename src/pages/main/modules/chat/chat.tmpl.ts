export default
`
    {{#if id}}
        <div data-ref="chatHeader" class="chat__header">
            <div class="chat__header-chat-info">
                {{#if avatar}}
                <img class="chat__avatar-image" src="{{avatar}}" crossorigin="use-credentials"/>
                {{else}}
                    <img 
                        class="chat__avatar-image" 
                        src="static/img/chat_default.png" 
                        crossorigin="use-credentials"
                    />
                {{/if}}
                <span class="chat__name">{{ title }}</span>   
            </div>
            <div data-component="openChatSettingsButton"></div>             
        </div>
        <div data-ref="messagesContainer" class="chat__messages">
            {{#unless messagesComponents}}
                <div class="chat__messages-no-messages">Отправьте первое сообщение</div>
            {{/unless}}
            {{#if messagesComponents}}
                {{#unless allMessagesLoaded}}
                    <div 
                        data-ref="loadMoreButton" 
                        class="chat__messages-load-more"
                    >
                        Загрузить еще
                    </div>
                {{/unless}}
                {{#each messagesComponents}}
                    <div data-component="{{ this.name }}"></div>
                {{/each}}
            {{/if}}
        </div>
        <div data-ref="chatInput" class="chat__input">
            <i class="chat__attach fa fa-paperclip"></i>
            <div data-component="sendForm"></div>
            <div data-component="sendButton"></div>
        </div>    
    {{else}}
        {{> emptyChat}}
    {{/if}}
`

export const emptyChat = `
    <span class="chat__empty-text">Выберите чат чтобы отправить сообщение</span>
`