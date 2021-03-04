import React, {
  Component
} from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class MotivationalPics extends Component {
  constructor(props) {
    super(props);
    this.state = {urls: []};
  }
  async componentDidMount() {
      const getMotivatedResultData = await fetch('https://www.reddit.com/r/GetMotivated/.json')
      const getMotivatedResult = await getMotivatedResultData.json()
      console.log(getMotivatedResult.data.children)
      console.log(getMotivatedResult.data.children.length);
      let i
      let numOfImages = 0
      let totalNumOfImages = 1
      let img, ranNum;
      let numOfMotivationalPosts = getMotivatedResult.data.children.length
      for (i = 0; i < numOfMotivationalPosts; i++) {
        ranNum = getRandomInt(numOfMotivationalPosts)
        if (getMotivatedResult.data.children[ranNum].data.link_flair_css_class == "image") {
          //var img = document.createElement('img');
          img = getMotivatedResult.data.children[ranNum].data.url;
          //img.style.width = "35%";
          //document.getElementById('body').appendChild(img);
          //document.getElementById('body').appendChild(document.createElement('br'))
          numOfImages++;
          //this.setState({urls: img})
          this.setState(previousState => ({
            urls: [...previousState.urls, img]
          }));
            /*(state) => {
            const list = state.urls);
            console.log(this.state)
            return list;
          });*/
          if (numOfImages >= totalNumOfImages) {
            break;
          }
        }

    }
  }
//
  render() {
    return (
      <div>
      {this.state.urls.map((url,index) => {
        return <img src={url} key={index} width="100%"/>
      })}
      </div>
    );
  }

}

export default MotivationalPics;
