

$("#bt1").click(function(){
	$.ajax({
		type: "get",
		dataType: "json",
		url: "../json/gallery.json",
		data: {
			page:1
		},
		success: function(res){
			console.log(res.datas[2].title);
		}
	});
});

