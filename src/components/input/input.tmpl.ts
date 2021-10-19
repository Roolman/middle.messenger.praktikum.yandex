export default
`
    <div class="input-container__input-group">
        <input type="{{ type }}" id="{{ name }}" name="{{ name }}" class="input-container__input" placeholder="{{ title }}" value="" />
        <label for="{{ name }}" class="input-container__label">{{ title }}</label>
    </div>
    <span class="input-container__error">{{ errorMessage }}</span>
`