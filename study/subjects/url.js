function ChangeUrl(page, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Page: page, Url: url };
        history.pushState(obj, obj.Page, obj.Url);
    } else {
        alert("Browser does not support HTML5.");
    }
}
$(function () {
    $("#button1").click(function () {
        ChangeUrl('Page1', 'Page1.htm');
    });
    $("#button2").click(function () {
        ChangeUrl('Page2', 'Page2.htm');
    });
    $("#button3").click(function () {
        ChangeUrl('Page3', 'Page3.htm');
    });
});