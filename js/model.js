$(document).ready(function () {
    $('.sample').hover(function () {
        $(".child").css("height", "60%");
        $(".parent").css("height", "60%");
    },
        function () {
            $(".child").css("height", "0");
            $(".parent").css("height", "20%");
        }
    );
    // $('.popup').hide();
    $('.btn-read').on("click", function () {
        $('.popup').show();
    })
});