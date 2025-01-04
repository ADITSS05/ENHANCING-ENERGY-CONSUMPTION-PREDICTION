document.addEventListener('DOMContentLoaded', function() {
    const roomArea = localStorage.getItem('roomArea');
    const temperature = localStorage.getItem('temperature');
    const res = async(room_area,temperature) =>{
        const data = {
            room_area: parseFloat(room_area),
            temperature: parseFloat(temperature)
        };
        const response = await fetch('https://0e7a-34-125-154-60.ngrok-free.app/api/predict',{
            method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        });
        const result = await response.json();
        return result.prediction;
    }
    
    const fetchPrediction = async () => {
    const prediction = await res(roomArea, temperature);
    document.getElementById('mainPrediction').textContent = `${prediction} kWh`;
    
    // Generate and display range outputs
    const tbody = document.getElementById('outputsBody');
    
    // Generate 10 rows of varying predictions
    for (let temperature = 20; temperature < 31; temperature++) {
        var energyVariation = await res(roomArea, temperature);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${temperature.toFixed(1)}°C</td>
            <td>${energyVariation} kWh</td>
        `;
        tbody.appendChild(row);
    }
    }
    fetchPrediction();
});