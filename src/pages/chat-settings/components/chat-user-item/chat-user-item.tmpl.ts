export default
`
<div class="chat__user-main-info">
    {{#if user.avatar}}
        <img src="{{user.avatar}}" class="chat__user-avatar" crossorigin="use-credentials"/>
    {{else}}
        <img src="../static/img/avatar_default.jpg" class="chat__user-avatar" crossorigin="use-credentials"/>
    {{/if}}
    <div class="chat__user-name">
        <span>{{user.first_name}} {{user.second_name}}</span>
    </div>
    <div class="chat__user-login">
        <span>{{user.login}}</span>
    </div>
</div>
{{#unless isChatCreator}}
<div class="chat__user-delete">
    <i data-ref="deleteElement" class="fa fa-times"></i>
</div>
{{/unless}}
`