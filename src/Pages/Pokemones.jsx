import React, { useEffect, useState } from 'react';
import { FormSelect } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Pokemones = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const [pokemones, setPokemones] = useState([]);
  const [selectPokemon, setSelectPokemon] = useState(0);
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

   useEffect ( () => {
     getPokemones();
   },[]); 

    const getPokemones = async () => {
    // Cargando   
     setLoading(true);
     try {
      const respta = await fetch(url)  ;
      if ( !respta.ok ) setError(true); //throw ('No Hay Respuesta...')
      const data = await respta.json();
      console.log(data.results);  
      setPokemones(data.results);
     } 
     catch (error) 
     {
       console.log(error)
     } 
     setLoading(false);
    }

   if ( loading ) return ( 
                           <div className="container">
                           <h2>Cargando, Espere un momento...</h2>
                         </div>
                         );

   if ( error ) return ( 
                          <div className="container">
                          <h2>Pokemones no Encontrados..</h2>
                        </div>
                        );

  const handleClick = () =>{
    if (selectPokemon) {
      navigate(`/pokemones/${selectPokemon}`);
    }
    else{
      setError1(true);
    }
    
  } 

  return (
    <>
      <div className="container my-4 d-flex flex-column align-items-center w-auto h-auto pb-3">
        <FormSelect className="w-50 h-50 my-3" 
            onChange={(e) => setSelectPokemon(e.target.value)}
            arial-label="Select Pokemon"
        >
            <option key={0} value={0}>Seleccionar un Pokemón</option>
            {
              pokemones.map((item,index)=>{
                return(
                <option key={index} value={`${index+1}`}>{item.name}</option>
                )
              })
            }  
          </FormSelect>
          <button onClick={handleClick}>Ver Detalle</button>
        </div>
        {error1 && <div className="text-danger">Debe seleccionar un ID</div>}
    </>
  );
}

export default Pokemones;