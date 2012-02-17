/**
 * Main JS for Map
 */

(function($) {
  $(document).ready(function() {
    $('a.open-modal-how').click(function() {
      $('.modal-how').modal({
        zIndex: 999999
      });
    });
  });
})(jQuery);