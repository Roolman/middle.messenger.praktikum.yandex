import { Header } from "../../components/header/index"

export default
`
    ${new Header().template}
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
