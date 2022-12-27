const getAlbumDuration = (album) => {
    let s = 0
    album.tracks.items.forEach(track => {
      s += track.duration_ms
    });
    let seconds = Math.floor((s / 1000) % 60)
    let minutes = Math.floor((s / (1000 * 60)) % 60)
    let hours = Math.floor((s / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    return hours > 0 ? `${hours} hours ${minutes} minutes ${seconds} seconds` : `${minutes} minutes ${seconds} seconds`
  }

  export default getAlbumDuration