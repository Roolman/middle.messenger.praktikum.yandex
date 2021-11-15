export default
`
    {{#if_eq type 'message'}}
        <span class="message_text-value">{{ content }}</span>
    {{/if_eq}}
    {{#if_eq type 'IMAGE'}}
        <img class="message_image-value" src="{{ value }}" />
    {{/if_eq}}
    <span class="message__time">{{ time }}</span>
`