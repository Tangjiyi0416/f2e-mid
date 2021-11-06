$(function() {
    $("body").prepend(
        `
        <header>
            <a class="header-link" href="index.html">首頁</a>
            <div class="header-divider"></div>
            <a class="header-link" href="liver_list.html">Liver一覽</a>
            <div class="header-divider"></div>
            <a class="header-link" href="liver_picker.html">Liver選擇器</a>
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