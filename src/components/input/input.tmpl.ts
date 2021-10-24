export default
`
    <div class="input-container__input-group">
        <input type="{{ type }}" id="{{ name }}" name="{{ name }}" class="input-container__input" placeholder="{{ title }}" value="{{ value }}" />
        <label for="{{ name }}" class="input-container__label">
            <span class="input-container__required-label">*</span>
            {{title}}
        </label>
    </div>
    <div class="input-container__errors-block"></div>
    <span class="input-container__message"></span>
`