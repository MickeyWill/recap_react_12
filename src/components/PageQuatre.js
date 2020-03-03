import React from 'react';


const PageQuatre = () => {





    return(
        <div className="container">
            <div className="row bg-secondary p-5">

                <div className="col-4 bg-primary p-5 mr-5">
                    <div className="bg-danger" style={{height: 50, width:50}}></div>
                </div>
                <div className="col-4 bg-primary p-5">
                    <div className="bg-primary" style={{height: 50, width:50}}></div>
                </div> 
            </div>
                <button>Changer place</button>
                <button>nombre de clicks: </button>
        </div>
    )
}

export default PageQuatre;