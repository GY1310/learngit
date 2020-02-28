//时间：2018-6-12
//修改人：郭岩
//联系方式：1310774021@qq.com

// 主页轮播图部分
$(function () {
    $(".undeline span").eq(0).mouseenter(function () {
        $(".banner div").eq(0).stop().fadeIn(800).siblings(".first,.second,.third,.fourth").stop().fadeOut(800);
        $(".undeline span").eq(0).css("borderColor", "#fff").siblings(".undeline span").css("borderColor", "rgba(255,255,255,0.2)");
    })
    $(".undeline span").eq(1).mouseenter(function () {
        $(".banner div").eq(1).stop().fadeIn(800).siblings(".first,.second,.third,.fourth").stop().fadeOut(800);
        $(".undeline span").eq(1).css("borderColor", "#fff").siblings(".undeline span").css("borderColorr", "rgba(255,255,255,0.2)");
    });
    $(".undeline span").eq(2).mouseenter(function () {
        $(".banner div").eq(2).stop().fadeIn(800).siblings(".first,.second,.third,.fourth").stop().fadeOut(800);
        $(".undeline span").eq(2).css("borderColor", "#fff").siblings(".undeline span").css("borderColor", "rgba(255,255,255,0.2)");
    });
    $(".undeline span").eq(3).mouseenter(function () {
        $(".banner div").eq(3).stop().fadeIn(800).siblings(".first,.second,.third,.fourth").stop().fadeOut(800);
        $(".undeline span").eq(3).css("borderColor", "#fff").siblings(".undeline span").css("borderColor", "rgba(255,255,255,0.2)");
    });

    // 用户信息图标字体部分
    $("#icon-user-o").click(function () {
        $("#user").slideToggle(500);
    });



    // 返回顶部按钮
    // 滚动到1000像素，显示返回顶部按钮
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 800) {
            $(".top").stop().fadeIn(1000);

        } else {
            $(".top").stop().fadeOut(1000);
        }
    });
    // 点击按钮返回顶部
    $(".top a").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });
})