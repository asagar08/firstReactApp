import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import { blog } from './Data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons';
import State from './State';
import Faqs from './Faqs'
import 'react-notifications/lib/notifications.css';
import { CSSTransition } from "react-transition-group"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Todolist from './Todolist';
import Tabs from './Tabs';


function App() {
  let obj = {
    name : 'Mdasgar',
    colg : 'BCA'
  }
  // console.log(blog);
  let showNotification=()=>{
    // NotificationManager.info('...welcome to my site');
    // NotificationContainer.error('....hi there...')
    NotificationManager.info('..csdf');
  }

  return (
    
    <div className="App" >
      {/* // how to use notification component */}
      <NotificationContainer />
     <button className='abc' onClick={showNotification}>Save</button>
      {/* // HERE END notification comp */}
     <Header obj={obj} username="asgar" >
       <h1 className='text-[40px]'>Header from App.js Header comp...</h1>
       <FontAwesomeIcon icon={faWalking} className='text-danger'/>
      </Header>
      <Faqs />
      <State />
      <div className='card-container'>
        {blog.map((v,i)=>{
          return(
            <Card  pitem={v} key={i}/>
          )
        })}
      </div>
      {/* <Card /> */}

      

    
     <Footer />

     <Todolist />

     <Tabs />

     
    </div>
  );


 
}

export default App;


function Card({pitem}){
  // console.log(pitem)
  return(
    <div className='card'>
       <h2>{pitem.title}</h2>
       <h2>{pitem.body}</h2>
    </div>
  )
}