var pageCounter = 1;
var windowsize = $(window).width();

$(document).ready(function () {

    $("#divOfki").css({
        "height": $("body").height()
    });

    $("#divOfki").dragend({ preventDrag: true });


    $("#coupleHead").css({
        "width": $("body").width(),
    });

    $("#interactiveContent").css({
        "height": $("body").height()
    });


    $("#conctacUsContent").css({
        "height": $("body").height()
    });

    $("#disableHeader").css({
        "width": $("body").width(),
        "height": $("body").height()
    });



    $("#familyHead").css({
        "width": $("body").width(),
        "height": $("body").height()
    });


    $("#siteMapContent").css({
        "height": $("body").height()
    });

    $("#studentHead").css({
        "width": $("body").width(),
        "height": $("body").height()
    });


    $("#singleHead").css({
        "width": $("body").width(),
        "height": $("body").height()
    });


    $("#aboutContent").css({
        "height": $("body").height()
    });

    $("#hamburgerNav").css({
        "height": $("body").height()
    });
    document.getElementById("insidePagesLogo").style.display = "none"



    var scroll_pos = 0;
    $("#couple2").scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            $("#global_items").css('background-color', 'rgba(244, 244, 244, 0.46)');
            document.getElementById("goUpCouple").style.display = "block"
        } else {
            $("#global_items").css('background-color', '');
            document.getElementById("goUpCouple").style.display = "none"

        }

 
    });

    $("#disable3").scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            $("#global_items").css('background-color', 'rgba(244, 244, 244, 0.46)');
            document.getElementById("goUpDisable").style.display = "block"
        } else {
            $("#global_items").css('background-color', '');
            document.getElementById("goUpDisable").style.display = "none"
        }

    });

    $("#family4").scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            $("#global_items").css('background-color', 'rgba(244, 244, 244, 0.46)');
            document.getElementById("goUpFamily").style.display = "block"

        } else {
            $("#global_items").css('background-color', '');
            document.getElementById("goUpFamily").style.display = "none"

        }

    });

    $("#student5").scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            $("#global_items").css('background-color', 'rgba(244, 244, 244, 0.46)');
            document.getElementById("goUpStudent").style.display = "block"

        } else {
            $("#global_items").css('background-color', '');
            document.getElementById("goUpStudent").style.display = "none"

        }

    });

    $("#single6").scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            $("#global_items").css('background-color', 'rgba(244, 244, 244, 0.46)');
            document.getElementById("goUpSingle").style.display = "block"

        } else {
            $("#global_items").css('background-color', '');
            document.getElementById("goUpSingle").style.display = "none"

        }

    });
});

$(window).resize(function () {
    var windowsize = $(window).width();

    $("#divOfki").css({
        "width": $("body").width(),
        "height": $("body").height()
    });
    $("#divOfki").dragend();

    $("#coupleHead").css({
        "width": $("body").width(),
        "height": $("body").height()
    });

    $("#interactiveContent").css({
        "height": $("body").height()
    });


    $("#conctacUsContent").css({
        "height": $("body").height()
    });

    $("#disableHeader").css({
        "width": $("body").width(),
        "height": $("body").height()
    });



    $("#familyHead").css({
        "width": $("body").width(),
        "height": $("body").height()
    });


    $("#siteMapContent").css({
        "height": $("body").height()
    });

    $("#studentHead").css({
        "width": $("body").width(),
        "height": $("body").height()
    });


    $("#singleHead").css({
        "width": $("body").width(),
        "height": $("body").height()
    });


    $("#aboutContent").css({
        "height": $("body").height()
    });

    $("#hamburgerNav").css({
        "height": $("window").height()
    });

})


jQuery(function ($) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    $(window).resize(function () {
        if (windowWidth != $(window).width() || windowHeight != $(window).height()) {
            location.reload();
            return;
        }
    });
});


function navFunc() {
    var myStyle = $("#hamburgerNav").css("display");
    if (myStyle == "none") {
        document.getElementById("hamburgerNav").style.display = "block"
    }
    else {
        document.getElementById("hamburgerNav").style.display = "none"
    }
}

function hetzClickLeft() {
    pageCounter++;
    $("#divOfki").dragend({
        scrollToPage: pageCounter
    });
    document.getElementById("insidePagesLogo").style.display = "block"

    if (pageCounter == 6) {
        document.getElementById("hetzLeft").style.display = "none"
    }
    document.getElementById("hetzRight").style.display = "block"
    iconActive(pageCounter)
}


