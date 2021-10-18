export default
`
<div class="login-register-block">
    <div class="login-register-block__container">
        <h1 class="login-register-block__title">{{ title }}</h1>
        {{> (formPartialName) }}
        <div class="login-register-block__actions">
            {{> mainButton }}
            {{> secondButton }}
        </div>
    </div>
</div>
`