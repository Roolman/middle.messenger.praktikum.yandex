import { Header } from "../../components/header/index"

export default
`
    ${new Header().template}
    <div class="login">
       {{> loginBlock}}
    </div>
`

export const form = 
`
    <form id="{{ formId }}" class="login__form">
        {{> loginInput }}
        {{> passwordInput }}
        {{> rememberMeCheckbox }}               
    </form>
`
