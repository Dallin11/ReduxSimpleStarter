import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js'

const API_KEY = 'AIzaSyDbzPONUOpwmt6n-5VN6Q3BREpw5UoMBrE';
//Downwards data flow the most parent component is responsible for fetching data.




// Create new component. This component should produce some html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    this.setState({ videos });
    //this.setState({ videos: videos });
});
    }
//whenever we change a component from a function based component to a class based component, we need to go through and update all the refrences to props as this.props

    render() {
return (
<div>
    <SearchBar />
    <VideoList videos={this.state.videos} />
</div>
);
}
}


// Take this component's generated HTML and put it on the page (in the DOM)
 ReactDOM.render(<App/>, document.querySelector('.container'));
