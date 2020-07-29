import React, {useEffect, useState} from 'react';
import api from '../services/api'

import './styledash.css'
export default function Dashboard(){
    const [spots,setSpots] = useState([])
    
    useEffect(()=>{
        async function loadPeople(){
            const response = await api.get('/listarTodos')   
            setSpots(response.data) 
        }
        loadPeople()
    },[])

    async function handleDelete(user_id){
        await api.post(`/delete/${user_id}`)
    }


    return(
        <>
         <h1>Bem-vindo {localStorage.getItem("nomeUser")}</h1>
         <br></br>


         <ul className="spot-list">
            {spots.map(spot =>(
                <li  key={spot._id}>
                    <header style={{backgroundImage: `url(${spot.foto_url})`}} />
                    <strong>{spot.nome}</strong>
                    <span>{spot.cidade}</span>
                    <br></br>
                    <button onClick={() => handleDelete(spot._id)}>Delete</button>
                </li>
            ))}
            </ul>
        </>
    );
}