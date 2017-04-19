//JSX
//similar to HTML 
<h1>   Hello World! </h1> 
//The same ancestor -XML -should have forward slash in tag
<img src = "my/image.jpg" />

//use className in JSX instead od class in HTML
// HTML 
 <div class="news-item"> 
//JSX
 <div className="news-item"> 
 
 
//inline styles- user can use Java Script for it:
//HTML
<div styles="background: green; color: red;"> 
//JSX 
<div styles={{background: 'green', color: 'red'}}> 

// The outer set of curly braces is used to show that the code contained is JavaScript. 
// The inner set is a JavaScript object literal containing the CSS style property 
// names and their respective values.

// not onlyd can attribute values be written in Java script, 
// but so too can the content contained between JSX tags. 
//HTML
<span> Hello World </span>
//JSX
<span>{'Hello' + 'World!'} </span>

//There are also more tags available to us than in normal HTML. Our application
// defined components themselves can be added into JSX markup:
<NewsItem> 
  Hello React! 
</NewsItem> 


//Components - we build applications using composable, modular components.
// THese components represent parts of our visual interface and are rendered as such. We can create component by using ES2015 class syntax.
import React, { Component } from 'react'; 
 
class Title extends Component { 
 
  render() { 
    return ( 
      <h1> 
        Hello World! 
      </h1> 
    ); 
  } 
} 

//The entire contents of the file that defines and exports the Title component, Title.jsx, might look like this:

import React, { Component } from 'react'; 
export default class Title extends Component { 
 
  render() { 
    return ( 
      <h1> 
        Hello World! 
      </h1> 
    ); 
  } 
} 


//Can build one component based on other components in example title:
import React, { Component } from 'react'; 
 
class NewsItem extends Component { 
 
  render() { 
    return ( 
      <div className="news-item"> 
        <Image /> 
        <Title /> 
        <Byline /> 
        <Description /> 
      </div> 
    ); 
  } 
 
} 
// For example we want to build Warning title component based on Title component with red border


import React, { Component } from 'react'; 
 
class WarningTitle extends Component { 
 
  render() { 
    return ( 
      <div style={{ border: '1px solid red' }}> 
        <Title /> 
      </div> 
    ); 
  } 
 
} 


//React provides a mechanism for making components dynamic by using properties, or props


//Base definition of component Title
import React, { Component } from 'react'; 
 
export default class Title extends Component { 
 
  render() { 
    return ( 
      <h1> 
        Hello World! 
      </h1> 
    ); 
  } 
 
} 

//Making this component dynamic by using titleText input property:
import React, { Component } from 'react'; 
 
export default class Title extends Component { 
 
  render() { 
    return ( 
      <h1> 
        {this.props.titleText} 
      </h1> 
    ); 
  } 
 
} 


//Curly brackets in JSX denotes JavaScript code 
<h1> 
  {this.props.titleText} 
</h1> 


//Defining PropTypes in a component is how we formally tell other developers what properties a component accepts and what 
//value types those properties should be. PropTypes are the same across instances of a component and are thus statically
//attached to the class:
import React, { Component, PropTypes } from 'react'; 
 
export default class Title extends Component { 
 
  render() { 
    return ( 
      <h1> 
        {this.props.titleText} 
      </h1> 
    ); 
  } 
 
} 
 
Title.propTypes = { 
  titleText: PropTypes.string 
}; 

//To use PropTypes we'll need to add it to the React import:
import React, { Component, PropTypes } from 'react'; 

//PropTypes module comes with functions for validation different value types,
//such as string, number, and func.

//Here we are communicationg that this component takes one optional property called titleText, and that property should be of type string:
Title.propTypes = { 
  titleText: PropTypes.string 
}; 

//We could also make this a required property:
Title.propTypes: { 
  titleText: PropTypes.string.isRequired 
} 

//In addition to having string type props, we can also have other simple types, such as booleans and numbers:
Title.propTypes = { 
  titleText: PropTypes.string.isRequired, 
  highlighted: PropTypes.bool, 
  fontSize: PropTypes.number 
}; 

//Props can not only be used to define the text content, but can also be used
// to define attributes of an element, for instance, inline style:
import React, { Component, PropTypes } from 'react'; 
 
export default class Title extends Component { 
 
  render() { 
    return ( 
      <h1 
        style={{ 
          backgroundColor: this.props.highlighted ? 'yellow' : 'white', fontSize: `${this.props.fontSize}px` 
        }} 
      > 
      {this.props.titleText} 
      </h1> 
 
    ); 
  } 
 
} 
 
