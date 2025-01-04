function handleSubmit(event) {
    event.preventDefault();
    
    const roomArea = document.getElementById('roomArea').value;
    const temperature = document.getElementById('temperature').value;
    
    if(roomArea == '0' || temperature == '0') return;
    // Store the values in localStorage to access them on the results page
else{
    localStorage.setItem('roomArea', roomArea);
    localStorage.setItem('temperature', temperature);
    
    // Redirect to results page
    window.location.href = 'results.html';
}
}