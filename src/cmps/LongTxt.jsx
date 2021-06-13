import { useState } from "react"

export function LongTxt({ text }) {

    let desc = ''
    const [isLongTxtShown, toggleLongTextShown] = useState(false)
    
    desc = isLongTxtShown ? text : text.substring(0, 150)

    return <div className={`fs14 ${desc.length >= 150 ? 'pointer' : ''}`}
        onClick={() => toggleLongTextShown(!isLongTxtShown)}>
        <p className="d-inline">{desc}</p>
        {desc.length >= 150 &&
            <span className="clr1">{isLongTxtShown ? ' ▲' : '... ▼'}</span>}
    </div>
}