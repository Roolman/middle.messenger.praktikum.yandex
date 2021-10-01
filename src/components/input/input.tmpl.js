export default
`
    <div class="input-container">
        <input type="{{ type }}" id="{{ id }}" name="{{ name }}" class="input-container__input" placeholder="{{ title }}" />
        <p class="input-container__error">{{ errorMessage }}</p>
        <label for="{{ id }}" class="input-container__label">{{ title }}</label>
    </div>
`