import './Cards.css';
import {Card} from 'react-bootstrap';  
export default function CardsDetails(props) {
    const {chName, cno,valid,id} =props.cardData;
  return (
    
    <div className="cards" >
    <Card style={{display:'grid', margin:'2px'}}>
     <div>
        <span className='headerText'>CardHolder Name : {chName}</span>
        <span className='createButton'><button id={id} onClick={props.deleteData} className='buttonClass'>Delete Card</button></span>         
     </div>
     <div>
        <span className='headerText'>Card Number: {cno}</span>
        <span>Valid Time:{valid} </span>
        <span className='createButton'><button id={id} onClick ={props.editData} className='buttonClass'>Edit Card</button></span>
     </div>
     </Card>
    </div>
  );
}
