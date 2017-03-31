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



