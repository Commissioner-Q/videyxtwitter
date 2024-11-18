function playVideo() {
    const videoUpload = document.getElementById('video-upload');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    const downloadLink = document.getElementById('download-link');

    if (videoUpload.files.length > 0) {
        const file = videoUpload.files[0];
        const fileURL = URL.createObjectURL(file);
        videoSource.src = fileURL;
        videoPlayer.load();
        videoPlayer.play();

        // Set the download link
        downloadLink.href = fileURL;
        downloadLink.download = file.name;
    } else {
        alert('Please upload a video file first.');
    }
}