/* eslint-disable react/prop-types */
import PlayVideo from './PlayVideo';
import './VideoPlayer.css';

const ShowVideo = ({
    questionVedios
}) => {
  return (
    <>
    {questionVedios?.length !== 0 ? <h2>Video</h2> : null}
            <div className="editor-show-videos" >
                {questionVedios && questionVedios?.map((post, index) => {
                    return (
                        <div key={index} >
                            <PlayVideo post={post} />
                        </div>
                    )
                })}
            </div>
    </>
  )
}

export default ShowVideo