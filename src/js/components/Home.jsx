import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {

	// ✅ PATRÓN POSITIVO: Uso correcto de useState
	// ¡Excelente! Has dado el salto de setInterval (Simple Counter) a useState
	// Sugerencia: Renombrar a 'activeLight' es más descriptivo que 'active'
	const [active,setActive] = useState();

		return (
		<div className="min-vh-100 d-flex">
			<div className="d-flex bg-dark rounded m-auto flex-column p-3">
				{/* ⚠️ ANTI-PATRÓN: Usa == en vez de === (puede causar bugs) */}
				{/* ⚠️ OPORTUNIDAD DE MEJORA: Lógica redundante - comparas toda la clase en vez de solo el color */}
				{/* Sugerencia: Guardar solo 'red' en el estado, y usar template literals para las clases */}
				{/* Ejemplo: className={`rounded-circle m-1 red ${active === 'red' ? 'selected-red' : ''}`} */}
				<div className={active=="rounded-circle m-1 red"? active+" selected-red" : "rounded-circle m-1 red"} style={{width: "75px",height: "75px"}} onClick={()=>{
					setActive("rounded-circle m-1 red")
				}}></div>
				{/* ⚠️ CÓDIGO REPETITIVO: Las tres luces tienen lógica casi idéntica (viola DRY) */}
				{/* Sugerencia: Crear función helper selectLight(color) para reutilizar */}
				<div className={active=="rounded-circle m-1 yellow"? active+" selected-yellow" : "rounded-circle m-1 yellow"} style={{ width: "75px", height: "75px" }} onClick={()=>{
					setActive("rounded-circle m-1 yellow")
				}}></div>
				{/* ⚠️ FUNCIONALIDAD FALTANTE: No hay toggle - no puedes apagar la luz haciendo clic de nuevo */}
				{/* Sugerencia: if (active === color) setActive(null); else setActive(color); */}
				<div className={active=="rounded-circle m-1 green"? active+" selected-green" : "rounded-circle m-1 green"} style={{ width: "75px", height: "75px" }} onClick={()=>{
					setActive("rounded-circle m-1 green")
				}}></div>
			</div>
		</div>
	);
};

export default Home;