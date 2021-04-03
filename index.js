import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './app';
//import TMultiContextApp from './multicontextapp';
//import Video from './myvideo';
import reportWebVitals from './reportWebVitals';

//const App = React.lazy(() => import('./app'));
/*
const TMultiContextApp = React.lazy(() => 
	import('./multicontextapp')
	.then(module => {
		console.log("module :", module)
		return module //.default
		}
	))
;
*/

/*
const Video = React.lazy(() => 
  import('./myvideo2')
  .then(module => {
    console.log("module :", module)
    return module //.default
    }
  ))
;
*/


const MouseTracker = React.lazy(() => 
    import('./renderprops')
    .then(module => {
        console.log("module :", module)
        return module //.default
    }))
;


ReactDOM.render(
    <React.StrictMode>
      	<div>
          	 <Suspense fallback={<div>Loading...</div>}>
                	<section>
                  		{/*<TMultiContextApp user={{name: "Alexander"}} theme="light" />*/}
                      {/*<Video noControls={false} src="./Michael Phelps 2.mp4" />*/}
                      <MouseTracker />
                	</section>
            	</Suspense>
          </div>  
  	</React.StrictMode>
    , document.getElementById('root')
);

    /*
    <video controls width="600"
        src="./Michael Phelps 2.mp4"
        type="video/mp4"
    >
        Trouble here ?
    </video>
    */

/*
ReactDOM.render(
    <iframe src='./Michael Phelps 2.mp4'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
    />    
    , document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();