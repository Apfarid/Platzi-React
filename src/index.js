import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Badge from './components/Badge'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import BadgeNew from './pages/BadgetNew'

ReactDOM.render(
    /*<Badge
        avatarUrl = "https://www.gravatar.com/avatar?d=identicon"
        firstName = "Anderson" 
        lastName= "Palacio"
        jobTitle="Frontend Engineer" 
        twitter="apfarid"
    />,*/
    <BadgeNew/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// 