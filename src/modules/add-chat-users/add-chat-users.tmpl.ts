const addChatUsersTemplate = `
<h3>Добавить пользователей</h3>
<ul data-ref="seclectedUsersContainer" class="add-chat__selected-users">
    {{#each selectedUsers}}
        <li class="add-chat__selected-user-container">
            <div class="add-chat__selected-user">
                <span>{{this.login}}</span>
                <div class="add-chat__selected-user-cancel-icon">
                    <i class="fa fa-times"></i>
                </div>
            </div>
        </li>
    {{/each}}
</ul>
<div data-component="userNameInput"></div>
<li class="add-chat__users-list">
    {{#each fetchedUsers}}
        <div data-component="{{ this.name }}"></div>
    {{/each}}
</li>
<div data-component="nextButton"></div>
`

export default
`
{{#if isModal}}
    <div class="modal-content">
        ${addChatUsersTemplate}
    </div>
{{else}}
    ${addChatUsersTemplate}
{{/if}}
`