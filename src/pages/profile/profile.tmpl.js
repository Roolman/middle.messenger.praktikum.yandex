export default
`
    <div class="profile">
        <div class="profile__return">
            {{> returnButton}}
        </div>
        <div class="profile__main">
            {{#unless profileIsEditable}}
                <div class="profile__main-avatar-container">
                    <img src="static/img/avatar_default.jpg" class="profile__main-avatar" />
                    <div class="profile__main-avatar-hover-block">
                        <span class="profile__main-avatar-hover-block-title">Поменять</span>
                        <span class="profile__main-avatar-hover-block-title">аватар</span>
                    </div>
                </div>            
                <h3 class="profile__main-name">Иван</h3>
            {{/unless}}
            <div class="profile__main-info">
                {{#if profileIsEditable}}
                    {{#if changePasswordFormIsShown}}
                        <form id={{ passwordChangeFormName }} name={{ passwordChangeFormName }}>
                            {{profileInput 'oldPassword' 'Старый пароль' 'password' 'Введите старый пароль' ''}}
                            {{profileInput 'newPassword' 'Новый пароль' 'password' 'Пароли не совпадают' ''}}
                        </form>                    
                    {{else}}
                        <form id={{ profileFormName }} name={{ profileFormName }}>
                            {{#each profileData}}
                                {{profileInput this.name this.title this.type this.errorMessage this.value}}
                            {{/each}}
                        </form>
                    {{/if}}
                {{else}}
                    {{#each profileData}}
                        <div class="profile__main-info-item">
                            <span class="profile__main-info-item-title">{{ this.title }}</span>
                            <span class="profile__main-info-item-value">{{ this.value }}</span>
                        </div>
                    {{/each}}
                {{/if}}
            </div>
            <div class="profile__main-actions">
                {{#if profileIsEditable}}
                    {{> profileSaveButton}}
                {{else}}
                    {{> editDataButton}}
                    {{> changePasswordButton}}
                    {{> logoutButton}}
                {{/if}}
            </div>
        </div>
    </div>
`