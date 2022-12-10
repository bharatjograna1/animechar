import { useEffect, useState } from 'react';
import axios from 'axios';
import AnimeCardCompo from './components/AnimeCardCompo';
import SecondTask from './components/SecondTask';
import './index.css';

function App() {

  const [pageNo, setPageNo] = useState(0);
  const [query, setQuery] = useState("");
  const [responseData, setResponseData] = useState({});

  useEffect(()=>{

    axios.get(`https://api.jikan.moe/v4/characters?page=${pageNo}&limit=15&q=${query}&order_by=favorites&sort=desc`)
      .then(function (response) {
        // handle success
        setResponseData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setResponseData({});
      });

  },[query, pageNo]);

  const handleSearchCharacter = (query) => {
    setPageNo(0)
    setQuery(query)
  }

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
