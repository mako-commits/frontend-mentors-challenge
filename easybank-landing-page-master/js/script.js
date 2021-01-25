$(function () {

    $("body").on("click", "#hamburger", function () {
        $(this).css("display", "none");
        $("#close").css("display", "block");
        $("nav").fadeIn(300, function () {
            $(this).fadeIn();
        }).css({
            "position": "relative",
            "z-index": "5"
        });
        $("main").css({
            "background": "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0.5) 25%, transparent 100%)"
        });
    });

    $("body").on("click", "#close", function () {
        $(this).css("display", "none");
        $("#hamburger").css("display", "block");
        $("nav").fadeOut(300, function () {
            $(this).fadeOut();
        });
        $("main").css({
            "background": "none"
        });
    });
});