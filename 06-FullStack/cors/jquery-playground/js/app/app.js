$(function(){
    $("#execute").on('click', callRestApi);

    var restEndpointUrl = 'http://courserater-jbandi.rhcloud.com/courserater/rest/ratings-cors';
//    var restEndpointUrl = "http://localhost:8080/courserater/rest/ratings-cors";
    var newResourceUrl;
    var allResources;

    function callRestApi() {

        $("#logMsgDiv").empty();
        newResourceUrl = undefined;
        allResources = undefined;

        callGet()
            .done(function( jsonObj, textStatus, xhr ) {
                allResources = jsonObj;
                $("#logMsgDiv").append($('<p/>').text("All resources: "));
                $("#logMsgDiv").append($('<p/>').text(JSON.stringify(jsonObj)));
            })
            .fail(logAjaxError)
            .then (callPost, callPost)
            .done(function (result, textStatus, xhr) {
                if(xhr) newResourceUrl = xhr.getResponseHeader("Location");
                $("#logMsgDiv").append($('<p/>').text("New resource created: " + newResourceUrl));
            })
            .fail(logAjaxError)
            .then(callPut, callPut)
            .done(function (result, textStatus, xhr) {
                $("#logMsgDiv").append($('<p/>').text("Resource updated."));
            })
            .fail(logAjaxError)
            .then(callDelete, callDelete)
            .done(function (result, textStatus, xhr) {
                $("#logMsgDiv").append($('<p/>').text("Resource deleted."));
            })
            .fail(logAjaxError);
    };

    var getCurrentResourceId = function(){
        if(newResourceUrl) return newResourceUrl.split('/').pop();
        else if (allResources && allResources.length > 0) return allResources[allResources.length -1].id;
        else return undefined;
    };

    var logAjaxError = function(xhr, textStatus, errorThrown){
        console.log("HTTP Status: " + xhr.status);
        console.log("Error textStatus: " + textStatus);
        console.log("Error thrown: " + errorThrown);
    }

    var callGet = function(){
        return $.ajax({
            cache: false,
            crossDomain: true,
            dataType: "json",
            url: restEndpointUrl,
            type: "GET"
        })};

    var callPost = function(){
        if(!$("#chkPost").is(':checked')) return;
        return $.ajax({
            cache: false,
            crossDomain: true,
            contentType: "application/json",
            url: restEndpointUrl,
            type: "POST",
            data: JSON.stringify({participantName: "2", score: 4})
        })};


    var callPut = function(){
        var resourceId = getCurrentResourceId();
        if(!$("#chkPut").is(':checked') || !resourceId) return;
        if(!resourceId) return;
        return $.ajax( {
            cache: false,
            crossDomain: true,
            contentType:"application/json",
            url: restEndpointUrl + "/" + resourceId,
            type: "PUT",
            data: JSON.stringify({id:resourceId, participantName:"2", score:96})
        })};

    var callDelete = function () {
        var resourceId = getCurrentResourceId();
        if(!$("#chkDelete").is(':checked') || !resourceId) return;
        if(!resourceId) return;
        return $.ajax( {
            cache: false,
            crossDomain: true,
            url: restEndpointUrl + "/" + resourceId,
            type: "DELETE"
        } );
    };
});