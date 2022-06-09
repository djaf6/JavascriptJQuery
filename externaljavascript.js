$(document).ready(function(){
    console.log("ready");

    let v = 1;
    $("#hidebutton").html("Click To Hide");
   
    $("#hidebutton").on("click", function( event ) {
      $("#para1").toggle();
      v = v*-1;
      console.log(v);

      if(v == 1) {
            $("#hidebutton").html("Click To Hide");
      };
  
      if(v == -1){
          $("#hidebutton").html("Click To Reveal");
      }
      
       
    });

   

    $("#divbutton").html("Click add a border");
    $("#divbutton").on("click", function( event ) {
      
      $( "#div1" ).css( "border", "2px solid black" )
      .add( "#div1" ).css( "background", "white" );
      
    });

    $("#div1button").html("Click to reveal a secret");
    $("#div1button").on("click", function( event ) {
      
      $( "#div1" ).children( ".subc" ).html( "follow my businesses @shopenvyco and @studiodessy");
      
    });

    $("#div2button").html("Click for a color change");
    $("#div2button").on("click", function( event ) {
      $( "#div1" ).each(function( i ) {
        if ( this.style.color !== "grey" ) {
          this.style.color = "grey";
        } else {
          this.style.color = "hotpink";
        }
      });
    });

    
    $("#filt").html("Click to see my favorite food");
    $("#filt").on("click", function( event ) {
        $( ".pbox" ).css( "background", "#b4b0da" );

        $(".pbox").filter(function( index ) {
            return index === 0 || $( this ).attr( "id" ) === "fifth";
          })
            .css( "border", "3px double black" );
      
    });

    $("#firstb").html("Click see my favorite music genre");
    $("#firstb").on("click", function( event ) {
        
      $( "ul li" ).first().css( "background-color", "yellow" );;
        
    });

    $("#lastb").html("Click to see my least favorite music genre");
    $("#lastb").on("click", function( event ) {
        
      $( "ul li" ).last().css( "background-color", "yellow" );
        
    });

    $("#hasb").html("Click to see music I can't live without");
    $("#hasb").on("click", function( event ) {
        
      $( "li" ).has( "ul" ).css( "background-color", "teal" );
        
    });

    $("#notb").html("Click to see music I love");
    $("#notb").on("click", function( event ) {

      $( "li" ).not( document.getElementById( "notli" ) )
      .css( "background-color", "red" );

    });

    $("#parb").html("Click to see who I want too see in concert lol");
    $("#parb").on("click", function( event ) {

      $( "li#item4a" ).parent().css( "background-color", "green");

    });

    $("#parsb").html("Click to change the background color");
    $("#parsb").on("click", function( event ) {

      $( "#dlist #item4a" ).parents().css( "background-color", "white");

    });

    $("#parsbc").html("Change back");
    $("#parsbc").on("click", function( event ) {

      $( "#dlist #item4a" ).parents().css( "background-color", "pink");

    });

    $("#sib").html("Click to reveal who's concert I'm going to in two weeks");
    $("#sib").on("click", function( event ) {

      $( "#dlist #item2a" ).siblings().css( "background-color", "purple" );

    });


    $( "#hovertest" ).hover(
      function() {
        $( this ).append( $( "<span> i love this class </span>" ) );
        }, function() {
        $( this ).find( "span" ).last().remove();
        }
        
    );
      
  

    let j = 1;


    
    $("#offfade").html("Click to Fade Text");
    $("#offfade").on("click", function( event ) {

      $("#offtest").fadeOut();
      $("#offtest").fadeIn();
      
    });

    $("#offfadet").html("Click to test Toggle Fade");
    $("#offfadet").on("click", function( event ) {

      $("#offtest").fadeToggle();
      
    });
    $("#offtog").html("Click To Hide Offtest");
    
    $("#offtog").on("click", function( event ) {
      $("#offtest").toggle();
      

      j = j*-1;
      

      if(j == 1) {
          $("#offtog").html("Click To Hide Offtest");
      };
  
      if(j == -1){
          $("#offtog").html("Click To Reveal Offtest");
      }
      
       
    });

  

    $( ".target" ).change(function() {
        alert( ".change actuacted" );
      });

    $( "#targ" ).blur(function() {
      alert( ".blur() actuated" );
    })
    
    $( "#targe" ).focus(function() {
        alert( "focus() actuated" );
      });
     
    $("#hideb").html("Click to hide button");
    $("#hideb").click(function(){
      $("#hidetest").hide();
    });

    $("#showb").html("Click to make it reappear");
    $("#showb").click(function(){
      $("#hidetest").show();
    });

    $("#slub").html("Click to hide title");
    $("#slub").click(function(){
      $("#hidetest").slideUp();
    });

    $("#sldb").html("Click to bring title back");
    $("#sldb").click(function(){
      $("#hidetest").slideDown();
    });


    $("#hcb1").click(function(){
        alert($("#hcb1").hasClass("yesclass"));
    });

    $("#hcb2").click(function(){
        alert($("#hcb2").hasClass("yesclass"));
    });

    $("#hcb3").click(function(){
        alert($("#hcb3").hasClass("yesclass"));
    });

  
    $("#attb").click(function(){
        $("#goog").attr("alt", "bigbrother" );
    });

    $("#adaf").click(function(){
        $("#app").after("I need to pass all my classes")
    });
    $("#adbf").click(function(){
        $("#app").before("This is my plan")
    });
    $("#appendb").click(function(){
        $("#app").append("HaHa")
    });
    $("#prependb").click(function(){
        $("#app").prepend("lolol")
    });
    $("#appendtb").click(function(){
        $("<span>HaHa</span>").appendTo("#app1")
    });
    $("#prependtb").click(function(){
        $("<span>lolol</span>").prependTo("#app1")
    });
    $("#rmvb").click(function(){
        $("#app").remove()
    });
    $("#repl").click(function(){
        $("<span>Bye</span>").replaceAll("#app1")
    });
    $("#replw").click(function(){
        $("#app2").replaceWith("<span>Foreal Bye</span>")
    });
});