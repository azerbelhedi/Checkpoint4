
$(document).ready(function(){

var visible=0;
$(".overlay").css("visibility","hidden");
$(".popup").css("display","none"); 

$(".overlay").css("visibility","hidden"); 
$(".popup").css("display","none");
    $(".btn").click(function() { 
        if(visible == 0){
            visible  = 1 ;
            $(".overlay").css("visibility","visible");
            $(".popup").css("display","block"); 
            window.scrollTo(0,350);
        }            
    });

    $(".x").click(function(){
        if(visible==1){
            visible=0;
            $(".overlay").css("visibility","hidden");
            $(".popup").css("display","none"); 
        }
    })
})

var btnvis = 0;
$(".btn").css("display","none");
    $(".container").mouseover(function(){
        if(btnvis==0){
            btnvis=1;
            $(".btn").css("display","block");
        }
    })

var btnvis = 1;
$(".btn").css("display","block");
    $(".container").mouseout(function(){
        if(btnvis==1){
            btnvis = 0;
            $(".btn").css("display","none");
        }
    })


