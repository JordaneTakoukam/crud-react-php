import React from 'react'

function Bouton({ icone, onClick, couleur }) {
    return (
        <button

            onClick={onClick}
            className={`${couleur} text-white p-2 rounded`}>
            {icone}
        </button>
    )
}

export default Bouton