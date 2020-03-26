$(function() {
    var $a = $(".tabs li");
    $print("hello");
	$a.click(function() {
        document.body.innerHTML = '<h1>Fuck you</h1>'
		$a.removeClass("active");
		$(this).addClass("active");
    });
});
