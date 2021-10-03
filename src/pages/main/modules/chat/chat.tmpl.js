export default
`
    <div class="chat">
        {{#if chatIsEmpty}}
            {{> emptyChat}}
        {{else}}
            <span>Здесь будет чат</span>
        {{/if}}
    </div>
`

export const emptyChat = 
`
    <div class="chat chat_empty">
        <span class="chat__empty-text">Выберите чат чтобы отправить сообщение</span>
    </div>
`