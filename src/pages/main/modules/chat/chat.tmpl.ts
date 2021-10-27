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
        <div class="chat__messages">
            {{#unless messages}}
                <h4>Сообщений нет</h4>
            {{/unless}}
        </div>
        <div class="chat__input">
            <i class="chat__attach fa fa-paperclip"></i>
        </div>    
    {{else}}
        {{> emptyChat}}
    {{/if}}
`

export const emptyChat = `
    <span class="chat__empty-text">Выберите чат чтобы отправить сообщение</span>
`