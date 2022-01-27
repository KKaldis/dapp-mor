
export default function ButtonRGB({ label, click }) {
    return <div class="button" onClick={click}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {label}
    </div>
}


