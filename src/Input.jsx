import css from './Input.module.css'

export default function Input({ tipo, titulo, valor, placeholder, onChange }) {
    return (
        <div className={css.card}>
            <p>{titulo}</p>
            <input className={css.caixa} type={tipo} value={valor} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}