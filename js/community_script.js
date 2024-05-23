$(document).ready(function () {

    //처음들어갔을때 모습 만들기...
    $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
    $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $(".tab_btn>div").click(function () {

        // $(".tab_btn>div").removeClass("on");
        // $(this).addClass("on");

        var indexNo = $(this).index();
        console.log(indexNo)
        if (indexNo == 0) {
            $(".active").css({ "left": "0" })
        }
        else if (indexNo == 1) {
            $(".active").css({ "left": "33.33%" })
        }
        else if (indexNo == 2) {
            $(".active").css({ "left": "66.66%" })
        }
        else {
            $(".active").css({ "left": "66.66%" })
        }

        $(".tab_content").hide(); //모든 contents들 숨김

        var activeTab = $(this).attr("data");
        /*내가 방금 클릭한 li 안에있는 span태그의 data부분 안에 들어있는 id이름을 가져오는것.*/
        $(activeTab).fadeIn();
        /*위에서 가져온 아이디 이름에 해당하는 대상만 보이게 한다. 여기서 fadeIn대신에 show를 쓰면 번쩍번쩍한 느낌을 없앨 수 있다.*/
        return false;
    });
});

$(function () {
    $("#qna> ul> li").click(function () {
        $(this).children(".answer").slideToggle();
    });
    $("#qna> ul> li").click(function () {
        $(this).toggleClass("turn");

        if ($(this).hasClass("turn") === true) {
            $(this).siblings().removeClass("turn");

        }

    });
});

