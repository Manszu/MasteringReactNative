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






