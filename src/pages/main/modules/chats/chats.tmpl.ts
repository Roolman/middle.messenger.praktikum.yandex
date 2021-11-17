export default
`
    <div class="chats__controls">
        <div class="chats__actions">
            <div data-component="addChatButton"></div>
            <a data-ref="profileLink" href="" class="chats__profile-link">
                Профиль
                <i class="fa fa-chevron-right"></i>
            </a>                   
        </div>
        <div class="chats__search">
            <input 
                type="search" 
                id="chatSearch"
                name="chatSearch" 
                class="chats__search__input" 
                placeholder="Поиск"
            />
            <label for="chatSearch" class="chats__search__label">
                <i class="fa fa-search"></i>
                Поиск
            </label>
        </div>
    </div>
    <ul class="chats__chats-list">
        {{#each chats}}
            <div data-component="{{ this.name }}"></div>
        {{/each}}
    </ul>
`