export default
`
<h3>Добавить пользователей</h3>
<div data-ref="seclectedUsersContainer" class="add-chat__selected-users">
    {{#each selectedUsers}}
        <div class="add-chat__selected-user-container">
            <div class="add-chat__selected-user">
                <span>{{this.login}}</span>
                <div class="add-chat__selected-user-cancel-icon">
                    <i class="fa fa-times"></i>
                </div>
            </div>
        </div>
    {{/each}}
</div>
<div data-component="userNameInput"></div>
<div class="add-chat__users-list">
    {{#each fetchedUsers}}
        <div data-component="{{ this.name }}"></div>
    {{/each}}
</div>
<div data-component="nextButton"></div>
`