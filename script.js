$("button").click(function(){
    var greeting = " ";
    var name = $(".name").val();
    var phone = $(".phone").val();
    var day = parseInt($(".day").val());
    var week = day * 7;
    $("body").text(name + " " + "has a/an" + " " + phone + " " + "and uses it" + " " + day + " " + "hours" + " " + "a day" + " " + "and will use it for" + " " + week + " " + " hours" + " " + ", in a week.");
});
