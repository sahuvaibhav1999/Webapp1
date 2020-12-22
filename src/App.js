//import logo from './logo.svg';
import './App.css';
import JSONDATA from './csvjson.json'
import {useState} from 'react'
//ifsc,bank_id,branch,address,city,district,state,bank_name
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App">
      <h1 id="bank-branches">Bank Branches</h1>
      <div>  
        <select id="sel" onChange={event => {setSearchTerm(event.target.value)}}>  
          <option value = "banglore">Banglore </option>  
          <option value = "mumbai"> Mumbai </option>  
          <option value = "pune"> Pune </option>  
          <option value = "delhi"> Delhi </option>  
          <option value = "chennai"> Chennai </option>  


        </select>  

        <input id="search-bar" type="text" placeholder="Search" onChange={event => {setSearchTerm(event.target.value)}}/>
        <div>
              <table>
                <thead>

              <tr>
                <th>IFSC</th>
                <th>BANK_ID</th> 
                <th>BRANCH</th>
                <th>ADDRESS</th>
                <th>CITY</th> 
                <th>DISTRICT</th>
                <th>STATE</th> 
                <th>BANK NAME</th>
              </tr>
                </thead>
        {JSONDATA.filter((val)=>{
          if (searchTerm === "") {
            return val
          }
          else if (val.city.toLowerCase().includes(searchTerm.toLowerCase())){
            if(val.ifsc.toLowerCase().includes(searchTerm.toLowerCase()) || val.bank_id.toString().toLowerCase().includes(searchTerm.toLowerCase()) 
            || val.branch.toLowerCase().includes(searchTerm.toLowerCase()) || val.address.toLowerCase().includes(searchTerm.toLowerCase())
            || val.city.toLowerCase().includes(searchTerm.toLowerCase()) || val.district.toLowerCase().includes(searchTerm.toLowerCase())
            || val.state.toLowerCase().includes(searchTerm.toLowerCase()) || val.bank_name.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          } 
          else if (val.ifsc.toLowerCase().includes(searchTerm.toLowerCase()) || val.bank_id.toString().toLowerCase().includes(searchTerm.toLowerCase()) 
            || val.branch.toLowerCase().includes(searchTerm.toLowerCase()) || val.address.toLowerCase().includes(searchTerm.toLowerCase())
            || val.city.toLowerCase().includes(searchTerm.toLowerCase()) || val.district.toLowerCase().includes(searchTerm.toLowerCase())
            || val.state.toLowerCase().includes(searchTerm.toLowerCase()) || val.bank_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val
          }
          
        }).map((val, key) => {
          return (
            
                <tr>
                  <th>{val.ifsc}</th>
                  <th>{val.bank_id}</th>
                  <th>{val.branch}</th>
                  <th>{val.address}</th>
                  <th>{val.city}</th>
                  <th>{val.district}</th>
                  <th>{val.state}</th>
                  <th>{val.bank_name}</th>
                </tr>           
          )
        })}
        </table>
              </div>
      </div>
    </div>
  );
}
export default App;