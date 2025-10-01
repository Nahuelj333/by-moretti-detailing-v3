// Seleccionamos las tarjetas y el modal
const tarjetas = document.querySelectorAll(".tarjeta-servicios");
const modal = document.getElementById("modal");
const modalContenido = modal.querySelector(".modal-contenido");

// Contenido dinámico para cada servicio
const contenidoServicios = {
	lavados: `
    <button class="cerrar">X</button>
    <h2>Lavados y Detailing</h2>
    <ul>
      <li><strong>Lavado Premium:</strong> Limpieza exterior e interior con productos de alta calidad.</li>
      <li><strong>Lavado de Chasis:</strong> Remueve barro y suciedad de la parte inferior del auto.</li>
      <li><strong>Lavado de Motor:</strong> Limpieza segura de componentes sin dañar cableado.</li>
      <li><strong>Limpieza Interior:</strong> Tapizados, alfombras y plásticos en profundidad.</li>
    </ul>
  `,
	bollos: `
    <button class="cerrar">X</button>
    <h2>Sacabollos</h2>
    <p>Eliminamos bollos y abolladuras sin dañar la pintura original, utilizando herramientas de precisión.</p>
  `,
	pintura: `
    <button class="cerrar">X</button>
    <h2>Chapa y Pintura</h2>
    <p>Reparamos golpes y rayones, eliminamos swirls y marcas de lavado para un acabado como recién salido de concesionaria.</p>
  `,
	detalles: `
    <button class="cerrar">X</button>
    <h2>Detalles Exteriores</h2>
    <p>Tratamiento especializado para plásticos, llantas y cromados, logrando un acabado uniforme.</p>
  `,
	opticas: `
    <button class="cerrar">X</button>
    <h2>Pulido de Ópticas</h2>
    <p>Recuperamos la transparencia y el brillo de tus faros, mejorando la visibilidad y estética.</p>
  `,
	completo: `
    <button class="cerrar">X</button>
    <h2>Paquete Completo</h2>
    <p>Incluye lavado premium, limpieza de interior, corrección de pintura y detalles exteriores.</p>
  `,
};

// Abrir modal al hacer click en tarjeta
tarjetas.forEach((tarjeta) => {
	tarjeta.addEventListener("click", () => {
		const servicio = tarjeta.dataset.modal; // leemos el data-modal
		modalContenido.innerHTML =
			contenidoServicios[servicio] || "<p>Servicio no disponible</p>";
		modal.classList.add("activo");
	});
});

// Cerrar modal (clic en X o fuera del contenido)
modal.addEventListener("click", (e) => {
	if (e.target === modal || e.target.classList.contains("cerrar")) {
		modal.classList.remove("activo");
	}
});
