function cambiarImagen(tipo) {
    const imagenPrincipal = document.getElementById('imagenPrincipal');
    const descripcion = document.getElementById('descripcion');
    
    switch (tipo) {
        case 'navidad':
            imagenPrincipal.src = '/media/dia-de-navidad.png';
            descripcion.textContent = '¡Feliz Navidad!';
            break;
        case 'año-nuevo':
            imagenPrincipal.src = '/media/regalo.png';
            descripcion.textContent = '¡Feliz Año Nuevo!';
            break;
        case 'reyes':
            imagenPrincipal.src = '/media/carta.png';
            descripcion.textContent = '¡Felices Reyes Magos!';
            break;
        default:
            imagenPrincipal.src = '/media/dia-de-navidad.png';
            descripcion.textContent = '¡Feliz Navidad!';
            break;
    }
}