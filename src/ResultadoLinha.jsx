import css from "./ResultadoLinha.module.css";

export default function ResultadoLinha({ titulo, imc }) {
    return (
        <div>
            <p className={css.texto}>{titulo}: {imc}</p>
            {/* <button onClick={calcularIMC}>Calcular IMC</button> */}
        </div>
    )
}