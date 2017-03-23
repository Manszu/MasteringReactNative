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


