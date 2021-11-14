export default
`
<div data-ref="avatar" class="settings__main-avatar-container">
    {{#if chat.avatar}}
        <img src="{{chat.avatar}}" class="settings__main-avatar" crossorigin="use-credentials"/>
    {{else}}
        <img src="../static/img/chat_default.png" class="settings__main-avatar" crossorigin="use-credentials"/>
    {{/if}}
    <div class="settings__main-avatar-hover-block">
        <span class="settings__main-avatar-hover-block-title">Поменять</span>
        <span class="settings__main-avatar-hover-block-title">аватар</span>
    </div>
</div>            
<h3 class="settings__main-name">{{ chat.title }}</h3>
<div class="settings__main-info chat__users-container">
    {{#each users}}
        <div data-component="{{ this.name }}"></div>
    {{/each}}
</div>
<div class="settings__main-actions">
    <div data-component="addUsersButton"></div>
    <div data-component="deleteChatButton"></div>
</div>
`