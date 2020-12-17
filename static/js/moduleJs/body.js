export { nameValidator };
const nameValidator = () => {
    let msg;
    let $valueInput = document.querySelector('.layer-security__name').value.toLowerCase().trim();
    let arrKeyEspinozaSotelo = [
        'claudia bustamante',
        'pablo salamanra',
        'leonel espinoza',
        'claudia sotelo',
        'yaritza lizana',
        'camilo mondaca',
        'claudio chuhaicura',
        'bastian sepulveda',
        'matias muñoz',
        'mathias tapia'
    ];
    let arrKeyChuhaicuraMendez = [
        'rosa mendez',
        'rosa pizarro',
        'ricardo mendez',
        'vicente pizarro',
        'cristobal reyes',
        'johann wittke',
        'mathias tapia',
        'ricardo rosales',
        'cristobal castro',
        'fernando rios',
        'bruno diaz',
        'francisca sandoval',
        'enzo braccio',
        'vito braccio',
        'rocio alarcon',
        'nelson llanos',
        'andres quesada',
        'claudia bustamante',
        'leonel espinoza',
        'camilo mondaca',
        'bastian sepulveda',
        'matias muñoz'
    ];

    switch(true){
        case document.querySelector('.layer-security').classList[1] === 'layer-security--chuhaicura-mendez' && arrKeyChuhaicuraMendez.includes($valueInput):
            msg = `
            <section class="section-container">
                <div class="section-container__img section-container__img--chuhaicura-mendez"></div>
                <p class="section-container__paragraph">
                    Si llegaste aquí, quiero que sepas lo muy agradecido de que hayas formado parte de mi y mi formación en la carrera, de igual manera quiero agradecer a todos los profesores que siento que me han aportado una gran parte de su sabiduría, un agradecimiento grande a la Profesora Claudia Bustamante, la mejor, la que nos reto mil y una veces para poder mejorar nuestra manera de gestionar todo. 
                </p>
                <p class="section-container__paragraph">
                    Quiero agradecer a mi mamá por ayudarme en mis peores momentos, por haberme educado, por darme una formación personal ejemplar y por siempre estar ahí para apoyarme. También quiero agradecer a mis Tatas, los mejores, ayudaron a mi mamá en mi crianza mientras ella se esforzaba para hacerme llegar donde estoy.
                </p>
                <p class="section-container__paragraph">
                    Son la mejor familia que pudo haberme tocado, de eso estoy muy agradecido.
                </p>
                <p class="section-container__paragraph">
                    Obviamente no me iba a olvidar de mi grupo de panas locos que han estado ahí siempre escuchándome mis lloriqueos, ustedes saben quienes son, los panas de la básica, los de la media y del discord,  los que real se han preocupado por mí, muchas gracias por estar ahí.
                </p>
                <p class="section-container__paragraph">
                    Y tú que llegaste hasta este punto, gracias por leer, ahora te toca a ti, si a ti, gracias por formar parte de mi crecimiento tanto personal, como profesional, has sido un gran amigo y lo agradezco de corazón, así tal tú me ayudaste, yo también te ayudaré siempre que lo necesites.
                </p>
                <p class="section-container__paragraph">
                    Para finalizar, quiero volver a agradecer a mis compañeros, que más que nada los considero mis amigos, y saben quienes son, compartimos muchos momentos a lo lardo de estos cuatro y duros años, aun que el grupo se disolviera un poco en el camino, siempre nos seguíamos juntando, y eso me mantenía muy feliz. Espero volver a verlos en el Mamut y si no, agarraré el auto y los iré a ver a cada uno.
                </p>
                <h3 class="section-container__footer">
                    A todos, gracias por leer y muchas gracias♥
                </h3>
            </section>
            `;
            insertarMsg(msg);
            break;
        
        case document.querySelector('.layer-security').classList[1] === 'layer-security--espinoza-sotelo' && arrKeyEspinozaSotelo.includes($valueInput):
            msg = `
            <section class="section-container">
                <div class="section-container__img section-container__img--espinoza-sotelo"></div>
                <p class="section-container__paragraph">
                    Para empezar, quiero agradecer a todos los profesores que fueron aportando con un grano de arena en mi formación profesional, en especial a la profesora Claudia Bustamante y el profesor Pablo Salamanca, por el compromiso, conocimiento y disposición que demostraron, tanto, en cada una de sus clases, como, fuera de estas. Ellos nos transmitieron el ser inconformistas con nuestro trabajo y así, destacar con nuestros resultados.  
                </p>
                <p class="section-container__paragraph">
                    De igual forma, quiero agradecer a mis padres por el apoyo y la formación personal que me brindaron desde pequeño. Con los cuales siempre estaré en deuda.
                </p>
                <p class="section-container__paragraph">
                    Mamá, muchas gracias por la preocupación incondicional que me has dado desde siempre. Donde cada noche de estudio, tú estabas allí ofreciéndome algo de comer para seguir avanzando en esto.
                </p>
                <p class="section-container__paragraph">
                    Papá, muchas gracias por siempre desearme/buscar lo mejor para mi futuro. Agradezco de todo corazón esas mañanas en las que no podía más y tú estabas ahí para levantarme o también por tu disposición 24/7 que siempre me recalcas.
                </p>
                <p class="section-container__paragraph">
                    Son los mejores padres, que nadie les diga lo contrario.
                </p>
                <p class="section-container__paragraph">
                    Asimismo, agradezco a mi pareja, por su cariño y comprensión que tuvo a lo largo de este proceso, en donde hubo días en los cuales no podíamos ni hablar de lo agotado que estaba.
                </p>
                <p class="section-container__paragraph">
                    Gracias por escucharme siempre, e intentar entender esas explicaciones de chino que te daba, además de darme ánimos cuando la frustración era más grande que yo.
                </p>
                <p class="section-container__paragraph">
                    Por último, quiero agradecer a mis compañeros con los cuales compartí varios momentos a lo largo de estos cuatro años y que, a pesar de que algunos decidieron tomar caminos diferentes, igualmente nos organizamos para salir de la monotonía y pasar un buen rato, sobre todo con esas hamburguesas del mamut. 
                </p>
                <h3 class="section-container__footer">
                    A todos, muchas gracias.
                </h3>
            </section>
            `;
            insertarMsg(msg);
            break;
        default:
            document.querySelector('.layer-security__error').classList.remove('layer-security__error--d-none');
            break; 
    };
};

function insertarMsg(msg){
    document.querySelector('.layer-security').remove();
    let $tempTemplate = document.createElement('template');
    $tempTemplate.innerHTML = msg;
    document.querySelector('.main-container').appendChild($tempTemplate.content);
};
