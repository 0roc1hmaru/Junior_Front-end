$(document).ready(function () {
    $(".video-link").click(function (e) {
        e.preventDefault();
        $("#someFrame").attr("src", $(this).attr("href"));
    })
});