export default 
`
    <button id="{{ id }}" class="{{ buttonClass }}">
        {{ title }}
        {{#if iconClass}}
            <i class="{{ iconClass }}"></i>
        {{/if}}
    </button>
`