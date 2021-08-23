function showabout() {
    $("#middle").css("opacity", "0");
    $("#work").css("opacity", "0");
    $("#about").css("opacity", "0");
    $("#contact").css("opacity", "0");

    $("#about_container").css("display", "inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideInLeft");
    }, 800);
}
function closeabout() {
    $("#middle").css("opacity", "100");
    $("#work").css("opacity", "100");
    $("#about").css("opacity", "100");
    $("#contact").css("opacity", "100");

    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display", "none");
    }, 800);
}
function showwork() {
    $("#middle").css("opacity", "0");
    $("#work").css("opacity", "0");
    $("#about").css("opacity", "0");
    $("#contact").css("opacity", "0");

    $("#work_container").css("display", "inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideInRight");
    }, 800);
}
function closework() {
    $("#middle").css("opacity", "100");
    $("#work").css("opacity", "100");
    $("#about").css("opacity", "100");
    $("#contact").css("opacity", "100");

    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display", "none");
    }, 800);
}
function showcontact() {
    $("#middle").css("opacity", "0");
    $("#work").css("opacity", "0");
    $("#about").css("opacity", "0");
    $("#contact").css("opacity", "0");

    $("#contact_container").css("display", "inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideInUp");
    }, 800);
}
function closecontact() {
    $("#middle").css("opacity", "100");
    $("#work").css("opacity", "100");
    $("#about").css("opacity", "100");
    $("#contact").css("opacity", "100");

    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display", "none");
    }, 800);
}
setTimeout(function () {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
        $("#box").css("display", "none");
        $("#about").removeClass("animated fadeIn");
        $("#contact").removeClass("animated fadeIn");
        $("#work").removeClass("animated fadeIn");
    }, 1000);
}, 1500);
