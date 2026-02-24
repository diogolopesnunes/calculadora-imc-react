export default function Resultado({ titulo, imc }) {
    return (
        <div>
            <p>{titulo}:</p>
            <p>{imc}</p>
            {/* <button onClick={calcularIMC}>Calcular IMC</button> */}
        </div>
    )
}