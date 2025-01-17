import "./IframeVideo.scss"

const IframeVideo = ({url}) => {

    return (
        <div className="iframe-video">
            <iframe src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default IframeVideo