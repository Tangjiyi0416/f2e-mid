$(function() {
    $("body").prepend(
        `
        <header>
            <a class="header-link" href="index.html"><span id="header-link-index">首頁</span></a>
            <div class="header-divider"></div>
            <a class="header-link" href="liver_list.html"><span id="header-link-liver-list" >Liver一覽</span></a>
            <div class="header-divider"></div>
            <a class="header-link" href="liver_picker.html"><span  id="header-link-liver-picker">Liver選擇器</span></a>
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