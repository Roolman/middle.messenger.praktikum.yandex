export default
`
    {{> header}}
    {{> loginBlock}}
`

export const form = 
`
    <form id="{{ formId }}" class="login__form">
        {{> loginInput }}
        {{> passwordInput }}
        {{> rememberMeCheckbox }}               
    </form>
`
