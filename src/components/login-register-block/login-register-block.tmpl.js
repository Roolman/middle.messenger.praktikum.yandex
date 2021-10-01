export default
`
    <div class="login-register-block">
        <h2 class="login-register-block__title">{{ title }}</h2>
        {{> (formPartialName) }}
        <div class="login-register-block__actions">
            {{> mainButton }}
            {{> secondButton }}
        </div>
    </div>
`