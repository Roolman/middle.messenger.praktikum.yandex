export default
`
<div data-ref="avatar" class="settings__main-avatar-container">
    <img src="static/img/avatar_default.jpg" class="settings__main-avatar" />
    <div class="settings__main-avatar-hover-block">
        <span class="settings__main-avatar-hover-block-title">Поменять</span>
        <span class="settings__main-avatar-hover-block-title">аватар</span>
    </div>
</div>            
<h3 class="settings__main-name">Иван</h3>
<div class="settings__main-info">
    {{#each profileData}}
        <div class="profile__main-info-item">
            <span class="profile__main-info-item-title">{{ this.title }}</span>
            <span class="profile__main-info-item-value">{{ this.value }}</span>
        </div>
    {{/each}}
</div>
<div class="settings__main-actions">
    <div data-component="editDataButton"></div>
    <div data-component="changePasswordButton"></div>
    <div data-component="logoutButton"></div>
</div>
`