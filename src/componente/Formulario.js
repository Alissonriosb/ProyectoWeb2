import React from 'react';

function formulario() {
    return(
        <div>
            <h1>Formulario Registro</h1>
            <form className='formulario'>
                <label>Nombre</label><br/>
                <input type='text'/><br/>
                <label>Correo Electronico</label><br/>
                <input type='email'/><br/>
                <label>contraseña</label><br/>
                <input type='password'/><br/>
                <label>Confirmar Contraseña</label><br/>
                <input type='password'/><br/>
                <input className='button' type='button' value='Registrar'/>
            </form>
            
        </div>
    );
}

export default formulario;