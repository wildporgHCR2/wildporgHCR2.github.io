if (window.localStorage.getItem("lang") != null) {
    console.log("cookies are enabled");
} else {
    $("body").append('<div class="cookiewindow">');
    $(".cookiewindow").append('<p class="cookieheading">')
    $(".cookieheading").html("Welcome")
    $(".cookiewindow").append('<p class="cookiebody">')
    $(".cookiebody").html("This site uses cookies.")
};