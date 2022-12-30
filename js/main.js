if (window.localStorage.getItem("lang") != "") {
    console.log("cookies are enabled");
} else {
    $("body").append('<div class="cookiepopup">');
    $(".cookiepopup").append('<p class="cookieheading">')
    $(".cookieheading").html("Welcome")
    $(".cookiepopup").append('<p>')
};