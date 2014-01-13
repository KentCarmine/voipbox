$(function(){
	var peer = new Peer({key: "2pmakgfy6gw7mn29"});

	peer.on("open", function(id){
		$("#peer_id").append(peer.id);
		peer.on("call", function(call){
			navigator.webkitGetUserMedia({video: true, audio: true}, function(localMediaStream){
				call.answer(localMediaStream);
				console.log(localMediaStream);
			});
		});
	});
});
