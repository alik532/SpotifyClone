const getValidDuration = (duration) => {
    return Math.floor((duration/1000/60) << 0) + `:${Math.floor((duration/1000) % 60) > 9 ? Math.floor((duration/1000) % 60): "0" + Math.floor((duration/1000) % 60)}`
}

export default getValidDuration;