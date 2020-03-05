import React, { useState } from 'react';

const PageCinq = () => {

    var [img, setImg] = useState([<img src="./img/oeuf.jpg" style={{width: 100, height: 100}} alt=""/>])

    var ajouter = () => {
        var copieImg = [...img]
        var copie2Img = [...img] 
        copieImg.push(img[0])
        copie2Img.push(img[0])
        setImg(copieImg)
        if (copieImg.length === 0) {
            setImg(copie2Img)
        }

    }

    var retirer = () => {
        var copie = [...img]
        var copie2 = [...img]
        copie.pop()
        copie2.push(img[0])
        setImg(copie)
        if (copie.length === 0) {
            setImg(img)
        }
    }
    
    var removeall = () => {
        var trash = [...img]
        var fill = [...img]
        fill.push(img[0])
        trash.splice(0, img.length-1)
        setImg(trash)
        if (trash.length === 0) {
            setImg(fill)
        }
    }

    return(
        <div className="container">
            <div>
                <h2>Générer des éléments du DOM</h2>
                <p>Cliquer sur le bouton ci-dessous pour générer des oeufs</p>
                {img}   
                <br/>
                <button onClick={ajouter} className='mt-5'>Ajouter un oeuf</button><br/>
                <button onClick={retirer}>Supprimer un oeuf</button><br/>
                <button onClick={removeall}>Supprimer tous les oeufs</button>
            </div>
        </div>
    )
}

export default PageCinq;