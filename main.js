
$(document).ready(function(){
    $('.header').height($(window).height());

    $("form").submit(function(e){
        e.preventDefault()
        var name = $("#name").val()
        var email = $("#email").val()
        var password = $("#password").val()
        
        $.post("http://localhost:3000/users", {name,email,password}).done(function(){
            console.log("Saved")
        })
    })
  });

  