export default
`
    {{#equal type 'message'}}
        <span class="message_text-value">{{ content }}</span>
    {{/equal}}
    {{#equal type 'IMAGE'}}
        <img class="message_image-value" src="{{ value }}" />
    {{/equal}}
    <span class="message__time">{{ time }}</span>
`