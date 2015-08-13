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
        if (!$(container).is(':animated')) {
          container.animate(
          { scrollTop: maxScrollTop },
          maxScrollTop * 25, // duration
          "linear" // easing
        );
        }
      }else if(a == 'pause'){
        if ($(container).is(':animated')) {
          container.stop();
      }
      }  
      
    });
  };
}(jQuery));
