// bring in the React framework
// React has been forked to the React components and the ReactDOM manipulation
// so in the index.js we need both
// note: we dont have to specify where these classes are because they are specified in
// package.json
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Because this is our own file, we have to tell Bable how to find the class
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBtsj1xDHdCooNrIB1613WXo91g3RT7heM'; // YouTube API Key

// create a new component that creates HTML
// () => is the same as function() {}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (dataFromYouTube) => {
      this.setState({
        videos:dataFromYouTube,
        selectedVideo:dataFromYouTube[0]
      });
    });

  }
  render() {
      return (<div>
        <SearchBar />
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList
        // set a call back event to set the selectedVideo to whatever is chosen
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos} />
        </div>
      );
    }
}

// take this components generated HTML and put in the DOM
// we have to send in an *instance* of the App class, not the class itself
// also, we have to tell it what renderable object to render to
// container is the root node in this app (so we tell the app to go find it on the page)
ReactDOM.render(<App />, document.querySelector('.container'));
