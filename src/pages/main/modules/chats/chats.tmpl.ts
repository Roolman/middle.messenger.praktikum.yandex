export default
`
    <div class="chats__controls">
        <div data-ref="chatsActions" class="chats__actions">
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
    <ul data-ref="chatsContainer" class="chats__chats-list">
    </ul>
`