$(document).ready(function(){
  $('#get_color').on('click', function(event) {

    event.preventDefault();
    
    $.ajax({
    type: 'post',
    url:'/color'
    }).done(function(server_data) {
      // console.log(server_data.cell_colo?);
      // console.log(server_data.box);
       $('#color_me :nth-child('+server_data.box+')').css('background-color', server_data.cell_color)
    });


  });
});