var peer = new Peer({key: "2pmakgfy6gw7mn29"});
var remotePeerId = window.location.href.split("/")[4];


navigator.webkitGetUserMedia({video: true, audio: true}, function(localMediaStream){
	peer.call(remotePeerId, localMediaStream);
});