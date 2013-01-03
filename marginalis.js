$(function(){

  var ARROW_COLOR = "#999"

  var article = $('article')
  article_left = article.offset()["left"];
  article_bottom = article.offset()["top"] + article.height();
  article_top = article.offset()["top"];

  var paper = Raphael(0, 0, article_left, article_bottom);
  //var conline1 = paper.path("M100,500L0,250");
  //var conline2 = paper.path("M100,0L0,250");
  //var conline3 = paper.path("M50,125l0,250");
  _($('a')).each(function(self_a){
    split_anchor = self_a.href.split("#");
    if(split_anchor.length >= 2){
      var target_id = "#" + split_anchor[split_anchor.length-1];
      var target_el = $(target_id);
      var source_coordinates = [article_left,$(self_a).offset()["top"] ];
      var target_coordinates = [article_left -15,$(target_el).offset()["top"] +15 ]; //todo scale 15 to fit arrow length

      location_of_control_point_coefficient = 3 + (Math.random() -.5); //increase this the farther left the target element is.
      var curve_string = "M" + source_coordinates[0] + "," + source_coordinates[1];
      curve_string += " Q" + "0," + (Math.abs(source_coordinates[1] + target_coordinates[1])/ location_of_control_point_coefficient) + ", "; //randomize 2
      curve_string += target_coordinates[0] + "," + target_coordinates[1];
      var curve = paper.path(curve_string);
      curve.attr("stroke",ARROW_COLOR); 
      curve.attr("stroke-width",3); 
      curve.attr("fill", "none");
      curve.attr("class", "marginalis-arrow");

      var arrow_line_length = 10

      if(location_of_control_point_coefficient > 2){
        vertical_arrow_control_line = 0;
        horizontal_arrow_control_line = (location_of_control_point_coefficient - 2.5) * 6;
      }else{
        vertical_arrow_control_line = ((-location_of_control_point_coefficient + 2.5) * 6) + 1;
        horizontal_arrow_control_line = 0;
      }
      var horizontal_arrow_line = paper.path("M" + (target_coordinates[0] )+ "," + (target_coordinates[1]) + "L" + (target_coordinates[0] - arrow_line_length + (vertical_arrow_control_line/1.414) ) + "," + (target_coordinates[1] + vertical_arrow_control_line));
      horizontal_arrow_line.attr("stroke-width",3);
      horizontal_arrow_line.attr("stroke",ARROW_COLOR); 
      horizontal_arrow_line.attr("class", "marginalis-arrow");
      var vertical_arrow_line = paper.path("M" + (target_coordinates[0] + horizontal_arrow_control_line )+ "," + (target_coordinates[1] + arrow_line_length) + "L" + (target_coordinates[0] ) + "," + (target_coordinates[1]));
      vertical_arrow_line.attr("stroke-width",3); 
      vertical_arrow_line.attr("stroke",ARROW_COLOR); 
      vertical_arrow_line.attr("class", "marginalis-arrow");
      //Mbeginning x, y; Qcontrol point x, y, end x, y

    }
  });
  _($('article p.marginalis')).each(function(p_marginalis){ 
    var pertains_to = $($(p_marginalis).data('target'));
    if(pertains_to.length == 0){
      throw new TypeError("The target of one of your marginalia could not be found!");
    }
    $(p_marginalis).css("top", (pertains_to.offset()["top"]) - $('article').offset()["top"] );

    marginalia_line_height = parseInt($(p_marginalis).css("line-height"));
    if($(p_marginalis).height() > 3.2 * marginalia_line_height){
      $(p_marginalis).height(3.2 * marginalia_line_height);
      $(p_marginalis).css("overflow", "hidden");
      $(p_marginalis).html( $(p_marginalis).html() + "<span class='marginalis-expander'>…</span>");
    }
  });


  //highlight a marginalis
  var scale_factor = 1.5
  _($('article p.marginalis')).each(function(marginalis){
    $(marginalis).on('mouseover', function(e){
      if( $(e.target).hasClass("marginalis")){
        mouseovered_marginalis = $(e.target);
      }else{
        mouseovered_marginalis = $($(e.target).parent('.marginalis'));
      }

      mouseovered_marginalis.css("width", (parseInt(mouseovered_marginalis.css("width")) + 140));
      //mouseovered_marginalis.css("left", (parseInt(mouseovered_marginalis.css("left")) - 70));
      new_height = mouseovered_marginalis.height() * scale_factor
      mouseovered_marginalis.css("top", (parseInt(mouseovered_marginalis.css("top")) - (new_height/2)));
      mouseovered_marginalis.css("height", new_height);

      mouseovered_marginalis.css("overflow", "visible");
      mouseovered_marginalis.addClass("selected"); //change font styles

      //fade other stuff
      $('path').attr("stroke", "#eee");
      //$('article p').not('.marginalis').addClass('faded_text');
      $('article p').addClass('faded_text');
      mouseovered_marginalis.removeClass('faded_text')
      var pertains_to = $(mouseovered_marginalis.data('target'));
      pertains_to.addClass('not_faded_text');

      mouseovered_marginalis.find('span.marginalis-expander').hide();
    });
  });

  //return to normal view.
  _($('article p.marginalis')).each(function(marginalis){
    $(marginalis).on('mouseout', function(e){
      if( $(e.target).hasClass("marginalis")){
        mouseovered_marginalis = $(e.target);
      }else{
        mouseovered_marginalis = $($(e.target).parent('.marginalis'));
      }
      mouseovered_marginalis.removeClass("selected");

      mouseovered_marginalis.css("width", (parseInt(mouseovered_marginalis.css("width")) - 140));
      //mouseovered_marginalis.css("left", (parseInt(mouseovered_marginalis.css("left")) + 70));
      var pertains_to = $(mouseovered_marginalis.data('target'));
      mouseovered_marginalis.css("overflow", "hidden");
      mouseovered_marginalis.css("top", pertains_to.offset()["top"] - $('article').offset()["top"] );        
      mouseovered_marginalis.css("height", 3.2 * marginalia_line_height);

      //unfade everything else
      $('path').attr("stroke", "#555");
      $('article p').removeClass('faded_text');
      var pertains_to = $(mouseovered_marginalis.data('target'));
      pertains_to.removeClass('not_faded_text');


      mouseovered_marginalis.find('span.marginalis-expander').show();
    });
  });
});