Title.propTypes = { 
  titleText: PropTypes.string.isRequired, 
  highlighted: PropTypes.bool, fontSize: PropTypes.number 
}; 
//Note that CSS properties that have a dash in them when written in traditional CSS use camel case
//in React inline style. This is because keys in JS objects cannot contain dashes.
backgroundColor: this.props.highlighted ? 'yellow' : 'white', fontSize: `${this.props.fontSize}px` 

//React PropType specifications can also be used to validate more complex properties.
//For instance, we could gave a property that is either a string or a number using the
//oneOfType function, which is as follows:
fontSize: PropTypes.oneOfType([ 
  PropTypes.string, 
  PropTypes.number 
]) 

//We can also specify a set of specific values that a property is allowed to take by using
//the oneOf method:
size: PropTypes.oneOf([ 
  'small', 
  'medium', 
  'large' 
]) 

//We can of course specify more complex data types, such as arrays and objects, but we can also
//be more specific and describe the types of values in an array property or the shape that
//an object property takes:
propTypes: { 
  //Array that can contain anything 
  simpleArray: PropTypes.array, 
 
  //Object that can contain anything 
  simpleObject: PropTypes.object, 
 
  //Array that contains only Number values 
  arrayOfNumbers: PropTypes.arrayOf(PropTypes.number), 
 
  //Object that takes a specific "shape" 
  complexObject: PropTypes.shape({ 
    id: PropTypes.number, 
    name: PropTypes.string 
  }) 
} 

//Alternatively, PropTypes can be added to a React component as a static property using
//the static keyword - but this is not recomended:
import React, { Component, PropTypes } from 'react'; 
 
export default class Title extends Component { 
 
  static propTypes = { 
    titleText: PropTypes.string.isRequired, 
    highlighted: PropTypes.bool, 
    fontSize: PropTypes.number
} 
 
  render() { 
    return ( 
      <h1 
        style={{ 
          backgroundColor: this.props.highlighted ? 'yellow' : 'white', fontSize: `${this.props.fontSize}px` 
        }} 
      > 
        {this.props.titleText} 
      </h1> 
 
    ); 
  } 
 
} 


//Passing Props- in case of our Title Component, the NewsItem component can pass properties into the 
//contained Title component.
import React, { Component } from 'react'; 
import Title from './Title'; 
 
export default class NewsItem extends Component { 
 
  render() { 
    return ( 
      <div className="news-item"> 
        <Image /> 
        <Title 
          titleText="Hello World!" 
          highlighted={true} 
          fontSize={18} 
        /> 
        <Byline /> 
        <Description /> 
      </div> 
    ); 
  } 
 
} 

//String are the only value types that can be passed in as a prop directly:
titleText="Hello World!" 

//For Boolean props, we can shorten their input to where the property name's presence is
//interpreted as true and its absence is interpreted as false, much like in HTML:
<div className="news-item"> 
  <Image /> 
  <Title 
    titleText="Hello World!" 
    highlighted 
    fontSize={18} 
  /> 
  <Byline /> 
  <Description /> 
</div> 
//Default props method. defaukltProps must be a JavaScript object where keys are property names 
// and the values are the default values to use in the case that no values were passed in for
//that particular property.
import React, { Component, PropTypes } from 'react'; 
 
export default class Title extends Component { 
 
  render() { 
    return ( 
      <h1 
        style={{ 
          backgroundColor: this.props.highlighted ? 'yellow' : 'white', 
          fontSize: `${this.props.fontSize}px` 
        }} 
      > 
        {this.props.titleText} 
      </h1> 
 
    ); 
  } 
 
} 
 
Title.propTypes = { 
  titleText: PropTypes.string.isRequired, 
  highlighted: PropTypes.bool, 
  fontSize: PropTypes.number 
}; 
Title.defaultProps = { 
  highlighted: false, 
  fontSize: 18 
}; 

//In context, our Newsitem component is now simplified to this:
import React, { Component } from 'react'; 
import Title from './Title'; 
 
export default class NewsItem extends Component { 
 
  render() { 
    return ( 
      <div className="news-item"> 
        <Image /> 
        <Title 
          titleText="Hello World!" 
          highlighted 
        /> 
        <Byline /> 
        <Description /> 
      </div> 
    ); 
  } 
 
} 

