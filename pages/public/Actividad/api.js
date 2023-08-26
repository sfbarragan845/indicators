// api.js
async function getAllIndicators(optionsIndicators) {
    try {
        const response = await fetch(`https://localhost:7100/api/Indicadors`, {
            method: 'GET',
            headers: {
                'client-platform': 'browser',
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) throw new Error('Error al obtener la entidad');

        const data = await response.json();
        optionsIndicators = data.map(item => ({ id: item.id, nombre: item.nombre }));
        return optionsIndicators;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function getAllServices(optionsServices) {
    try {
        const response = await fetch(`https://localhost:7100/api/Servicios`, {
            method: 'GET',
            headers: {
                'client-platform': 'browser',
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) throw new Error('Error al obtener la entidad');

        const data = await response.json();
        optionsServices = data.map(item => ({ id: item.id, nombre: item.servicioAportaClienteExterno }));
        return optionsServices;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function getActivityById(id, formData, selectedIndicator, selectedService) {
    try {
        const response = await fetch(`https://localhost:7100/api/Actividads/${id}`, {
            method: 'GET',
            headers: {
                'client-platform': 'browser',
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) throw new Error('Error al crear la entidad');

        const data = await response.json();
        // Convert the date format
        data.fechaCreacion = new Date(data.fechaCreacion).toISOString().split('T')[0];

        formData = data.id != 0 ? data : formData;
        // Move these lines after updating formData
        // selectedIndicator = formData.indicadorId;
        // selectedService = formData.servicioId;
        return formData;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function saveActivity(activityData, router) {
    try {
        const URI = activityData.id == 0 ? `https://localhost:7100/api/Actividads` : `https://localhost:7100/api/Actividads/${activityData.id}`
        const response = await fetch(URI, {
            method: activityData.id === 0 ? 'POST' : 'PUT',
            headers: {
                'client-platform': 'browser',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(activityData),
        });
        if (!response.ok) throw new Error(activityData.id === 0 ? 'Error al crear la entidad' : 'Error al actualizar la entidad');
        router.replace('/public/Actividad');
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function listActivity() {
    try {
        const activities = await fetch('https://localhost:7100/api/Actividads', {
            method: "GET",
            headers: {
                "client-platform": "browser",
                "Content-Type": "application/json",
            }
        });
        // Handle the response here
        const data = await activities.json()
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Exporta las funciones
export {
    listActivity,
    getActivityById,
    getAllIndicators,
    getAllServices,
    saveActivity
};