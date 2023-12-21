$(document).ready(function () {


    $(".acco>li").click(function () {
        let accodi = $(this).children("h3").hasClass("accoOn");

        if (accodi) {
            $(this).children("h3").removeClass("accoOn");
            $(this).children("h5").slideUp();
        }
        else {
            $(".acco>li>h3").removeClass("accoOn");
            $(".acco>li>h5").slideUp();
            $(this).children("h3").addClass("accoOn");
            $(this).children("h5").slideDown();

        }
    });

    $(".tabmenu>div").click(function () {

        let list = $(this).index();

        $(".tabmenu>div").removeClass("tabOn");
        $(".tabmenu>div").eq(list).addClass("tabOn");

        $(".tabOpen>div").removeClass("on");
        $(".tabOpen>div").eq(list).addClass("on");
        // $(".acco>li>h3").removeClass("accoOn");
        // $(".acco>li>h5").slideUp();
    });
});