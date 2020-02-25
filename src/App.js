import React from 'react';
import './App.css';
import Parser from 'html-react-parser';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructoe");
    this.state = {
       buttonClicked: true,
       another: 'state',
       anotherone: 'another',
       htmlContent: null
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerived state");
    return null;
  }

  async componentDidMount() {
    console.log("componentdidmount");
    const data1 = {"url": "https://medium.com/better-programming/the-software-engineering-study-guide-bac25b8b61eb"};
    const htmlC = await fetch("http://localhost:8000/getHtml", 
    {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(data1)
    }
   );
    const data = await htmlC.json();
    this.setState({
      htmlContent: data.data
    })
    console.log(data, 'dyaidk');
  }

   componentDidUpdate() {
    console.log("componenr did update")
    
  }

  render() {
    console.log("render", this.props);
    return (
      <div className="content" style={{}}>
        {this.state.htmlContent ? Parser(this.state.htmlContent) : null}
        {/* <button onClick={() => {this.setState({buttonClicked: !this.state.buttonClicked})}}>
        clicke </button> */}
       </div>
    )
  }
}

class App1  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parent: 'hsh',
      anotherk: 'kdk'
    }
  }

  render() {
    return <App {...this.state} />
  }
}

export default App1;
