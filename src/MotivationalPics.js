import React, {
  Component
} from 'react';

class MotivationalPics extends Component {
  constructor(props) {
    super(props);
    this.state = {urls: "dsa"};
  }
  async componentDidMount() {
    console.log("hello")
      const getMotivatedResultData = await fetch('https://www.reddit.com/r/GetMotivated/.json')
      const getMotivatedResult = await getMotivatedResultData.json()
      console.log(getMotivatedResult.data.children)
      console.log(getMotivatedResult.data.children.length);
      let i
      let numOfImages = 0
      let totalNumOfImages = 1
      let img;
      for (i = 0; i < getMotivatedResult.data.children.length; i++) {
        if (getMotivatedResult.data.children[i].data.link_flair_css_class == "image") {
          //var img = document.createElement('img');
          img = getMotivatedResult.data.children[i].data.url;
          //img.style.width = "35%";
          //document.getElementById('body').appendChild(img);
          //document.getElementById('body').appendChild(document.createElement('br'))
          numOfImages++;
          this.setState({urls: img})
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

  render() {

    return (
      <div>
      <img src={this.state.urls} width="200px"/>
      </div>
    );
  }

}

export default MotivationalPics;