//Sometimes, a component will receive its props from several levels above. The NewsItem
//component can accept a property, and in turn, pass it down to the Title component.
// For instance, maybe NewsFeed specifies the title of an individual NewsItem, rather
//than having NewsItem provide it statically itself, as we have done in the previous
//examples.
import React, { Component, PropTypes } from 'react'; 
import Title from './Title'; 
 
export default class NewsItem extends Component { 
 
  render() { 
    return ( 
      <div className="news-item"> 
        <Image /> 
        <Title 
          titleText={this.props.titleText} 
          highlighted 
        /> 
        <Byline /> 
        <Description /> 
      </div> 
    ); 
  } 
 
} 
 
NewsItem.propTypes = { 
  titleText: PropTypes.string.isRequired 
}; 

//Props.children. Every component has an optional special property that is called children. Normal
//properties, are passed in using something similar to the HTML attribute syntax:
<Title 
  titleText="Hello World" 
/> 
//Above code can be refactored to this:
<Title> 
  Hello World 
</Title>

//Now the render() method of Title component becomes this:
render() { 
  return ( 
    <h1 
      style={{ 
        backgroundColor: this.props.highlighted ? 'yellow' : 'white', fontSize: `${this.props.fontSize}px` 
      }} 
    > 
      {this.props.children} 
    </h1> 
  ); 
} 
//we could also pass in other React elements into the Title as property by also placing them in between the opening
// and closing tags:
<Title> 
  Hello World! 
  <img src="icon.png" /> 
</Title> 
//When validationg the children prop, we can use a special PropTypes called node, which means anything that can be
//rendered by React:
Title.propTypes = { 
  children: PropTypes.node.isRequired, 
  highlighted: PropTypes.bool, 
  fontSize: PropTypes.number 
}; 

//Event handlers/listeners- functions that respond to user events
document.querySelector('form').addEventListener('click', validateForm); 
 
function validateForm() { 
  alert('The form is valid!'); 
} 


//QuerySelector returns the first element inside the document which is the same as the name
var el = document.querySelector(".myclass"); //returns 1 element which contains class myclass


//In the early days of JavaScript, we probably would have used HTML event attributes in order to respond to user events on some element.
<form onsubmit="validateForm()"> 
  ... 
</form> 

//React handling:
<form onSubmit={validateForm}> 

//Lets imagine that we want our application to respond to a user clicking on the news item:
import React, { Component, PropTypes } from 'react'; 
import Title from './Title'; 
 
export default class NewsItem extends Component { 
 
  onClick() { 
    alert(`You've clicked on ${this.props.titleText}`); 
  } 
 
  render() { 
    return ( 
      <div 
        className="news-item" 
        onClick={this.onClick.bind(this)} 
      > 
        <Image /> 
        <Title 
          highlighted 
        > 
          {this.props.titleText} 
        </Title> 
        <Byline /> 
        <Description /> 
      </div> 
    ); 
  } 
 
} 
 
NewsItem.propTypes = { 
  titleText: PropTypes.string.isRequired 
}; 

//Take note that we are binding the render method's this context to the onClick method when adding it as a click handler:
onClick={this.onClick.bind(this)} 

// The better way to bind the this context to the event handler method is to do so within the component's constructor:
constructor(props) { 
  super(props); 
  this.onClick = this.onClick.bind(this); 
} 
//There is no need to re-bind the event handler in the JSX, which can be simplified:
<div 
  className="news-item" 
  onClick={this.onClick} 
> 
//To get access to the event, we just need to add it as a parameter to our event listener method:
onClick(event) { 
  console.log('User event', event); 
  alert(`You've clicked on${this.props.titleText}`); 
} 


//State
// Body variable will only be defined if the internal state is expanded
// <div> element has been added around the description and byline.
// This is because JSX elements must have a single root node in order
// to return them or store in the variable
render() { 
  let body = null; 
 
  if (this.state.expanded) { 
    body = ( 
      <div> 
        <Byline /> 
        <Description /> 
      </div> 
    ); 
  } 
 
  return ( 
    <div 
      className="news-item" 
      onClick={this.onClick} 
    > 
      <Image /> 
      <Title 
        highlighted 
      > 
        {this.props.titleText} 
      </Title> 
      {body} 
    </div> 
  ); 
} 

