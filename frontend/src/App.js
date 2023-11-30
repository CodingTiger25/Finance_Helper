import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios"

function App() {

  const [balance, setBalance] = useState(0);

  const [billName, setBillName] = useState();
  const [billCost, setBillCost] = useState();
  const [bills, setBills] = useState([]);

  function addItem()
  {
      document.getElementById('addBill').style.display = 'block';
  }

    function closeItem()
    {
        document.getElementById('closeBill').style.display = 'none';
    }

    useEffect(() => {
        axios.get("http://localhost:3000/bills").then((res) => {
            setBills(res.data);
        });
    }, []);

  console.log(bills);

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

            <div className="namingCon">
                <div className="nameCol">
                    <p>Name</p>
                </div>

                <div className="priceCol">
                    <p>Price</p>
                </div>
            </div>


            {bills.map((i) =>
                <div key={i.id}>
                    <div className="billName">
                        <div className="checkBill">
                            <input type={"checkbox"}/>
                        </div>

                        <p>{i.name}</p>
                    </div>

                    <div className="billAmount">
                        <p>{i.price}</p>
                    </div>

                </div>

            )}
        </div>
    </div>
  );
}

export default App;
