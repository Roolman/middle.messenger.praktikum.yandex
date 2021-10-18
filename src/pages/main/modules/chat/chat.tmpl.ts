export default
`
    <div class="chat">
        {{#if chatIsEmpty}}
            {{> emptyChat}}
        {{else}}
            <div class="chat__header">
                {{#if chat.avatar}}
                    <img class="chat__avatar-image" src="{{chat.avatar}}"/>
                {{else}}
                    <img class="chat__avatar-image" src="static/img/chat_default.png"/>
                {{/if}}
                <span class="chat__name">{{ chat.name }}</span>                
            </div>
            <div class="chat__messages">
                {{#each messages}}
                    {{chatMessage this.id this.type this.value this.time this.sentByUser}}
                {{/each}}
            </div>
            <div class="chat__input">
                <i class="chat__attach fa fa-paperclip"></i>
                <input type="text" id="chatMessage" name="chatMessage" class="chat__input-text" placeholder="Сообщение"/>
                {{> sendButton}}
            </div>
            </div>
        {{/if}}
    </div>
`

export const emptyChat = 
`
    <div class="chat chat_empty">
        <span class="chat__empty-text">Выберите чат чтобы отправить сообщение</span>
    </div>
`