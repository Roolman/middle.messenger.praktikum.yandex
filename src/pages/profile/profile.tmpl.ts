export default
`
    <div data-ref="profileReturn" class="settings__return">
        <div data-component="returnButton"></div>
    </div>
    {{#if profileIsEditable}}
        {{#if changePasswordFormIsShown}}
            <div data-component="passwordEdit"></div>
        {{else}}
            <div data-component="profileEdit"></div>
        {{/if}}
    {{else}}
        <div data-component="profileView"></div>
    {{/if}}
    <div data-component="сhangeAvatar"></div>
`