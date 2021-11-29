export default
`
    <div class="chats__controls">
        <div class="chats__actions">
            <div data-component="addChatButton"></div>
            <a data-ref="profileLink" href="a" class="chats__profile-link">
                Профиль
                <i class="fa fa-chevron-right"></i>
            </a>                   
        </div>
        <div data-component="searchInput"></div>
    </div>
    <ul class="chats__chats-list">
        {{#each chats}}
            <div data-component="{{ this.name }}"></div>
        {{/each}}
    </ul>
`