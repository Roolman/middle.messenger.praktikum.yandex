export default
`
    <div class="change-avatar">
        <div class="change-avatar__elements">
            <h3>Загрузите файл</h3>
            <label for="avatar" class="change-avatar__file-upload-label">
                Выберите файл
            </label>
            <input id="avatar" name="avatar" type="file" />                
            {{> applyButton}}
        </div>
    </div>
`