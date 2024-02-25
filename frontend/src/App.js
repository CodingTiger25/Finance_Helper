import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios"

function App() {

  let [balance, setBalance] = useState(0);

  const [billName, setBillName] = useState([]);
  const [billCost, setBillCost] = useState();
  //const [bills, setBills] = useState([]);

      function addItem()
      {
          document.getElementById('addBill').style.display = 'block';
      }
    function closeItem(e)
    {
        e.preventDefault();
        document.getElementById('closeBill').style.display = 'none';
    }

    function addBalance()
    {
        document.getElementById('addBalance').style.display = 'block';
    }

    function submitBalance(e)
    {
       // e.preventDefault()
        document.getElementById("addBalance").style.display ="none";
    }

    function deductBalance(e)
    {


        document.querySelector("button").addEventListener("click", function ()
        {

        })
       /* let reduce_c = document.getElementById("reduce");

        if(reduce_c.checked)
        {
            setBalance(balance - e.price);
        }*/
    }

    function displayName(List)
    {
        return List.map((d) => (
            <div>
                <li>
                    {d.name}
                </li>
            </div>
        ))
    }

    function displayPrice(List)
    {
        return List.map((d) => (
            <div>
                <li>
                    {d.price}
                </li>
            </div>
        ))
    }



    useEffect(() => {
        axios.get("http://localhost:3000/account").then((res) => {
           // setBills(res.data);
            setBalance(res.data.balance);
            setBillName(res.data.bills);
            console.log(res.data)
        });
       /* axios.get("http://localhost:3000/account/balance").then((res) => {
            setBalance(res.data);
        });*/

    }, []);


  console.log(balance);
  console.log(billName);


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
            <button onClick={addBalance}>Add balance</button>
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

        <div id="addBalance">
            <input onChange={(e) => setBalance(parseInt(e.target.value))} type={"text"}/>
            <label>Enter balance: </label>
            <button onClick={submitBalance}>Submit amount</button>

        </div>

        <div className= "Bill-container">

            <div className="namingCon">
                <div className="paidCol">
                    Paid
                </div>
                <div className="nameCol">
                    <p>Name</p>

                    {displayName(billName)}
                </div>

                <div className="priceCol">
                    <p>Price</p>

                    {displayPrice(billName)}
                </div>

                <div className="dueDateCol">
                    Due date
                </div>
            </div>


           {/* {bills.map((i) =>
                <div key={i.id}>
                    <div className="billName">
                        <div className="checkBill">
                            <input type={"checkbox"} id = "reduce" onClick={deductBalance(i.price)}/>
                        </div>

                        <p>{i.name}</p>
                    </div>

                    <div className="billAmount">
                        <p>{i.price}</p>
                    </div>

                    <div className="dueDate">
                        <p>{i.duedate}</p>

                    </div>

                </div>

            )}*/}
        </div>
    </div>
  );
}

export default App;
