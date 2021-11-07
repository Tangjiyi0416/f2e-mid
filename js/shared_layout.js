$(function() {
    $("body").prepend(
        `
        <header>
            <a class="header-link" id="header-link-index" href="index.html">&nbsp&nbsp首頁&nbsp&nbsp</a>
            <div class="header-divider"></div>
            <a class="header-link" id="header-link-liver-list" href="liver_list.html">Liver一覽</a>
            <div class="header-divider"></div>
            <a class="header-link" id="header-link-liver-picker" href="liver_picker.html">Liver選擇器</a>
        </header>
        `
    );
    $("body").append(
        `
        <footer>
            <span>©︎ANYCOLOR Inc.</span>
        </footer>
        `
    );
});