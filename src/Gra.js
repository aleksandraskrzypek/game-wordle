import React, {useEffect, useState} from 'react'
import "./style.css"
import {slownikTab} from "./slownik.js"

import logo from './tyutl-wordle.png'
import zielone from './zielone-wordle.png'
import pomaranczowe from './pomaranczowe-wordle.png'
import biale from './biale-wordle.png'

function Gra() {
    const [haslo, setHaslo] = useState('');
    const [slowoGracza1, setSlowoGracza1] = useState('');
    const [slowoGracza2, setSlowoGracza2] = useState('');
    const [slowoGracza3, setSlowoGracza3] = useState('');
    const [slowoGracza4, setSlowoGracza4] = useState('');
    const [slowoGracza5, setSlowoGracza5] = useState('');
    const [slowoGracza6, setSlowoGracza6] = useState('');

    const [tablica1, setTablica1] = useState([{ backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }]);
    const [tablica2, setTablica2] = useState([{ backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }]);
    const [tablica3, setTablica3] = useState([{ backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }]);
    const [tablica4, setTablica4] = useState([{ backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }]);
    const [tablica5, setTablica5] = useState([{ backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }]);
    const [tablica6, setTablica6] = useState([{ backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }, { backgroundColor: "white" }]);

    const [litera11, setLitera11] = useState('');
    const [litera12, setLitera12] = useState('');
    const [litera13, setLitera13] = useState('');
    const [litera14, setLitera14] = useState('');
    const [litera15, setLitera15] = useState('');

    const [litera21, setLitera21] = useState('');
    const [litera22, setLitera22] = useState('');
    const [litera23, setLitera23] = useState('');
    const [litera24, setLitera24] = useState('');
    const [litera25, setLitera25] = useState('');

    const [litera31, setLitera31] = useState('');
    const [litera32, setLitera32] = useState('');
    const [litera33, setLitera33] = useState('');
    const [litera34, setLitera34] = useState('');
    const [litera35, setLitera35] = useState('');

    const [litera41, setLitera41] = useState('');
    const [litera42, setLitera42] = useState('');
    const [litera43, setLitera43] = useState('');
    const [litera44, setLitera44] = useState('');
    const [litera45, setLitera45] = useState('');

    const [litera51, setLitera51] = useState('');
    const [litera52, setLitera52] = useState('');
    const [litera53, setLitera53] = useState('');
    const [litera54, setLitera54] = useState('');
    const [litera55, setLitera55] = useState('');

    const [litera61, setLitera61] = useState('');
    const [litera62, setLitera62] = useState('');
    const [litera63, setLitera63] = useState('');
    const [litera64, setLitera64] = useState('');
    const [litera65, setLitera65] = useState('');

    const [step, setStep] = useState(0);

    const [kliknieto1, setKliknieto1] = useState(false)
    const [kliknieto2, setKliknieto2] = useState(false)
    const [kliknieto3, setKliknieto3] = useState(false)
    const [kliknieto4, setKliknieto4] = useState(false)
    const [kliknieto5, setKliknieto5] = useState(false)

    
   


    const losowanie = () => {
    setHaslo(slownikTab[Math.floor(Math.random() * slownikTab.length)]);
    setStep(step + 1);
    console.log(haslo);
    }

    useEffect(() => {
        setSlowoGracza1(litera11 + litera12 + litera13 + litera14 + litera15);
        setSlowoGracza2(litera21 + litera22 + litera23 + litera24 + litera25);
        setSlowoGracza3(litera31 + litera32 + litera33 + litera34 + litera35);
        setSlowoGracza4(litera41 + litera42 + litera43 + litera44 + litera45);
        setSlowoGracza5(litera51 + litera52 + litera53 + litera54 + litera55);
        setSlowoGracza6(litera61 + litera62 + litera63 + litera64 + litera65);
      });
    
    const sprawdz1 = () => {
        litery1(slowoGracza1, haslo, tablica1);
        setKliknieto1(true); 
    }

    const sprawdz2 = () => {
        litery2(slowoGracza2, haslo, tablica2);
        setKliknieto2(true);
    }
    const sprawdz3 = () => {
        litery3(slowoGracza3, haslo, tablica3);
        setKliknieto3(true);
    }
    const sprawdz4 = () => {
        litery4(slowoGracza4, haslo, tablica4);
        setKliknieto4(true);
    }
    const sprawdz5 = () => {
        litery5(slowoGracza5, haslo, tablica5);
        setKliknieto5(true);
    }
    const sprawdz6 = () => {
        litery6(slowoGracza6, haslo, tablica6);
    }

    const litery1 = (slowo, haslo, tablica1) => {
        for (var i = 0; i < slowo.length; i++) {
            for (var j = 0; j < haslo.length; j++){
                if (slowo.charAt(i) === haslo.charAt(j)){
                    tablica1[i] = ({ backgroundColor: "orange" });
                    setTablica1([...tablica1]);
                }
            }

            if (slowo.charAt(i) === haslo.charAt(i)){
                tablica1[i] = { backgroundColor: "green" };
                setTablica1([...tablica1]);
            } 

        }

        if(haslo === slowo){
            setStep(2);
        }

        console.log(tablica1);
        return tablica1;
    }
    const litery2 = (slowo, haslo, tablica2) => {
        for (var i = 0; i < slowo.length; i++) {
            for (var j = 0; j < haslo.length; j++){
                if (slowo.charAt(i) === haslo.charAt(j)){
                    tablica2[i] = ({ backgroundColor: "orange" });
                    setTablica2([...tablica2]);
                }
            }

            if (slowo.charAt(i) === haslo.charAt(i)){
                tablica2[i] = { backgroundColor: "green" };
                setTablica2([...tablica2]);
            } 

        }

        if(haslo === slowo){
            setStep(2);
        }
        console.log(tablica2);
        return tablica2;
    }
    const litery3 = (slowo, haslo, tablica3) => {
        for (var i = 0; i < slowo.length; i++) {
            for (var j = 0; j < haslo.length; j++){
                if (slowo.charAt(i) === haslo.charAt(j)){
                    tablica3[i] = ({ backgroundColor: "orange" });
                    setTablica3([...tablica3]);
                }
            }

            if (slowo.charAt(i) === haslo.charAt(i)){
                tablica3[i] = { backgroundColor: "green" };
                setTablica3([...tablica3]);
            } 

        }

        if(haslo === slowo){
            setStep(2);
        }
        console.log(tablica3);
        return tablica3;
    }
    const litery4 = (slowo, haslo, tablica4) => {
        for (var i = 0; i < slowo.length; i++) {
            for (var j = 0; j < haslo.length; j++){
                if (slowo.charAt(i) === haslo.charAt(j)){
                    tablica4[i] = ({ backgroundColor: "orange" });
                    setTablica4([...tablica4]);
                }
            }

            if (slowo.charAt(i) === haslo.charAt(i)){
                tablica4[i] = { backgroundColor: "green" };
                setTablica4([...tablica4]);
            } 

        }

        if(haslo === slowo){
            setStep(2);
        }
        console.log(tablica4);
        return tablica4;
    }
    const litery5 = (slowo, haslo, tablica5) => {
        for (var i = 0; i < slowo.length; i++) {
            for (var j = 0; j < haslo.length; j++){
                if (slowo.charAt(i) === haslo.charAt(j)){
                    tablica5[i] = ({ backgroundColor: "orange" });
                    setTablica5([...tablica5]);
                }
            }

            if (slowo.charAt(i) === haslo.charAt(i)){
                tablica5[i] = { backgroundColor: "green" };
                setTablica5([...tablica5]);
            
            } 

        }

        if(haslo === slowo){
            setStep(2);
        }
        console.log(tablica5);
        return tablica5;
    }
    const litery6 = (slowo, haslo, tablica6) => {
        for (var i = 0; i < slowo.length; i++) {
            for (var j = 0; j < haslo.length; j++){
                if (slowo.charAt(i) === haslo.charAt(j)){
                    tablica6[i] = ({ backgroundColor: "orange" });
                    setTablica6([...tablica6]);
                }
            }

            if (slowo.charAt(i) === haslo.charAt(i)){
                tablica6[i] = { backgroundColor: "green" };
                setTablica6([...tablica6]);
            } 

        }

        if(haslo === slowo){
            setStep(2);
        } else {
            setStep(3)
        }
        
        console.log(tablica6);
        return tablica6;
    }

    
  

  return (
    <div className='gra-head'>
        
    {(() => {
        if (step===0) {
            return (
                <div className='div-losowanie'>

                    <div className='div-losowanie-logo'>
                        <img alt="" src={logo}/>
                    </div>

        
                    <p>
                       Cześć! Wylosuj hasło i spróbuj go odgadnąć, masz na to 6 prób! <br />
                       <div className='kreska'></div>
                       Po każdej próbie litery będą odpowiednio zaznaczone: <br />
                       <img alt='' src={zielone}/> <br />
                       Litera zaznaczona na zielono oznacza, że występuje ona dokładnie na tym miejscu <br />
                       <img alt='' src={pomaranczowe}/> <br />
                       Litera zaznaczona na pomaranczowo oznacza, że występuje ona w haśle, ale w innym miejscu <br />
                       <img alt='' src={biale}/> <br />
                       Litery, które nie zaznaczą się wcale, nie występują w haśle <br />

                       <br />
                       Powodzenia!


                    </p>


                    <button onClick={losowanie} className="button-losuj">Losuj</button>
                </div>
            )
        }
    })()}

    {(() => {
         if (step===1) {
            return (
                <div className='kontener-na-inputy'>
                <div className='inputs'>
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera11}
                        onChange={e => setLitera11(e.target.value)}
                        style= { tablica1[0] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera12}
                        onChange={e => setLitera12(e.target.value)}
                        style= { tablica1[1] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera13}
                        onChange={e => setLitera13(e.target.value)}
                        style= { tablica1[2] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera14}
                        onChange={e => setLitera14(e.target.value)}
                        style= { tablica1[3] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera15}
                        onChange={e => setLitera15(e.target.value)}
                        style= { tablica1[4] }
                    />
    
                    <button onClick={sprawdz1} className={kliknieto1? "button-zatwierdz-kliknieto" : "button-zatwierdz"}>Zatwierdź</button>
                </div>
                <div className='inputs-kolejny'>
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera21}
                        onChange={e => setLitera21(e.target.value)}
                        style= { tablica2[0] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera22}
                        onChange={e => setLitera22(e.target.value)}
                        style= { tablica2[1] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera23}
                        onChange={e => setLitera23(e.target.value)}
                        style= { tablica2[2] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera24}
                        onChange={e => setLitera24(e.target.value)}
                        style= { tablica2[3] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera25}
                        onChange={e => setLitera25(e.target.value)}
                        style= { tablica2[4] }
                    />
    
                    <button onClick={sprawdz2} className={kliknieto2? "button-zatwierdz-kliknieto" : "button-zatwierdz"}>Zatwierdź</button>
                </div>
                <div className='inputs-kolejny'>
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera31}
                        onChange={e => setLitera31(e.target.value)}
                        style= { tablica3[0] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera32}
                        onChange={e => setLitera32(e.target.value)}
                        style= { tablica3[1] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera33}
                        onChange={e => setLitera33(e.target.value)}
                        style= { tablica3[2] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera34}
                        onChange={e => setLitera34(e.target.value)}
                        style= { tablica3[3] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera35}
                        onChange={e => setLitera35(e.target.value)}
                        style= { tablica3[4] }
                    />
    
                    <button onClick={sprawdz3} className={kliknieto3? "button-zatwierdz-kliknieto" : "button-zatwierdz"}>Zatwierdź</button>
                </div>
                <div className='inputs-kolejny'>
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera41}
                        onChange={e => setLitera41(e.target.value)}
                        style= { tablica4[0] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera42}
                        onChange={e => setLitera42(e.target.value)}
                        style= { tablica4[1] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera43}
                        onChange={e => setLitera43(e.target.value)}
                        style= { tablica4[2] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera44}
                        onChange={e => setLitera44(e.target.value)}
                        style= { tablica4[3] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera45}
                        onChange={e => setLitera45(e.target.value)}
                        style= { tablica4[4] }
                    />
    
                    <button onClick={sprawdz4} className={kliknieto4? "button-zatwierdz-kliknieto" : "button-zatwierdz"}>Zatwierdź</button>
                </div>
                <div className='inputs-kolejny'>
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera51}
                        onChange={e => setLitera51(e.target.value)}
                        style= { tablica5[0] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera52}
                        onChange={e => setLitera52(e.target.value)}
                        style= { tablica5[1] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera53}
                        onChange={e => setLitera53(e.target.value)}
                        style= { tablica5[2] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera54}
                        onChange={e => setLitera54(e.target.value)}
                        style= { tablica5[3] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera55}
                        onChange={e => setLitera55(e.target.value)}
                        style= { tablica5[4] }
                    />
    
                    <button onClick={sprawdz5} className={kliknieto5? "button-zatwierdz-kliknieto" : "button-zatwierdz"}>Zatwierdź</button>
                </div>
                <div className='inputs-kolejny'>
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera61}
                        onChange={e => setLitera61(e.target.value)}
                        style= { tablica6[0] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera62}
                        onChange={e => setLitera62(e.target.value)}
                        style= { tablica6[1] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera63}
                        onChange={e => setLitera63(e.target.value)}
                        style= { tablica6[2] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera64}
                        onChange={e => setLitera64(e.target.value)}
                        style= { tablica6[3] }
                    />
                    <input
                        maxLength="1"
                        className='input'
                        type="text"
                        value= {litera65}
                        onChange={e => setLitera65(e.target.value)}
                        style= { tablica6[4] }
                    />
    
                    <button onClick={sprawdz6} className="button-zatwierdz">Zatwierdź</button>
                </div>







                </div>
            )
        }
    })()}

{(() => {
         if (step===2) {
            return (
                <div className='koncowka'>
                    <h1>Brawo! Udało Ci się odgadnąć hasło: {haslo}!</h1>
                    <p>Aby spróbować jeszcze raz, odśwież stronę :)</p>
                </div>
                )
        }
    })()}

{(() => {
         if (step===3) {
            return (
                <div className='koncowka'>
                    <h1>Tym razem nie udało Ci się odgadnąć hasła: {haslo} :(</h1>
                    <p>Spróbuj jeszcze raz, odświeżając stronę :)</p>
                </div>
                )
        }
    })()}

   


        

    </div>
  )
}

export default Gra