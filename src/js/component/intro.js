import React from 'react'

export const intro = () => {
    return (
        <div>
            <div className="row flex-row d-flex justify-content-center">
                <div className="m-2 texto p-2">
                    <h1>Ta Te Ti en react.js</h1>
                </div>
            </div>
            <div className="row flex-row d-flex justify-content-center">
                <div className="m-2 texto">
                    <h2>Pick a Weapon!</h2>
                </div>
            </div>
            <div className="row flex-row d-flex justify-content-center">
                <div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
                    <h1 className="marcas">{props.caja0}</h1>
                </div>
                <div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
                    <h1 className="marcas">{props.caja1}</h1>
                </div>
                <div className="m-2 cajita p-2 d-flex justify-content-center align-items-center">
                    <h1 className="marcas">{props.caja2}</h1>
                </div>
            </div>
        </div>
    )
}
