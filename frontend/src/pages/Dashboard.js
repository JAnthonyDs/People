import React, {useEffect, useState} from 'react';
import api from '../services/api'

import './styledash.css'
export default function Dashboard(){
    const [spots,setSpots] = useState([])
    useEffect(()=>{
        async function loadPeople(){
            const user_id = localStorage.getItem('user')
            const response = await api.get('/listarTodos');

            setSpots(response.data)
        }

        loadPeople()
    },[])

    return(
        <>
         <h1>Bem-vindo ???</h1>
         <ul className="spot-list">
            {spots.map(spot =>(
                <li  key={spot._id}>
                    <header style={{backgroundImage: `url(${spot.foto_url})`}} />
                    <strong>{spot.nome}</strong>
                    <span>{spot.cidade}</span>
                </li>
            ))}
            </ul>
        </>
    );
}