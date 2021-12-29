import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')

const handleSearch = (e) => setSearchValue(e.target.value);


const handleSubmit = (e) => {
  e.preventDefault();
};


const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'game of thrones '},
  headers: {
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': 'b00dfcc5a8msh768e46d829e8f2fp111680jsncfc6f2dc2010'
  }
};


useEffect(() => {
 const fetchdata = () => {
  axios.request(options)
  .then(function (response)
  
   {
     console.log(response.data)
   setUsers(response.data.d)
    
  })

  .catch(function (error) {
    console.error(error);
  });
  
 }
 fetchdata()
}, [])

// useEffect(() => {

//   const getUsers=()=>{
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response =>response.json()  
//   )
//   .then((data)=>setUsers(data))
//   .catch((err)=>console.log(err))
// };
// getUsers();
// // setLoading(false);
// console.log(users)
// }, [])
  return (
    <div className="App">
       <form  onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search for images..."
        />
        <button onClick >search</button>
        </form>
    
   {
     users.map(el=>
      <div>
        
        <img src={el.i.imageUrl}></img>
        <h2> {el.l}</h2>
        </div>
      )
   }
    </div>
  );
}

export default App;
