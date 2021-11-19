import video from "../images/pexels-tp-motion-8551659.mp4"
const Video = () => {
    return (
       /* "loop" needed between autoPlay and muted */
        <video autoPlay  muted id="video" width="150" height="150">
            <source src={video} type="video/mp4"/>
        </video>
    )
}

export default Video;