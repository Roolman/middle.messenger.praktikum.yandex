import { Header } from "../../components/header/index"
import { LoginRegisterBlock } from "../../components/login-register-block/index"

const title = "{{ blockTitle }}"
const form = 
`
    <h3>Здесь будет форма</h3>
`
const mainActionTitle = "{{ loginButtonTitle }}"
const mainActionId = "{{ loginActionId }}" 
const secondActionTitle = "{{ goToRegisterButtonTitle }}"
const secondActionId = "{{ goToRegisterActionId }}"

export default
`
    ${new Header().template}
    <div class="login">
        ${new LoginRegisterBlock(title, form, mainActionTitle, mainActionId, secondActionTitle, secondActionId).template}
    </div>
`
