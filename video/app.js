var videoData = [
	{
		"title": "Video 1",
		"src": "https://www.youtube.com/embed/oiFjW1pxvxc"
	},
	{
		"title": "Video 2",
		"src": "https://www.youtube.com/embed/1vU6a7Ucncg"
	},
	{
		"title": "Video 3",
		"src": "https://www.youtube.com/embed/3tmd-ClpJxA"
	}
];

var videoContainer = document.getElementById("video-container");

for (var i = 0; i < videoData.length; i++) {
	var videoItem = document.createElement("div");
	videoItem.className = "video-item";
	videoContainer.appendChild(videoItem);

	var videoTitle = document.createElement("div");
	videoTitle.className = "video-title";
	videoTitle.innerHTML = videoData[i].title;
	videoItem.appendChild(videoTitle);

	var videoPlayer = document.createElement("div");
	videoPlayer.className = "video-player";
	videoItem.appendChild(videoPlayer);

	var videoIframe = document.createElement("iframe");
	videoIframe.src = videoData[i].src;
	videoIframe.allowfullscreen = true;
	videoIframe.frameborder = 0;
	videoPlayer.appendChild(videoIframe);
}
 
