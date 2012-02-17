/**
 * Main JS for Map
 */

(function($) {
  $(document).ready(function() {
    var url = 'http://a.tiles.mapbox.com/v3/zzolo.OSMBrightMN-census.jsonp';

    // Create map
    var mm = com.modestmaps;
    wax.tilejson(url, function(tilejson) {
      var m = new mm.Map('map-container', new wax.mm.connector(tilejson));
      
      // Center
      m.setCenterZoom(new mm.Location(46.261141, -88.067139), 6);
      //m.setCenterZoom(new mm.Location(tilejson.center[1], tilejson.center[0]), 6);
      
      // Controls and interactions
      wax.mm.zoomer(m, tilejson).appendTo(m.parent);
      wax.mm.legend(m, tilejson).appendTo(m.parent);
      wax.mm.interaction(m, tilejson);
      wax.mm.attribution(m, tilejson).appendTo(m.parent);
    });

  });
})(jQuery);