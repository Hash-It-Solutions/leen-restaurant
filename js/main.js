//   --------------------filter gallery--------------------------

$(document).ready(function() {
    $(".filter-btn").on("click", function() {
      var filter = $(this).attr("data-filter");
  
      $(".filter-item").addClass("filter-hidden");
      if (filter == "all") {
        $(".filter-item").removeClass("filter-hidden");
      } else {
        $(".filter-item." + filter).removeClass("filter-hidden");
      }
    });
  });

  
//   --------------------filter gallery--------------------------



