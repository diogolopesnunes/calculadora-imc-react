import { useState } from "react";
import css from "./App.module.css";

export default function App() {

    const [altura, setAltura] = useState(0);
    const [nome, setNome] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setIMC] = useState(0);

    function alterarAltura(e) {
        setAltura(e.target.value);

        calcularIMC();
    }

    function alterarNome(e) {
        setNome(e.target.value);
    }

    function alterarPeso(e) {
        setPeso(e.target.value);

        calcularIMC();
        
    }

    function calcularIMC() {
        const resultado = peso / ((altura/100) * (altura/100));
        setIMC(resultado.toFixed(2));
    }

    return (
        <div className={css.calculadoraDiv}>
            <p>Seu nome: {nome}</p>
            <input type="text" value={nome} placeholder="Digite seu nome aqui" onChange={alterarNome} />

            <p>Sua peso em kg: {peso}</p>
            <input type="number" value={peso} placeholder="Digite seu peso aqui" onChange={alterarPeso} />

            <p>Sua altura em cm: {altura}</p>
            <input type="number" value={altura} placeholder="Digite sua altura aqui" onChange={alterarAltura} />

            <p>Seu IMC: {imc}</p>
            <button onClick={calcularIMC}>Calcular IMC</button>
        </div>
    )
}