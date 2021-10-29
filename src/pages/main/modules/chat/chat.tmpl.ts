export default
`
    {{#if id}}
        <div class="chat__header">
            {{#if avatar}}
                <img class="chat__avatar-image" src="{{avatar}}"/>
            {{else}}
                <img class="chat__avatar-image" src="static/img/chat_default.png"/>
            {{/if}}
            <span class="chat__name">{{ name }}</span>                
        </div>
        <div data-ref="messagesContainer" class="chat__messages">
            {{#unless messagesComponents}}
                <h4>Сообщений нет</h4>
            {{/unless}}
            {{#each messagesComponents}}
                <div data-component="{{ this.name }}"></div>
            {{/each}}
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