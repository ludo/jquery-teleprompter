(function($) {
  $.fn.teleprompter = function(a) {
    return this.each(function() {
      var container = $(this),
          containerHeight,
          script = container.children().first()[0],
          maxScrollTop;

      containerHeight = this.offsetHeight;

      script.style.marginBottom = containerHeight + "px";
      script.style.marginTop = containerHeight + "px";

      maxScrollTop = this.scrollHeight - containerHeight;
      console.log(a);
      if (a == 'start'){
          container.animate(
          { scrollTop: maxScrollTop },
          maxScrollTop * 10, // duration
          "linear" // easing
        );
      }else if(a == 'pause'){
        container.stop();
      }  
      
    });
  };
}(jQuery));


