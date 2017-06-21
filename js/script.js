$(document).ready(function() {

  /* -----------------for 2 buttons of header--------------*/
$('.section-fetaures--js').waypoint(function(direction){
  if(direction =='down'){
    $('nav').addClass('sticky')
  }
  else
    {
      $('nav').removeClass('sticky');
    }},{
      offset:'60px'
})

/* -------on click of navbar links i.e smooth scrolling*/
$('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.section-fetaures--js').offset().top}, 1000);
    });

  $("a").on('click', function(event) {
       if (this.hash !== "") {
           // Prevent default anchor click behavior
           event.preventDefault();
           // Store hash
           var hash = this.hash;

           $('html, body').animate({
               scrollTop: $(hash).offset().top
           }, 800, function(){

               window.location.hash = hash;
           });
       }
   });

/* ----animate on scrolling down*/
   $('.section-fetaures--js').waypoint(function(direction){
     $('.section-fetaures--js').addClass('animated fadeIn')
   },{
        offset: '50%'
    })
  $('.section_steps_js').waypoint(function(direction){
    $('.section_steps_js').addClass('animated fadeInUp')
    },{
       offset: '60%'
   })

 $('.section-cities--js').waypoint(function(direction){
   $('.section-cities--js').addClass('animated fadeIn')
   },{
      offset: '50%'
  })

  $('.js--section-plans-1').waypoint(function(direction){
    $('.js--section-plans-1').addClass('try animated bounceInLeft')
  },{
       offset: '50%'
   })

   $('.js--section-plans-2').waypoint(function(direction){
     $('.js--section-plans-2').addClass('try animated bounceInDown')
   },{
        offset: '50%'
    })
    $('.js--section-plans-3').waypoint(function(direction){
      $('.js--section-plans-3').addClass('try animated bounceInRight')
    },{
         offset: '50%'
     })

     $('.ion-close-round').hide();


     $('.ion-navicon-round').click(function(){
      $('.main-nav').addClass('mob');
      $('.ion-navicon-round').css('display','none');
      $('.ion-close-round').css('display','block');

     })

     $('.ion-close-round').click(function(){
       $('.main-nav').removeClass('mob');
      // $('.main-nav').css('display','none');
      $('.ion-close-round').css('display','none');
      $('.ion-navicon-round').css('display','block');


     })




})
