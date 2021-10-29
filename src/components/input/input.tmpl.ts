export default
`
    <div class="input-container__input-group">
        <input 
            data-ref="input"
            type="{{ type }}" 
            id="{{ name }}" 
            name="{{ name }}" 
            class="input-container__input" 
            placeholder="{{ title }}" 
            value="{{ value }}" 
        />
        <label for="{{ name }}" class="input-container__label">
            <span data-ref="requiredSymbol" class="input-container__required-label">*</span>
            {{title}}
        </label>
    </div>
    <div data-ref="errorsContainer" class="input-container__errors-block"></div>
    <span data-ref="messageContainer" class="input-container__message"></span>
`