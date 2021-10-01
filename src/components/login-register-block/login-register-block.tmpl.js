import { Button } from "../../components/button/index"
import { BUTTON_TYPES } from "../../constants"

export default
`
    <div class="login-register-block">
        <h2 class="login-register-block__title">{{ title }}</h2>
        {{ form }}
        <div class="login-register-block__actions">
            ${new Button("{{ mainActionId }}", "{{ mainActionTitle }}").template}
            ${new Button("{{ secondActionId }}", "{{ secondActionTitle }}", BUTTON_TYPES.LINK).template}
        </div>
    </div>
`