export { nameValidator };
const nameValidator = () => {
    let $valueInput = document.querySelector('.layer-security__name').value.toLowerCase().trim();
    let arrKey = [
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

    if(arrKey.includes($valueInput)){
        document.querySelector('.layer-security').remove();
        let $tempTemplate = document.createElement('template');
        $tempTemplate.innerHTML = `
            <section class="section-container">
                <div class="section-container__img"></div>
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
                    Gracias por escucharme siempre, e intentar entender esas explicaciones de chino que te daba.
                </p>
                <p class="section-container__paragraph">
                    Por último, quiero agradecer a mis compañeros con los cuales compartí varios momentos a lo largo de estos cuatro años  y que, a pesar de que algunos decidieron tomar caminos diferentes, igualmente nos organizamos para salir de la monotonía y pasar un buen rato.
                </p>
                <h3 class="section-container__footer">
                    A todos, muchas gracias.
                </h3>
            </section>
        `;

        document.querySelector('.main-container').appendChild($tempTemplate.content);
        
    }else{
        document.querySelector('.layer-security__error').classList.remove('layer-security__error--d-none')
    };
};