//Alternative way -store each element in its own variable:
render() { 
  let byline = null; 
  let description = null; 
 
  if (this.state.expanded) { 
    byline = <Byline />; 
    description = <Description />; 
  } 
 
  return ( 
    <div 
      className="news-item" 
      onClick={this.onClick} 
    > 
      <Image /> 
      <Title 
        highlighted 
      > 
        {this.props.titleText} 
      </Title> 
      {byline} 
      {description} 
    </div> 
  ); 

//While this code is completely valid, we can make it even better by splitting out conditional rendering into a separate method:
renderBody() { 
  if (this.state.expanded) { 
    return ( 
      <div> 
        <Byline /> 
        <Description /> 
      </div> 
    ); 
  } 
  return null; 
} 
//Then, we can use this helper method within our main render() method in order to make things a bit clearer
render() { 
  return ( 
      <div 
        className="news-item" 
        onClick={this.onClick} 
      > 
      <Image /> 
      <Title 
        highlighted 
      > 
      {this.props.titleText} 
      </Title> 
        {this.renderBody()} 
      </div> 
    ); 
  } 
 
//The component initial state, much like its default properties, should be a JavaScript object.
//This method describe the initial state of a component, but it does not provide us
//with any means to update that state. In order to update the state of a component,
//we can use a React component's setState method to assign, or reassign, any internal
// state value.
constructor(props) { 
  super(props); 
 
  this.state = { 
    expanded: false 
  }; 
 
  this.onClick = this.onClick.bind(this); 
} 

//Let's modify our onClick event handler to change the expanded state of our component instead of simply alerting.
//
onClick(){
	this.setState({
		expanded: !this.state.expanded
	});
}

//We should never manipulate the state of a component directly:
this.state.expanded= false;


//The same goes for props; they are external and should only be changed as a result of new values being passed in through JSX:
this.props.titleText= 'Hello World!';

//To create a component for our news item that starts out collapsed(not expanded) and not showing the description
//or byline, but when the user clicks on the news item, it expands to show the two previously hidden elements:
import React, { Component, PropTypes } from 'react'; 
import Title from './Title'; 
 
export default class NewsItem extends Component { 
 
  constructor(props) { 
    super(props); 
 
    this.state = { 
      expanded: false 
    }; 
 
    this.onClick = this.onClick.bind(this); 
  } 
 
  onClick() { 
    this.setState({ 
      expanded: !this.state.expanded 
    }); 
  } 
 
  renderBody() { 
    if (this.state.expanded) { 
      return ( 
        <div> 
          <Byline /> 
          <Description /> 
        </div> 
      ); 
    } 
    return null; 
  } 
 
  render() { 
    return ( 
      <div 
        className="news-item" 
        onClick={this.onClick} 
      > 
        <Image /> 
        <Title 
          highlighted 
        > 
          {this.props.titleText} 
        </Title> 
        {this.renderBody()} 
      </div> 
    ); 
  } 
 
} 
 
NewsItem.propTypes = { 
  titleText: PropTypes.string.isRequired 
}; 

//Before a component is mounted, which means placed into the DOM for the first time, React will look at the 
//component's class to see if it has a method called componentWillMount defined. This method is a good place
//to do things such as set up timers needed by the component or request data the component needs from the server:

componentWillMount() { 
  //Decrement an internal state counter every second 
  setInterval(() => { 
    this.setState({ 
      secondsLeft: this.state.secondsLeft - 1; 
    }); 
  }, 1000); 
} 

//the next step in the component's lifecycle is the first render. React calls this method and then, the first 
//time, converts the JSX element output to HTML elements and places them in the DOM. In other words, it mounts
//the component.

//after mounting, the next step in the lifecycle, an optional method called componentDidMount is called.
//It is generally not a good idea to use libraries that manipulate the DOM alongside React. 

componentDidMount() { 
  //Integrate with an external library here 
} 

//The update cycle
//The first method called during a property update cycle is componentWillReceiveProps.  Here, we not only know that the component is about to receive 
//a new set of properties, but we also can see what those properties are and how they compare to the old ones:
componentWillReceiveProps(nextProps) {
	//an object of new props
	console.log(nextProps);
	
	//the current(old) props
	console.log(this.props);
}

//This brings us to the next lifecycle




//Then we can use this helper method within our main render() methode in order to make things a bit clearer:
render() { 
  return ( 
      <div 
        className="news-item" 
        onClick={this.onClick} 
      > 
      <Image /> 
      <Title 
        highlighted 
      > 
      {this.props.titleText} 
      </Title> 
        {this.renderBody()}  //here we use render body
      </div> 
    ); 
  } 
  
 //The component lifecycle
 //Before a component is mounted, which means placed into the DOM for the first time, react wil look at that
 //component's class to see if it has a method called componentWillMount defined.
 //This method is a good place to do things such as set up timers needed by the component or request data the component needs
 //from the server:
 componentWillMount() { 
  //Decrement an internal state counter every second 
  setInterval(() => { 
    this.setState({ 
      secondsLeft: this.state.secondsLeft - 1; 
    }); 
  }, 1000); 
} 
//The next step in the component's lifecycle is the first render. React calls this method and then, the first time, 
//converts the JSX element output to HTML element and places them in the DOM. In other words, it mounts the component.

//The next step in the lifecycle, an optional method called componentDidMount
componentDidMount() { 
  //Integrate with an external library here 
} 
//The first thing that could happen is the component's parent could pass it new props. The second is some event or 
//interval triggers a change in internal state. These two actions, of courrce, necessitate a re-render. Before a re-render
//happens, there are a few other lifecycle methods that will be called.

//The update cycle
//The first method called during a property update cycle is componentWillReceiveProps. Here, we not only know that the component is 
//about to receive a new set of properties, but we also can see what those properties are and how they compare to the old ones:
componentWillReceiveProps(nextProps) { 
  //an object of new props 
  console.log(nextProps); 
 
  //The current (old) props 
  console.log(this.props); 
} 

//The next lifecycle method that is called when either props or state are updated: shouldComponentUpdate. 
shouldComponentUpdate(nextProps, nextState) { 
  if (this.props.uid !== nextProps.uid) { 
    return true; 
  } 
  return false; 
} 

//If shouldComponentUpdate returns true (or is not defined byt the component), the next step in the
//lifecycle is componentWillUpdate, which is the last step before re-rendering.  Here, like in shouldComponentUpdate,
//we have access to both the new properties and the new state:
componentWillUpdate(nextProps, nextState){
	//Prepare for render!!
}
//At this point, React will call render on the component again, getting its new JSX representation.  It will 
// compare this new JSX to the old JSX in the virtual DOM and create a change set to apply to the real DOM.
//Once this process is complete, we arrive ath the next step of the lifecycle which is componentDidUpdate.
//This method is very similar to componentWillUpdate, except that it receives the previous properties and state
// as arguments:
componentDidUpdate(prevProps, prevState) { 
  //Here are the old props 
  console.log(prevProps); 
 
  //And here are the current (new) props 
  console.log(this.props); 
} 
//Now, we've completed the update lifecycle. At this point, once again the component remanins dormant
//until another change in properties or state occurs. This process continues over and over again
// until the component is removed, or unmounted, from the DOM.

//Unmounting the component
//Just before a component is removed from the DOM, the final stage of the component's lifecycle
//will be completed.

componentWillMount() { 
  //Save the interval in state 
  this.setState({ 
    tickInterval: setInterval(() => { 
      this.setState({ 
        secondsLeft: this.state.secondsLeft - 1; 
      }); 
    }, 1000); 
  }); 
} 
 
componentWillUnmount() { 
  //Stop the countdown before unmounting 
  clearInterval(this.state.tickInterval); 
} 

//Alternate component forms
//React.createClass, let's take a look at what our NewsItem component looks like using this method:
React.createClass({ 
 
  propTypes: { 
    titleText: PropTypes.string.isRequired 
  }, 
 
  getInitialState() { 
    return { 
      expanded: false 
    } 
  }, 
 
  onClick() { 
    this.setState({ 
      expanded: !this.state.expanded 
    }); 
  }, 
 
  renderBody() { 
    if (this.state.expanded) 
      return ( 
        <div> 
          <Byline /> 
          <Description /> 
        </div>; 
      ); 
    } 
    return null; 
  }, 
 
  render() { 
    return ( 
      <div 
        className="news-item" 
        onClick={this.onClick} 
      > 
        <Image /> 
        <Title 
          highlighted 
        > 
          {this.props.titleText} 
        </Title> 
        {this.renderBody()} 
      </div> 
    ); 
  } 
 
}); 

// Instead of simply assigning the state in the class constructor, we define a getInitialState method in the component, 
// which returns the initial component state as an object:
getInitialState() { 
  return { 
    expanded: false 
  } 
} 

//Previously, event handler functions were bound to the component's this context either in the constructor or within the
//event attribute assignment. When using the React.createClass syntax, we have no longer neet to explicitly bind the context:
<div 
  className="news-item" 
  onClick={this.onClick} 
> 

//Rather than defining the propTypes statically on the class, we instead do it within the component object:
propTypes: { 
  titleText: PropTypes.string.isRequired 
} 











