export default
`
{{#if user}}
    <div data-ref="avatarContainer" class="settings__main-avatar-container">
        <div data-component="avatar"></div>
        <div class="settings__main-avatar-hover-block">
            <span class="settings__main-avatar-hover-block-title">Поменять</span>
            <span class="settings__main-avatar-hover-block-title">аватар</span>
        </div>
    </div>            
    <h3 class="settings__main-name">{{ user.first_name }} {{ user.second_name }}</h3>
    <div class="settings__main-info">
        <div class="profile__main-info-item">
            <span class="profile__main-info-item-title">Почта</span>
            <span class="profile__main-info-item-value">{{ user.email }}</span>
        </div>
        <div class="profile__main-info-item">
            <span class="profile__main-info-item-title">Логин</span>
            <span class="profile__main-info-item-value">{{ user.login }}</span>
        </div>
        <div class="profile__main-info-item">
            <span class="profile__main-info-item-title">Имя</span>
            <span class="profile__main-info-item-value">{{ user.first_name }}</span>
        </div>
        <div class="profile__main-info-item">
            <span class="profile__main-info-item-title">Фамиля</span>
            <span class="profile__main-info-item-value">{{ user.second_name }}</span>
        </div>
        <div class="profile__main-info-item">
            <span class="profile__main-info-item-title">Имя в чате</span>
            <span class="profile__main-info-item-value">{{ user.login }}</span>
        </div>
        <div class="profile__main-info-item">
            <span class="profile__main-info-item-title">Телефон</span>
            <span class="profile__main-info-item-value">{{ user.phone }}</span>
        </div>                                        
    </div>
    <div class="settings__main-actions">
        <div data-component="editDataButton"></div>
        <div data-component="changePasswordButton"></div>
        <div data-component="logoutButton"></div>
    </div>
{{/if}}
`