document.addEventListener('DOMContentLoaded', function() {
    const guestBtn = document.getElementById('guest-btn');
    const startBtn = document.getElementById('start-btn');
    
    guestBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        alert('Modo invitado seleccionado');
    });
    
    startBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        alert('Iniciar sesión');
    });
});