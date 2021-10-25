export default
`
    <div class="input-container">
        <div class="input-container__input-group">
            <input type="{{ type }}" id="{{ id }}" name="{{ name }}" class="input-container__input" placeholder="{{ title }}" value="{{defaultValue}}" />
            <label for="{{ id }}" class="input-container__label">{{ title }}</label>
        </div>
        <span class="input-container__error">{{ errorMessage }}</span>
    </div>
`