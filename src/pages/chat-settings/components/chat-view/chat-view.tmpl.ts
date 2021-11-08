export default
`
<div data-ref="avatar" class="settings__main-avatar-container">
    <img src="../static/img/chat_default.png" class="settings__main-avatar" />
    <div class="settings__main-avatar-hover-block">
        <span class="settings__main-avatar-hover-block-title">Поменять</span>
        <span class="settings__main-avatar-hover-block-title">аватар</span>
    </div>
</div>            
<h3 class="settings__main-name">{{ chat.name }}</h3>
<div class="settings__main-info">
    <span>Список пользователей</span>
</div>
<div class="settings__main-actions">
    <div data-component="addUsersButton"></div>
    <div data-component="editDataButton"></div>
    <div data-component="deleteChatButton"></div>
</div>
`