
import { useEffect, useState } from 'react'
import './index.css'
import { Carts } from './carts';
import apiClients from './api-clients';

export interface Platform{
  id:number;
  name:string;
  slug:string;
}

export interface Game{
  id:number;
  name:string;
  background_image:string;
  parent_platforms:{platform:Platform}[]
}
interface FetchGameResponse {
  count: number;
  results: Game[]
}

function App() {
  
  const [games, setGames] = useState([])

  useEffect(()=>{ 
    apiClients
      .get<FetchGameResponse>('/games')
      .then(res => {
         setGames(res.data.results)
       })
   },[])

  return (
    <> 
    { games.map((game) => ( <Carts game={game} /> ) ) }
    </>
  )
}

export default App
