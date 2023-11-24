import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [balance, setBalance] = useState(0);

  function addItem()
  {
      document.getElementById('addBill').style.display = 'block';
  }

    function closeItem()
    {
        document.getElementById('closeBill').style.display = 'none';
    }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Financial Tracker
        </p>
      </header>
        <div className= "balance">
            ${balance}
        </div>

        <div>
            <button onClick={addItem}>Add item</button>
        </div>

        <div>
            <form id="addBill">

               <label> Bill name: </label>
                <input type={"text"}/>


                <label> Bill cost: </label>
                <input type={"text"}/>

                <button onClick={closeItem}>X</button>

            </form>
        </div>

        <div className= "Bill-container">

        </div>
    </div>
  );
}

export default App;
