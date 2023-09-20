import './Cards.css';

export default function Cards() {
    return (
        <>
            <MyCard>
                <h3>Hello World!</h3>
            </MyCard>

            <div className="card">
                <h3>Hello World 2!</h3>
            </div>

            <MyCard>
                <h3>Hello World 3!</h3>
            </MyCard>

            <MyButton>
                לחץ כאן
            </MyButton>

            <MyInput type="text" name="firstName">שלום לכולם</MyInput>
        </>
    )
}

export function MyCard({ children }) {
    return (
        <div className="card">{children}</div>
    )
}

export function MyButton({ children }) {
    return (
        <button>{children}</button>
    )
}

export function MyInput({ type, name, children }) {
    return (
        <input type={type} name={name} value={children} />
    )
}
