import { useState } from "react";
import css from "./App.module.css";
import Input from "./Input";
import Resultado from "./Resultado";
import ResultadoLinha from "./ResultadoLinha";

export default function App() {

    const [altura, setAltura] = useState(0);
    const [nome, setNome] = useState();
    const [peso, setPeso] = useState(0);
    const imc_p = peso / ((altura/100) * (altura/100));
    // const imc = imc_p.toFixed(2);
    const imc = isNaN(imc_p) || imc_p === Infinity ? "" : imc_p.toFixed(2)
    const categoria_imc = isNaN(imc_p) || imc_p === Infinity ? "" : categoria(imc);
    // const [imc, setIMC] = useState(0);

    function alterarAltura(e) {
        setAltura(e.target.value);

        // calcularIMC();
    }

    function alterarNome(e) {
        setNome(e.target.value);
    }

    function alterarPeso(e) {
        setPeso(e.target.value);

        // calcularIMC();
        
    }

    function categoria(imc) {
        if (imc < 18.5) {
            return "Abaixo do peso";
        }
        else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        }
        else if (imc >= 25 && imc < 30) {
            return "Sobrepeso";
        }
        else if (imc >= 30 && imc < 35) {
            return "Obesidade grau I";
        }
        else if (imc >= 35 && imc < 40) {
            return "Obesidade grau II";
        }
        else if (imc >= 40) {
            return "Obesidade grau III";
        }
    }

    // function calcularIMC() {
    //     const resultado = peso / ((altura/100) * (altura/100));
    //     setIMC(resultado.toFixed(2));
    // }

    return (
        <div className={css.calculadoraDiv}>
            <h1>Calculadora de IMC</h1>
            <div className={css.resultado}>
                <div className={css.resultado1}>
                    <ResultadoLinha titulo="Nome" imc={nome}/>
                    <ResultadoLinha titulo="Peso" imc={peso + "kg"} />
                    <ResultadoLinha titulo="Altura" imc={altura + "cm"} />
                </div>
                <div className={css.resultado2}>
                    <Resultado titulo="Seu IMC é" imc={imc} />
                    <Resultado titulo="Sua categoria é" imc={categoria_imc} />
                </div>
            </div>
            <Input tipo="text" titulo="Seu nome:" valor={nome} placeholder="Digite seu nome aqui" onChange={alterarNome} />

            <Input tipo="number" titulo="Seu peso em kg:" valor={peso} placeholder="Digite seu peso aqui" onChange={alterarPeso} />

            <Input tipo="number" titulo="Sua altura em cm:" valor={altura} placeholder="Digite sua altura aqui" onChange={alterarAltura} />


        </div>
    )
}