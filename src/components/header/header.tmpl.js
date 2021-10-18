export default
`
    <header class="header">
        <div class="header__items">
            <i class="header__icon fa fa-paper-plane"></i>
            <p class="header__title">{{ title }}</p>
        </div>
        <div class="header__page-links">
            {{> goToError404}}
            {{> goToError500}}
        </div>
    </header>
`