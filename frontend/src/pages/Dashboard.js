import React, {useEffect, useState} from 'react';
import api from '../services/api'

import './styledash.css'
export default function Dashboard(){
    const [spots,setSpots] = useState([])
    const [pesquisa,setPesquisa] = useState("")
    
    //useEffect(()=>{
    //    async function loadPeople(){
            //const user_id = localStorage.getItem('user')
    //        console.log(pesquisa)
    //        const response = await api.get(`/encontrarUser?pesquisa=${pesquisa}`);
    //        setSpots(response.data) 
            
    //    }

    //    loadPeople()
   // },[])

    async function loadPeople(){
        //const user_id = localStorage.getItem('user')
        //e.preventDefault();
        console.log(pesquisa)
        const response = await api.get(`/encontrarUser?pesquisa=${pesquisa}`);
        setSpots(response.data) 
        
    }

    loadPeople()

    return(
        <>
         <h1>Bem-vindo {localStorage.getItem("nomeUser")}</h1>
         <br></br>

         <form onSubmit={loadPeople}>
            <input id="pesquisa" type="text" placeholder="Pesquisar" onChange={event => setPesquisa(event.target.value)}></input>
            
         </form>

         <ul className="spot-list">
            {spots.map(spot =>(
                <li  key={spot._id}>
                    <header style={{backgroundImage: `url(${spot.foto_url})`}} />
                    <strong>{spot.nome}</strong>
                    <span>{spot.cidade}</span>
                    <br></br>
                    <button>exemplo</button>
                </li>
            ))}
            </ul>
        </>
    );
}