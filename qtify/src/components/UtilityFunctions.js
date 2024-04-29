function MilliSecondsToDuration(duration){
    console.log('total duration in ms: ', duration);
    var totalSeconds=Math.round(duration/1000);
    return SecondsToDuration(totalSeconds);
}

function SecondsToDuration(duration){
    console.log('duration in seconds: ', duration);
    const minutes = Math.floor(duration/60);
    const seconds = duration%60;

    return ('0' + minutes).slice(-2) + ' : ' + ('0' + seconds).slice(-2);
}

export {MilliSecondsToDuration, SecondsToDuration};