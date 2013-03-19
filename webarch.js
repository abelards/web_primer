function setup() {

 $('#keywords li').on('mouseenter', function(e) {
	 $('.' + $(this).attr('id') ).addClass('focus');
 })

 $('#keywords li').on('mouseleave', function(e) {
	 $('.' + $(this).attr('id') ).removeClass('focus');
 })

 $('#keywords li').on('click', function(e) {
	 $(this).toggleClass('active');
	 $('.' + $(this).attr('id') ).toggleClass('active');
 })

};

$(window).load(setup);
