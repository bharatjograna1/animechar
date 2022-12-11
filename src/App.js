/**
 * Developer : Bharat Jograna
 * Created : 11 Dec 2022
 * File Comment : app component file of project
*/
import { useEffect, useState } from 'react';
import axios from 'axios';
import AnimeCardCompo from './components/AnimeCardCompo';
import SecondTask from './components/SecondTask';
import './assets/css/index.css';

function App() {

  //states of component
  const [pageNo, setPageNo] = useState(0);
  const [query, setQuery] = useState("");
  const [responseData, setResponseData] = useState({});

  //hook to call RestAPI on every change of parameter like page no and searched query
  //it is small module so we don't need to implement otherwise we have to use redux aur toolkit to manage data or states of project.
  useEffect(()=>{

    axios.get(`https://api.jikan.moe/v4/characters?page=${pageNo}&limit=15&q=${query}&order_by=favorites&sort=desc`)
      .then(function (response) {
        setResponseData(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setResponseData({});
      });

  },[query, pageNo]);

  //function to handle onchange of searched query
  const handleSearchCharacter = (query) => {
    setPageNo(0)
    setQuery(query)
  }

  //function to handle onclick of next and back button
  const handleOnClick = (page) => {
    setPageNo(page)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>Search Anime Characters</div>
        <i className="fa fa-search icon"></i>
        <input 
          onChange={(e)=>
            setTimeout(() => {
              handleSearchCharacter(e.target.value)
            }, 600)}
        />
        <div className='total'>Total <b>{responseData.pagination?.items?.total || 0}</b> matching anime characters found</div>
      </header><hr></hr>
      <div>
        <AnimeCardCompo response={responseData} handleOnClick={handleOnClick} />
      </div>
      <SecondTask />
    </div>
  );
}

export default App;
