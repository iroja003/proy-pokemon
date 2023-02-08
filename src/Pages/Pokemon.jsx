import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import logo from '../assets/img/Logo-Pokemon3.png'


const Pokemon = () => {
    // Parametro
    const params = useParams();
    // Estado de carga
    const [loading,setLoading] = useState(false);
    // Estado de Error
    const [error,setError] = useState(false);
    // Objeto Pokemon    
    const [pokemon,setPokemon] = useState([]);
    // Estado Nevigate para forzar enrutamiento.
    const navigate = useNavigate();

    // Obtener Objeto Pokemon    
    const getPokemon = async () => {
      setLoading(true);
      try {
        const respta = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
        console.log(respta);
        if ( !respta.ok) setError(true);
        const data   = await respta.json();
        setPokemon(data);
        console.log(data);          
      } catch (error) 
      {
        console.log(error);
      }
      setLoading(false);
    }

    useEffect ( () => {
         getPokemon();
      }, [])

      if ( loading ) return ( 
        <div className="container">
        <h2>Cargando, Espere un momento...</h2>
      </div>
      );

if ( error ) return ( 
       <div className="container">
       <h2>Pokemon no Encontrado..</h2>
     </div>
     );

  // Pagina de un Pokemon
  return (
    <>
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={pokemon.sprites?.other?.dream_world?.front_default}alt="Foto Pokemon"  />
          <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Text>
              <div className="w-50">
                        <ul className="list-group">
                            {pokemon.stats?.map((item) => {
                                return (
                                    <li className="list-group-item" key={item.stat.name}>
                                        <div className="d-flex justify-content-between mb-5" >
                                            <p className="h5 me-2">{item.stat.name.toUpperCase()}:</p>
                                            <p className="h5">{item.base_stat}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
              </div>          
              </Card.Text>
            </Card.Body>
        </Card>
        <div>
          <button className="btn btn-dark my-3" onClick={() => navigate('/pokemones')}>🏚</button>
        </div>
    </>
  )
}

export default Pokemon