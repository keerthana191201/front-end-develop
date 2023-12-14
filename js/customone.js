let a = 0;

$(document).ready(function () {
    $("#add").on("click", function () {
        a++;
        a;
        $("#head").text(a);
    });
    $("#minus").on("click", function () {
        a--;
        a;
        $("#head").text(a);
    });

});
