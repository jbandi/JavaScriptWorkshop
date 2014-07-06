/* global $ */

$(function () {
    "use strict";

    require(["rating_widget"], function(RatingWidget) {
        var ratingWidget = new RatingWidget($('#canvas_container')[0]);

        $('#moodNumber').change(function() {
            ratingWidget.setMood($("input#moodNumber").val());
        });

        $("#runCode").click(function() {
            ratingWidget.show();
        });
    });
});

