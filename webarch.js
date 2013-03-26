function setup() {

 $('.content li').on('mouseenter', function(e) {
	 $('.' + $(this).attr('id') ).addClass('focus');
 })

 $('.content li').on('mouseleave', function(e) {
	 $('.' + $(this).attr('id') ).removeClass('focus');
 })

 $('.content li').on('click', function(e) {
	 $(this).toggleClass('active');
	 $('.' + $(this).attr('id') ).toggleClass('active');
 })

};

$(window).load(setup);
