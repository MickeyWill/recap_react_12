import React, { useState } from 'react';

const PageSix = () => {

    var [value, setValue] = useState("")
    var [bouton, setBouton] = useState("")

    var copie = (e) => {
        value = e.target.value
        setBouton(value)
    }

    var un = () => {
        setBouton('1')
        if (bouton !== '') {
            setBouton(bouton + '1')
        }
    }

    var deux = () => {
        setBouton('2')
        if (bouton !== '') {
            setBouton(bouton + '2')
        }
    }
    var trois = () => {
        setBouton('3')
        if (bouton !== '') {
            setBouton(bouton + '3')
        }
    }
    var quatre = () => {
        setBouton('4')
        if (bouton !== '') {
            setBouton(bouton + '4')
        }
    }
    var cinq = () => {
        setBouton('5')
        if (bouton !== '') {
            setBouton(bouton + '5')
        }
    }
    var six = () => {
        setBouton('6')
        if (bouton !== '') {
            setBouton(bouton + '6')
        }
    }
    var deux = () => {
        setBouton('2')
        if (bouton !== '') {
            setBouton(bouton + '2')
        }
    }
    var sept = () => {
        setBouton('7')
        if (bouton !== '') {
            setBouton(bouton + '7')
        }
    }
    var huit = () => {
        setBouton('8')
        if (bouton !== '') {
            setBouton(bouton + '8')
        }
    }
    var neuf = () => {
        setBouton('9')
        if (bouton !== '') {
            setBouton(bouton + '9')
        }
    }
    var zero = () => {
        setBouton('0')
        if (bouton !== '') {
            setBouton(bouton + '0')
        }
    }
    var C = () => {
        setBouton('')
    }

    var plus = () => {
        setBouton('+')
        if (bouton !== '') {
            setBouton(bouton + '+')
        }
        if (bouton === '-') {
            setBouton(bouton + '+')
        }
    }
    var moins = () => {
        setBouton('-')
        if (bouton !== '') {
            setBouton(bouton + '-')
        }
    }
    var fois = () => {
        setBouton('*')
        if (bouton !== '') {
            setBouton(bouton + '*')
        }
    }
    var div = () => {
        setBouton('/')
        if (bouton !== '') {
            setBouton(bouton + '/')
        }
    }
    var egal = () => {
        setBouton(eval(bouton))
    }

    return (
        // PARTIE 1
        <div className="container">
            <h2 className="text-center">Création Calculatrice</h2>

            {/* PARTIE 2 */}
            <div className="container bg-dark py-3" style={{ width: 275 }}>

                <input onChange={copie} value={bouton} type="text" />

                <hr />
                <div className="row mt-2">
                    <div className="col-0.5 ml-4">
                        <button onClick={un} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>1</button><br />
                        <button onClick={quatre} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>4</button><br />
                        <button onClick={sept} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>7</button><br />
                        <button onClick={C} className="p-2 m-2 bg-danger text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>C</button><br />
                    </div>
                    <div className="col-0.5">
                        <button onClick={deux} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>2</button><br />
                        <button onClick={cinq} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>5</button><br />
                        <button onClick={huit} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>8</button><br />
                        <button onClick={zero} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>0</button><br />
                    </div>
                    <div className="col-0.5">
                        <button onClick={trois} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>3</button><br />
                        <button onClick={six} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>6</button><br />
                        <button onClick={neuf} className="p-2 m-2" style={{ border: "none", width: 35, borderRadius: 5 }}>9</button><br />
                        <button onClick={egal} className="p-2 m-2 bg-success text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>=</button><br />
                    </div>
                    <div className="col-0.5">
                        <button onClick={plus} className="p-2 m-2 bg-primary text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>+</button><br />
                        <button onClick={moins} className="p-2 m-2 bg-primary text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>-</button><br />
                        <button onClick={fois} className="p-2 m-2 bg-primary text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>*</button><br />
                        <button onClick={div} className="p-2 m-2 bg-primary text-white" style={{ border: "none", width: 35, borderRadius: 5 }}>/</button><br />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PageSix;