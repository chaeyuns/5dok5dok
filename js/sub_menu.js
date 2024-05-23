$(function () {
    $("#gnb>li").mouseover(function () {
        $(".sub").stop().slideDown();
        $(".sub_bg").stop().slideDown();
    });
    $("#gnb").mouseleave(function () {
        $(".sub").stop().slideUp();
        $(".sub_bg").stop().slideUp();
    });
});