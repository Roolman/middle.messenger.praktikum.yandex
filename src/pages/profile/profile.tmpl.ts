export default
`
    <div data-ref="profileReturn" class="profile__return">
    </div>
    <div class="profile__main">
        {{#unless profileIsEditable}}
            <div data-ref="avatar" class="profile__main-avatar-container">
                <img src="static/img/avatar_default.jpg" class="profile__main-avatar" />
                <div class="profile__main-avatar-hover-block">
                    <span class="profile__main-avatar-hover-block-title">Поменять</span>
                    <span class="profile__main-avatar-hover-block-title">аватар</span>
                </div>
            </div>            
            <h3 class="profile__main-name">Иван</h3>
        {{/unless}}
        <div data-ref="profileMainInfo" class="profile__main-info">
            {{#unless profileIsEditable}}
                {{#each profileData}}
                    <div class="profile__main-info-item">
                        <span class="profile__main-info-item-title">{{ this.title }}</span>
                        <span class="profile__main-info-item-value">{{ this.value }}</span>
                    </div>
                {{/each}}
            {{/unless}}
        </div>
        <div data-ref="profileActions" class="profile__main-actions">
        </div>
    </div>
`