// DOM is fully loaded 

$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        //grab burger name from the field
        var newBurger = {
            burger_name: $("#burgerToGo").val().trim(),
            devoured: 0
            
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created a new burger");
                location.reload();
            }
        );
    });



    $(".delete-burger").on("click", function(event) {
        
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devour to", newDevour);
                location.reload();
            }
        );
    });

});