$(function() {
// smoth scroll
        $("a").click(function(event) {
            if (this.hash !== "") {
                event.preventDefault();
    
                var hash = this.hash;

                document.querySelector(hash).scrollIntoView({
                behavior: "smooth"
            })
    
                $("html, body").animate ({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    window.location.hash = hash;
                });
            }
        });
})

// para tooltips en iconos de rrss de footer y en iconos de seccion quienes somos
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

// aclara cards al deslizar mouse sobre cada una en seccion destacados
$(document).ready(function(){  
    $(".card").mouseenter(function() {  
        $(this).css({  
            opacity: '1.0', 
        })
    });  
})
