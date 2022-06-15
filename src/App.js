import './App.css';
import CardsDetails from './Card';
import {useState} from 'react';
import AddCard from './AddCard';

function App() {
const data = [{ id: Math.random(), chName: "Ravi", cno:"1234556", valid:"12/23", cvv:"233"},{id: Math.random(), chName: "Shyam", cno:"1234556", valid:"12/23",cvv:"544"}]
let [listData, updateListData] = useState(data);
const [editedData, updateEditDasta] = useState({});
const [showCreate, updateshowCreate] = useState(false);

const addCard = () => {
  updateshowCreate(true)
}

const updateData= (ele) => {
  if(ele.id){
   listData =listData.filter((elet)=> Number(elet.id) !== Number(ele.id))
  }else {
  ele["id"] = Math.random();
  }
  updateListData([...listData,ele]);
  updateEditDasta({});
  updateshowCreate(false);
}

const deleteData = (ele) => {
  console.log(ele.target);
const newData = listData.filter((elet)=> Number(elet.id) !== Number(ele.target.id))
  updateListData([...newData])
}
const editData = (ele) => {
  const newData = listData.find((elet)=> Number(elet.id) !== Number(ele.target.id));
  updateEditDasta(newData);
  updateshowCreate(true);
  }

const listItem = listData.map((ele)=> <CardsDetails cardData={ele} deleteData={deleteData} editData={editData}/>)
  return (
    <div className="App">
    <div>
    <span className='headerText'>List of Credit Cards</span>
    <button className='createButton' onClick={addCard}> Add Card Details</button>
      </div>
    <div className='cardDetails'><ul>
      {listItem}
      </ul>
      </div>
      {showCreate?<AddCard updateData={updateData} editedData={editedData}/>:""}
    </div>
  );
}

export default App;
