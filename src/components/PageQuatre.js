import React, { useState } from 'react';


const PageQuatre = () => {

    var [carre, setCarre] = useState({
        class: "bg-danger",
    })
    
    var [carre2, setCarre2] = useState({
        class: "bg-primary",
    })

    var changerCarre = () => {
        return (
            setCarre({
                class: "bg-primary",
            }),
            setCarre2({
                class: "bg-danger",
            })
        )
    }

    var changerCarre2 = () => {
        return (
            setCarre({
                class: "bg-danger",
            }),
            setCarre2({
                class: "bg-primary",
            })
        )
    }

    return (
        <div className="container">
            <div className="row bg-secondary p-5">

                <div className="col-4 bg-primary p-5 mr-5">
                    <div className={carre.class} style={{ height: 50, width: 50 }}></div>
                </div>
                <div className="col-4 bg-primary p-5">
                    <div className={carre2.class} style={{ height: 50, width: 50 }}></div>
                </div>
            </div>
            <button onClick={carre.class === 'bg-danger' ? changerCarre : changerCarre2}>Changer place</button>
            <button>nombre de clicks: </button>
        </div>
    )
}

export default PageQuatre;