$(document).ready(function() {
    
    var source = $("#first-template").html();
    var template = Handlebars.complile(source);
    
    var context = {
        title: "All about handlebars",
        body: "<p> this is a post about</p>"
    }
    
    var el_html = template(context);
    
    $("render_here").html(el_html);
    $("render_here_again").html(el_html);
    
    }
);