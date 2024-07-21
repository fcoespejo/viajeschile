$(function() {
    // smoth scroll
        $("a").click(function(event) {
            if (this.hash !== "") {
                event.preventDefault();
    
                var hash = this.hash;
    
                $("html, body").animate ({
                    scrollTop: $(hash).offset().top
                }, 600, function() {
                    window.location.hash = hash;
                });
            }
    
        });
})


// tooltip en iconos de rrss de footer
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

// aclara cards al deslizar mouse sobre cada una
$(document).ready(function(){  
    $(".card").mouseenter(function() {  
        $(this).css({  
            opacity: '1.0', 
        })
    });  
})