
export default
`
    {{> header}}
    {{> registerBlock}}
`

export const form = 
`
    <form id="{{ formId }}" class="register__form">
        {{> emailInput }}
        {{> loginInput }}
        {{> firstNameInput }}
        {{> secondNameInput }}               
        {{> phoneInput }}               
        {{> passwordInput }}    
        {{> passwordCheckInput }}                          
    </form>
`
