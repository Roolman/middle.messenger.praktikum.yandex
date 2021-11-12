export default
`
    <div data-ref="block" class="modal-content">
        <h3>{{ headerTitle }}</h3>
        <label data-ref="selectFileLabel" for="avatar" class="change-avatar__file-upload-label">
            Выберите файл
        </label>
        <input data-ref="fileInput" id="avatar" name="avatar" type="file" accept="image/*" />   
        <div data-component="applyButton"></div>             
    </div>
`