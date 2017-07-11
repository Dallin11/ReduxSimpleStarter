import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";


const API_KEY = "AIzaSyAzJav36phcV5qTq7rDgp-P9kTJgZcvOEA";
//Downwards data flow the most parent component is responsible for fetching data.




// Create new component. This component should produce some html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [],
        selectedVideo: null };

        this.videoSearch("surfboards");
    }

videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
//whenever we change a component from a function based component to a class based component, we need to go through and update all the refrences to props as this.props

 render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}


// Take this component's generated HTML and put it on the page (in the DOM)
 ReactDOM.render(<App/>, document.querySelector('.container'));
