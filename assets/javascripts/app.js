(function($) {
  
  // ================================================================
  // andrewperry behaviors
  // ================================================================

  var andrewperry = { // namespace setup

    config : {

      // Settings
      // -> global vars go here
      // --------------------------------------------------------------- 

      // media query breakpoints
      breakpoints : ["30em", "48em", "80em", "90em"]

    },

    // Setup
    // ---------------------------------------------------------------
    init : function(config) {
      $.extend(andrewperry.config, config);

    },

    // Methods
    // ---------------------------------------------------------------
    equalHeight : function(el) {
      var currentShortest = 10000000000;

      // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
      el.each(function() {
        // "caching"
        var $el = $(this);
        currentShortest = (currentShortest > $el.height()) ? ($el.height()) : (currentShortest);

        // console.log(currentShortest + " | " + $el.height() + " | " + getOriginalHeight($el));
      });
      el.parent().height(currentShortest);
    },

    setFluidTimeImage : function(el) {
      el.each(function() {
        var $el = $(this);
        var $img = $el.find("img");
        var src = $img.attr("src");
        $el.css("background-image", "url('" + src + "')");
        $img.css("opacity", "0");
        console.log("src: " + src);
      });
      
    }
    
  };

  
  $(window).load(function() {
    // andrewperry.init();
    andrewperry.setFluidTimeImage($(".tile-thumb"));
    andrewperry.equalHeight($(".tile-thumb img"));
  });

  $(document).ready(function() {  
    // fade in each image individually as it's downloaded  
    $('img').load(function() {  
        $(this).fadeIn('slow');  
    });  
}); 

  $(window).resize(function() {
    andrewperry.equalHeight($(".tile-thumb img"));
  });

})(jQuery);
