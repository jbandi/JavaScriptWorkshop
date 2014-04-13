/*global ApplicationController: false, ToDoService: false */
$(function () {
    var model = {
        players: {
            "diego": {
                name: "Diego Maradona",
                email: "diego@fifa.com"
            },
            "antonin": {
                name: "Antonin Panenke",
                email: "antonin@adoda.tk"
            },
            "michele": {
                name: "Michel Platini",
                email: "michel@uefa.com"
            },
            "zico": {
                name: "Zico",
                email: "zico@brasil.br"
            }
        }
    };
    
    new ApplicationController({
        containerId: "main",
        service: new ToDoService("https://localhost:8181/baas/api/", "marc", "geheim"),
        model: model,
        pageChanged: {
            "detail-view": function(currentPage, lastPage, data) {
            }
        },
        beforePageChange: {
            "detail-view": function(currentPage, lastPage, data) {
                var player = this.model.players[data];
                currentPage.find(".portrait").attr("class", "portrait " + data);
                currentPage.find("#name").val(player.name);
                currentPage.find("#email").val(player.email);
                currentPage.find("#name-caption").text(player.name);
            }
        }
    }).init();
});