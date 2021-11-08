export default
`
<div data-ref="avatar" class="profile__main-avatar-container">
    <img src="static/img/avatar_default.jpg" class="profile__main-avatar" />
    <div class="profile__main-avatar-hover-block">
        <span class="profile__main-avatar-hover-block-title">Поменять</span>
        <span class="profile__main-avatar-hover-block-title">аватар</span>
    </div>
</div>            
<h3 class="profile__main-name">Иван</h3>
<div class="profile__main-info">
    {{#each profileData}}
        <div class="profile__main-info-item">
            <span class="profile__main-info-item-title">{{ this.title }}</span>
            <span class="profile__main-info-item-value">{{ this.value }}</span>
        </div>
    {{/each}}
</div>
<div class="profile__main-actions">
    <div data-component="editDataButton"></div>
    <div data-component="changePasswordButton"></div>
    <div data-component="logoutButton"></div>
</div>
`