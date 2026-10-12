<script>
function abrirModal(titulo, descripcion, contenido, precio, ingredientes, imagen) {
    document.getElementById('modal-title').innerText = titulo;
    document.getElementById('modal-description').innerText = descripcion;
    document.getElementById('modal-content').innerText = `Contenido: ${contenido}`;
    document.getElementById('modal-price').innerText = `Precio: ${precio}`;
    document.getElementById('modal-ingredients').innerText = `Ingredientes: ${ingredientes}`;
    document.getElementById('modal-image').innerText = "";
    const img = document.createElement('img');
    img.src = imagen;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    document.getElementById('modal-image').appendChild(img);
    document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        cerrarModal();
    }
};
</script>