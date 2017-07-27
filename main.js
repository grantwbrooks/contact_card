$(document).ready(function(){

    $("form").submit(function(){
        var first = $("#first_name").val();
        var last = $("#last_name").val();
        var description = $("#description").val();
        $(".viewcard").append("<div><h2>"+first+" "+last+"</h2><h4>Click for description!</h4><h3>"+description+"</h3></div>");
        // this was tricky needed to add description above and then toggle it below before the big toggle statements.  Otherwise on clicks below you kept adding elements through .html or .append, which kept getting added when trying to toggle.
        $(".viewcard h3").toggle(false);
        // below code clears value from input boxes
        $("#first_name").val("");
        $("#last_name").val("");
        $("#description").val("");
        return false;
    })


    $(document).on("click", ".viewcard h4",function(){
        $(this).siblings("h3").toggle();
        $(this).siblings("h2").toggle();
        $(this).toggle();
    })

    $(document).on("click", ".viewcard h3",function(){
        $(this).siblings("h4").toggle();
        $(this).siblings("h2").toggle();
        $(this).toggle();
    })



});