(function($) {
  $.fn.teleprompter = function() {
    return this.each(function() {
      var container = $(this),
          containerHeight,
          script = container.children().first()[0],
          maxScrollTop;

      containerHeight = this.offsetHeight;

      script.style.marginBottom = containerHeight + "px";
      script.style.marginTop = containerHeight + "px";

      maxScrollTop = this.scrollHeight - containerHeight;

      container.animate(
        { scrollTop: maxScrollTop },
        maxScrollTop * 10, // duration
        "linear" // easing
      );
    });
  };
}(jQuery));

