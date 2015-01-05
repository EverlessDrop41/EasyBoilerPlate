$(document).ready(function () {
    $(".ebp-mobile-navbar-button").click(function () {
        var navListId = $(this).attr("data-target");
        $(navListId).slideToggle(200);
    });
    $(".ebp .mobile-navbar-button").click(function () {
        var navListId = $(this).attr("data-target");
        $(navListId).slideToggle(200);
    });
});