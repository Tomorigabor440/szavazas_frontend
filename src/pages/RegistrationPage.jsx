import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import TextBox from "../components/TextBox"
import Button from "../components/Button"
import { regisztracio } from "../api";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage(){
    const navigation=useNavigate();

    const[email, setEmail]=useState("");
    const[Felhasznalonev, setFelhasznalonev]=useState("");
    const[jelszo1, setJelszo1]=useState("");
    const[jelszo2, setJelszo2]=useState("");
    return(
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div style={{minWidth: 700}}>
                <div className="text-center fs- mb-5">Regisztráció</div>
                <TextBox title={"E-mail"} type={"email"} placeholder={"example@example.com"}value={email} setValue={setEmail}/>
                <TextBox title={"Felhasznalónév"} type={"email"} placeholder={"John Doe"} value={Felhasznalonev} setValue={setFelhasznalonev}/>
                <TextBox title={"Jelszó"} type={"password"} placeholder={"******"} value={jelszo1} setValue={setJelszo1}/>
                <TextBox title={"Jelszó megerősítés"} type={"password"} placeholder={"******"} value={jelszo2} setValue={setJelszo2}/>
                <div className="text-center mt-2">
                    <Button content={"Regisztráció"} color={"dark"} onClick={async()=>{
                        if(!email || !Felhasznalonev || !jelszo1 || !jelszo2){
                            return alert("hiányos beviteli adatok(ok)!")
                        }
                        if(jelszo1!==jelszo2){
                            return alert("a jelszavak nem egyeznek")
                        }
                        const res=await regisztracio(email,Felhasznalonev,jelszo1)
                        alert(res.message)
                        if(res.result){
                            navigation('/login')
                        }
                    }}/>
                </div>
            </div>
        </div>
    )
}