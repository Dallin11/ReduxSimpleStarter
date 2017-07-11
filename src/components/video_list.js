import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = props => {
 const videoItems = props.videos.map(video => {
    return (

     <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
 );
         //Always add a key^
})

    return (
        <ul className='col-md-4 lsit-group'>
           {videoItems}
            </ul>
    );
};

export default VideoList;