function goToHomePage() {
    $("#divOfki").dragend({
        scrollToPage: 1
    });
    pageCounter = 1;
    document.getElementById("hetzRight").style.display = "none"
    document.getElementById("hetzLeft").style.display = "block"
    iconActive(pageCounter)
    document.getElementById("insidePagesLogo").style.display = "none"

}

function hetzClickRight() {
    pageCounter--;
    $("#divOfki").dragend({
        scrollToPage: pageCounter
    });
    document.getElementById("insidePagesLogo").style.display = "block"

    if (pageCounter == 1) {
        document.getElementById("hetzRight").style.display = "none"
        document.getElementById("insidePagesLogo").style.display = "none"


    }
    document.getElementById("hetzLeft").style.display = "block"

    iconActive(pageCounter);
}


function iconActive(pageNum) {

    pageCounter = pageNum;
    var allIcons = document.getElementsByClassName("navDesign");
    for (i = 0; i < allIcons.length; i++) {
        allIcons[i].classList.remove("active");
        $("#global_items").css('background-color', 'none');
    }

    allIcons[pageNum - 1].classList.add("active");
    $("#divOfki").dragend({
        scrollToPage: pageNum
    });
    document.getElementById("insidePagesLogo").style.display = "block"


    if (pageNum == 6) {
        document.getElementById("hetzLeft").style.display = "none";
        document.title = "ez2move - יחיד"
        document.getElementById("global_items").style.backgroundColor = "";
    }
    else {
        document.getElementById("hetzLeft").style.display = "block";
    }

    if (pageNum == 1) {
         document.getElementById("hetzRight").style.display = "none";
        document.getElementById("insidePagesLogo").style.display = "none"
        document.title = "ez2move - עמוד הבית"
        document.getElementById("global_items").style.backgroundColor = "";

    }
    else {
        document.getElementById("hetzRight").style.display = "block";
        //document.getElementById("global_items").style.backgroundColor = "rgba(244, 244, 244, 0.46)";

    }

    if (pageNum == 2) {
        document.title = "ez2move - זוג"
        document.getElementById("global_items").style.backgroundColor = "";

    }
    if (pageNum == 3) {
        document.title = "ez2move - אדם עם מוגבלות"
        document.getElementById("global_items").style.backgroundColor = "";

    }
    if (pageNum == 4) {
        document.title = "ez2move - משפחה"
        document.getElementById("global_items").style.backgroundColor = "";

    }
    if (pageNum == 5) {
        document.title = "ez2move - סטודנט"
        document.getElementById("global_items").style.backgroundColor = "";

    }

}



function insidePagesLogoScroll() {
    $("#divOfki").dragend({
        scrollToPage: 1
    });
    pageCounter = 1;

    if (pageCounter == 6) {
        document.getElementById("hetzLeft").style.display = "none"
    }
    document.getElementById("hetzRight").style.display = "block"
    iconActive(pageCounter)
}

function goToContent() {
    if (pageCounter == 1) {
        window.location.hash = '#backGroundUnderLogo'
    }

    if (pageCounter == 2) {
        window.location.hash = '#jumpingPoint'
    }

    if (pageCounter == 3) {
        window.location.hash = '#jumpingPoint1'
    }

    if (pageCounter == 4) {
        window.location.hash = '#jumpingPoint2'
    }
    if (pageCounter == 5) {
        window.location.hash = '#jumpingPoint3'
    }
    if (pageCounter == 6) {
        window.location.hash = '#jumpingPoint4'
    }

}

function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
           
            $(this).trigger("hover");
            var innerUl = event.target.parentElement.querySelector("ul")
            if (innerUl) innerUl.style.display = "block";
        }, true);
    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null) {
            navInner[i].addEventListener("blur", function (event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }
}

function scrollUpc() {
    window.location.hash = '#scrollUpPointC';
    window.location.hash = '';
  

}

function scrollUpD() {
    window.location.hash = '#scrollUpPointD';
    window.location.hash = '';
}

function scrollUpF() {
    window.location.hash = '#scrollUpPointF';
    window.location.hash = '';
}

function scrollUpSt() {
    window.location.hash = '#scrollUpPointSt';
    window.location.hash = '';
}

function scrollUpSi() {
    window.location.hash = '#scrollUpPointSi';
    window.location.hash = '';
}