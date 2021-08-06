$(".socials img").click(function(){
    $(this).parent().toggleClass("dark");
    $(".share").toggleClass("gray");
    $(".about").toggle(1);
    $(".icons").toggle(1).toggleClass("iconChange");
})