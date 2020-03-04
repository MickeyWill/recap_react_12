import React, { useState } from 'react';

const PageUn = () => {

    const [titre, setTitre] = useState({
        titre: "titre", 
        class: "text-center text-white"
    })  

    const changerTitre = () => {
        return(
            setTitre({
                titre: "titre modifié",
                class: "text-center text-dark bg-danger"
            })
        )
    }
    
    const changerTitre2 = () => {
        return(
            setTitre({
                titre: "titre",
                class: "text-center text-white"
            })
        )
    }
    

    return(
        <div className="container bg-primary">
            <h2 className={titre.class}>{titre.titre}</h2>
            <button onClick={titre.class === "text-center text-white" ? changerTitre : changerTitre2} className="my-5">YOU SON OF A BITCH, I'M IN!  </button>
        </div>
    )
}


export default PageUn;