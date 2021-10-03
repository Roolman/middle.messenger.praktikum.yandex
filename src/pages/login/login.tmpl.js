import { Header } from "../../components/header/index"

export default
`
    ${new Header().template}
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
