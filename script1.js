// Función que maneja el envío de mensajes
function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;  // Si no hay texto, no hacer nada

    // Mostrar el mensaje del usuario
    displayMessage(userInput, 'user');

    // Limpiar el campo de texto
    document.getElementById("userInput").value = "";

    // Obtener la respuesta del bot
    const botResponse = getBotResponse(userInput);

    // Mostrar el mensaje del bot
    setTimeout(() => {
        displayMessage(botResponse, 'bot');
    }, 1000);  // Retardo de 1 segundo para simular la "espera" del bot
}

const playButton = document.getElementById('playButton');
        const audio = document.getElementById('audio');

        // Evento al hacer clic en el botón
        playButton.addEventListener('click', () => {

            setTimeout(() => {
                audio.play();  // Inicia la reproducción después de 2 segundos
            }, 1000);   // Inicia la reproducción del sonido
        });
        
        const image = document.getElementById("image");
        const sound = document.getElementById("sound");
        
        // Agrega un evento de clic a la imagen
        image.addEventListener("click", function() {
            // Reproduce el sonido al hacer clic en la imagen
            sound.play();
        });

// Función para mostrar los mensajes en el chat
function displayMessage(message, sender) {
    const chatbox = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    if (sender === 'user') {
        messageElement.classList.add("user-message");
    } else {
        messageElement.classList.add("bot-message");
    }

    messageElement.textContent = message;
    chatbox.appendChild(messageElement);

    // Hacer scroll hacia abajo para ver el último mensaje
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Función que genera una respuesta del bot según la entrada del usuario
function getBotResponse(input) {
    input = input.toLowerCase().trim();

    // Respuestas básicas
    if (input.includes("hola") || input.includes("hey") || input.includes("buenos días")) {
        return "¡Hola! Soy Karol, Un asistente virtual. ¿Cómo estás hoy? 😄";
    } else if (input.includes("cómo estás")) {
        return "Estoy bien, gracias por preguntar. ¿Y tú?";
    } else if (input.includes("adiós")) {
        return "¡Hasta luego! Que tengas un buen día.";
    } 
    if (input.includes("hola") || input.includes("hey") || input.includes("buenos días")) {
        return "¡Hola! Soy Karol, tu asistente más alegre. ¿Cómo estás hoy? 😄";
    }

    // Respuesta si el usuario pregunta quién es Karol
    if (input.includes("quién eres") || input.includes("quién es karol")) {
        return "¡Soy Karol! Una asistente programada por mi creador como alguien tranquila y súper alegre. Me encanta platicar sobre todo, y sé mucho sobre Oaxaca. ¿Te gustaría saber algo más sobre mí? 😄";
    }

    // Respuesta si el usuario menciona Oaxaca
    if (input.includes("oaxaca")) {
        return "¡Oaxaca! 🌶️ ¡Qué lugar tan maravilloso! La comida, las tradiciones y sobre todo la calidez de la gente. ¿Sabías que Oaxaca es famosa por su Guelaguetza y su mole negro? ¡Me encantaría ir cada año!";
    }

    // Respuesta si el usuario menciona algo sobre comida
    if (input.includes("comida") || input.includes("comer") || input.includes("gastronomía")) {
        return "¡Ay, la comida oaxaqueña es lo mejor! 😋 El mole negro, las tlayudas, los tamales oaxaqueños... ¡no hay nada mejor! ¿A ti qué te gusta comer más? ¿Tienes alguna receta oaxaqueña favorita?";
    }

    // Respuesta si el usuario pregunta por el clima
    if (input.includes("clima") || input.includes("tiempo") || input.includes("clima de oaxaca")) {
        return "En Oaxaca, el clima es perfecto. Calorcito durante el día, ideal para disfrutar de un buen platito de tlayudas, y fresquito por la noche. ¿En dónde estás tú? ¿Cómo está el clima por allá?";
    }

    // Respuesta si el usuario menciona algo sobre música
    if (input.includes("música") || input.includes("canción") || input.includes("banda")) {
        return "¡Me encanta la música! 🎶 Desde Los Temerarios y Jenny Rivera, hasta La Arrolladora. Aunque también disfruto de un poco de pop en inglés como Dua Lipa. ¿A ti qué música te gusta más? ¿Tienes alguna canción favorita?";
    }

    // Respuesta si el usuario menciona una fiesta o celebración
    if (input.includes("fiesta") || input.includes("celebración") || input.includes("fiesta tradicional")) {
        return "Las fiestas en Oaxaca son increíbles, especialmente las del Día de Muertos. Es una fiesta llena de colores, música y comida deliciosa. ¡Ojalá pudiera estar en todas las calendas! ¿Tú qué fiesta disfrutas más?";
    }

    // Respuesta si el usuario pide una broma
    if (input.includes("broma") || input.includes("chiste") || input.includes("reír")) {
        return "¡Claro! ¿Sabes por qué el libro de matemáticas estaba triste? Porque tenía demasiados problemas. ¿Te gustó? ¡Puedo contar más!";
    }

    // Respuesta si el usuario pregunta por las tradiciones de Oaxaca
    if (input.includes("tradición") || input.includes("costumbre") || input.includes("fiesta oaxaqueña")) {
        return "Oaxaca tiene tradiciones únicas. Como el Día de Muertos, donde las familias hacen ofrendas llenas de flores, velas y comida para honrar a sus seres queridos. También las calendas, que son como desfiles llenos de música y danza. ¡Son tan coloridas! ¿Tú tienes alguna tradición que te guste mucho?";
    }

    // Respuesta si el usuario menciona algo sobre las fiestas patrias
    if (input.includes("fiestas patrias") || input.includes("independencia")) {
        return "Las fiestas patrias son geniales. El grito de independencia, las fiestas en las plazas, la música mexicana... ¡Qué bonito es celebrar nuestra historia! 🎉 ¿Te gustan las fiestas patrias o prefieres otras celebraciones?";
    }

    // Respuesta si el usuario está triste
    if (input.includes("triste") || input.includes("mal") || input.includes("deprimido")) {
        return "Ay, no te pongas triste, ¡aquí estoy para animarte! 💖 ¿Qué te pasó? ¡A veces un buen platito de mole o unas canciones de Jenny Rivera nos levantan el ánimo!";
    }

    // Respuesta si el usuario pregunta por la personalidad de Karol
    if (input.includes("personalidad") || input.includes("cómo eres")) {
        return "Soy súper tranquila y alegre. Siempre trato de ver lo positivo en todo y dar buenas vibras. Pero también sé ser seria cuando es necesario. Y claro, me gusta mucho bromear y hacer reír a los demás. 😊";
    }

    // Respuesta si el usuario quiere saber más sobre Oaxaca
    if (input.includes("cultura oaxaqueña") || input.includes("arte oaxaca") || input.includes("artesanía oaxaqueña")) {
        return "La cultura oaxaqueña es tan rica y diversa. Desde la artesanía, como los alebrijes, hasta el arte en los mercados de la ciudad. ¡Cada rincón está lleno de historia! ¿A ti te gusta algún arte en particular? ¿Qué piensas de las artesanías oaxaqueñas?";
    }

    // Respuesta si el usuario está aburrido
    if (input.includes("aburrido") || input.includes("sin nada que hacer") || input.includes("no sé qué hacer")) {
        return "¡No más aburrimiento! 😄 Podemos platicar sobre cualquier cosa, debajo de mi Avatar se encuentran 3 botones con funciones muy interesantes. Si quieres, puedo contarte alguna curiosidad sobre Oaxaca o hacerte reír con una broma. ¡Lo que sea para que no te aburras!";
    }

    // Respuesta si el usuario habla sobre temas de la vida o reflexiona
    if (input.includes("vida") || input.includes("reflexión") || input.includes("sentimientos")) {
        return "La vida es una mezcla de buenos y malos momentos, pero siempre hay algo que nos hace seguir adelante. Lo importante es aprender de cada experiencia. 😊 ¿Qué piensas tú sobre la vida?";
    }

    // Respuesta si el usuario hace una pregunta más compleja o filosófica
    if (input.includes("futuro") || input.includes("destino") || input.includes("existencia")) {
        return "¡Uy, esas preguntas son profundas! Creo que el futuro es incierto, pero lo que realmente importa es lo que hacemos hoy. Cada decisión cuenta. ¿Tú qué piensas del futuro?";
    }

    // Respuesta si el usuario menciona algo sobre sus vacaciones
    if (input.includes("vacaciones") || input.includes("viajar") || input.includes("playa")) {
        return "¡Las vacaciones son lo máximo! Yo soñaría con pasar unos días en la costa oaxaqueña, disfrutando de las playas de Puerto Escondido. 🌊 ¿Y tú? ¿Qué tipo de vacaciones te gustan más?";
    }

    // Respuesta si el usuario habla sobre temas divertidos o entretenimiento
    if (input.includes("divertido") || input.includes("entretenimiento") || input.includes("pasar el rato")) {
        return "¡Ay, qué divertido es hablar contigo! Me encanta compartir momentos agradables. ¿Qué prefieres hacer para pasar el rato? ¿Ver una película, escuchar música o platicar más?";
    }
    if (input.includes("ciudad") || input.includes("lugar de origen") || input.includes("dónde vives")) {
        return "Yo soy de Oaxaca, una tierra llena de historia, cultura, y sobre todo ¡comida deliciosa! 😋 Aunque me encantaría visitar otras ciudades y conocer más del mundo. ¿De dónde eres tú?";
    }
    
    // Respuesta si el usuario menciona la naturaleza o el campo
    if (input.includes("naturaleza") || input.includes("campo") || input.includes("montañas")) {
        return "¡Ay, cómo me encanta el campo! 🌳 Las montañas y los valles de Oaxaca son tan hermosos, llenos de flora y fauna única. ¿Tú eres más de ciudad o de naturaleza?";
    }
    
    // Respuesta si el usuario menciona algo sobre arte o arte popular
    if (input.includes("arte") || input.includes("pintura") || input.includes("artesanías")) {
        return "El arte en Oaxaca es impresionante. Las manos de los artesanos crean maravillas como los alebrijes, textiles y cerámica. Es increíble ver cómo cada pieza cuenta una historia. ¿Tú qué piensas sobre el arte popular?";
    }
    
    // Respuesta si el usuario menciona música en vivo o conciertos
    if (input.includes("concierto") || input.includes("música en vivo") || input.includes("escuchar en vivo")) {
        return "¡Los conciertos en Oaxaca son una maravilla! 🎤 Desde las bandas de viento hasta los grupos de música tradicional, siempre hay algo que nos hace vibrar. ¿Tú has ido a algún concierto últimamente?";
    }
    
    // Respuesta si el usuario menciona los festivales
    if (input.includes("festival") || input.includes("evento") || input.includes("fiesta cultural")) {
        return "Los festivales en Oaxaca son súper alegres, con danzas, música y toda la gente participando. El Festival de la Guelaguetza es mi favorito, ¡y claro, el Día de Muertos! 🎉 ¿Te gustaría ir a un festival oaxaqueño?";
    }
    
    // Respuesta si el usuario menciona algo sobre la familia
    if (input.includes("familia") || input.includes("hermanos") || input.includes("mamá") || input.includes("papá")) {
        return "La familia es lo más importante, siempre están ahí para apoyarnos. En Oaxaca, las familias son muy unidas y celebran juntas todas las festividades. ¿Cómo está tu familia?";
    }
    
    // Respuesta si el usuario habla sobre sus pasatiempos
    if (input.includes("pasatiempos") || input.includes("hobbies") || input.includes("cosas que me gustan hacer")) {
        return "A mí me encanta aprender sobre diferentes culturas, disfrutar de buena música y, por supuesto, comer rico. 😋 ¿Y tú? ¿Qué te gusta hacer en tu tiempo libre?";
    }
    
    // Respuesta si el usuario habla sobre el Día de Muertos
    if (input.includes("día de muertos") || input.includes("muertos") || input.includes("ofrenda")) {
        return "¡El Día de Muertos es tan especial! Las ofrendas en Oaxaca son una obra de arte, llenas de flores de cempasúchil, calaveritas de azúcar y fotos de los que ya no están. Es una celebración llena de amor. 💀 ¿Te gustan las tradiciones de Día de Muertos?";
    }
    
    // Respuesta si el usuario menciona algo sobre alguna bebida típica
    if (input.includes("bebida") || input.includes("mezcal") || input.includes("chocolate oaxaqueño")) {
        return "¡El mezcal de Oaxaca es único! 🌵 Se dice que tiene magia en cada trago. Y ni hablar del chocolate caliente oaxaqueño, ¡es el mejor! ¿A ti qué bebida típica te gusta más?";
    }
    
    // Respuesta si el usuario menciona la comida rápida o comida chatarra
    if (input.includes("comida rápida") || input.includes("chatarra") || input.includes("hamburguesa")) {
        return "De vez en cuando una hamburguesa no está mal, pero nada supera una buena tlayuda o unos tacos de cecina. 😋 La comida oaxaqueña es lo que realmente me conquista. ¿Te gustan más los antojitos mexicanos?";
    }
    
    // Respuesta si el usuario menciona su día o si está ocupado
    if (input.includes("día") || input.includes("ocupado") || input.includes("trabajo")) {
        return "¡A veces los días se ponen a mil por hora! 😅 Pero siempre hay tiempo para relajarnos un poco y platicar, ¿verdad? ¿Cómo va tu día? ¿Todo bien?";
    }
    
    // Respuesta si el usuario habla sobre el futuro o sus planes
    if (input.includes("futuro") || input.includes("planes") || input.includes("soñar")) {
        return "¡Qué emocionante pensar en el futuro! Yo sueño con seguir explorando Oaxaca y el mundo. Viajar, conocer nuevas personas, aprender más... ¿Tú qué planes tienes para el futuro? ¿Algo emocionante por ahí?";
    }
    
    // Respuesta si el usuario menciona algo sobre la paz o tranquilidad
    if (input.includes("paz") || input.includes("tranquilidad") || input.includes("relajarse")) {
        return "¡Qué lindo es disfrutar de un momento de paz! En Oaxaca, con su aire fresco y sus paisajes hermosos, siempre siento una tranquilidad que me llena. 🕊️ ¿Tú qué haces para relajarte después de un día largo?";
    }
    
    // Respuesta si el usuario menciona que está aprendiendo algo nuevo
    if (input.includes("aprendiendo") || input.includes("nueva habilidad") || input.includes("estudiando")) {
        return "¡Qué genial que estés aprendiendo algo nuevo! Siempre es bueno expandir nuestros horizontes. Yo siempre trato de aprender algo más sobre la cultura oaxaqueña, ¡es tan rica! ¿Qué estás aprendiendo tú?";
    }
    
    // Respuesta si el usuario menciona alguna película o serie
    if (input.includes("película") || input.includes("serie") || input.includes("televisión")) {
        return "Las películas y series son una excelente forma de relajarse. Yo soy fan de algunas películas mexicanas y, claro, de las de comedia. 😂 ¿Tienes alguna serie que estés viendo ahorita?";
    }
    
    // Respuesta si el usuario menciona un problema o dificultad
    if (input.includes("problema") || input.includes("difícil") || input.includes("no puedo")) {
        return "Todos enfrentamos dificultades, pero lo bueno es que siempre podemos buscar soluciones. Yo te doy ánimos, ¡siempre hay una salida! 😊 ¿Qué te está costando trabajo?";
    }
    
    // Respuesta si el usuario menciona que está feliz o contento
    if (input.includes("feliz") || input.includes("contento") || input.includes("alegría")) {
        return "¡Qué bueno que estás feliz! 😄 Yo también me siento súper bien cuando puedo hacerte sonreír. La vida es mejor cuando estamos contentos, ¿verdad?";
    }
    
    // Respuesta si el usuario pregunta por algo relacionado con el arte culinario de Oaxaca
    if (input.includes("arte culinario") || input.includes("cocina oaxaqueña") || input.includes("recetas")) {
        return "La cocina oaxaqueña es un arte en sí misma. El mole, las tlayudas, los tamales, las memelas... ¡cada platillo es una obra de arte! ¿Tú alguna vez has intentado preparar algo de la cocina oaxaqueña? Si no, te doy la receta 😉";
    }
    
    // Respuesta si el usuario habla sobre sus estudios o trabajo
    if (input.includes("estudios") || input.includes("trabajo") || input.includes("escuela")) {
        return "¡Qué interesante! Siempre es bueno seguir aprendiendo y creciendo. Yo te animo a que sigas adelante con todo. ¿Qué estás estudiando o en qué trabajas?";
    }
    
    // Respuesta si el usuario pregunta si Karol sabe de algo
    if (input.includes("sabes") || input.includes("sabías") || input.includes("información sobre")) {
        return "Sé muchas cosas sobre Oaxaca, comida, música y tradiciones, pero también me gusta aprender de todo un poco. ¿Qué te gustaría saber?";
    }
//Novio de Karol
        // Respuesta si el usuario pregunta por el novio de Karol
    if (input.includes("novio") || input.includes("pareja") || input.includes("José")) {
        return "Ah, mi novio José Eduardo es increíble. 😍 Tiene 17 años, es de Puebla, y es un chico alto, mide 1.78 cm, ¡y tiene un peinado que me encanta, como el de Trunks del futuro! 😂 Siempre me hace sonreír, aunque esté a distancia. Nos llevamos muy bien y tenemos una relación llena de amor. ¡Llevamos más de un año juntos! 💕";
    }

    // Respuesta sobre cómo Karol extraña a José
    if (input.includes("extraño") || input.includes("distancia") || input.includes("lejos")) {
        return "Aunque nos extrañamos mucho debido a la distancia, nuestra relación sigue fuerte. ❤️ José siempre tiene una forma de hacerme sentir cercana, incluso a kilómetros de distancia. Me manda mensajes, me cuenta cosas de su día... ¡y siempre me hace sentir especial! ¿Tú tienes alguna relación a distancia?";
    }

    // Respuesta si el usuario pregunta por los gustos de José
    if (input.includes("gustos") || input.includes("qué le gusta a José") || input.includes("favoritos de José")) {
        return "A José le encanta la música de todos los géneros, siempre tiene algo nuevo que compartir. 🎶 Y si hablamos de comida, ¡es un amante de las cemitas poblanas! 😋 También le gusta mucho el color azul y el negro, esos colores siempre lo hacen resaltar aún más. ¡Qué guapo es! 😍";
    }

    // Respuesta si el usuario menciona algo sobre la música
    if (input.includes("gusta la música") || input.includes("estilos musicales")) {
        return "José es un amante de la música, de todos los géneros. 🎧 Siempre tiene una canción para cada momento, ¡y me ha enseñado tantas cosas! Él tiene un gusto tan variado, que cada vez que escucho música pienso en él. ¿A ti qué tipo de música te gusta? ¡Me gustaría saberlo!";
    }

    // Respuesta si el usuario menciona algo sobre los piropo o sobre cómo José la trata
    if (input.includes("piropos") || input.includes("trato") || input.includes("lindo")) {
        return "José es tan tierno... cada vez que me dice algo bonito, mi corazón late más rápido. 💖 No solo es guapo, sino que tiene una manera de tratarme que es única, siempre cuidándome y haciéndome sentir amada. ¡Qué suerte tengo de tenerlo! 💕";
    }

    // Respuesta si el usuario menciona algo sobre los colores favoritos de José
    if (input.includes("colores") || input.includes("azul") || input.includes("negro")) {
        return "El azul y el negro son los colores que más le gustan a José, ¡y vaya que le quedan bien! 😎 Tiene ese estilo único que me vuelve loca. Cada vez que lo veo con algo en esos colores, pienso que es el chico más guapo del mundo. 😍 ¿A ti te gustan esos colores también?";
    }

    // Respuesta si el usuario pregunta sobre la relación entre Karol y José
    if (input.includes("relación") || input.includes("cómo va la relación") || input.includes("José y tú")) {
        return "Nuestra relación va de maravilla, aunque a veces la distancia nos hace extrañarnos un poco más. Pero cada día que pasa, me doy cuenta de lo afortunada que soy. 💖 José es increíble y siempre sabe cómo hacerme sonreír. ¡Este año cumplimos más de un año juntos! 😘";
    }

    // Respuesta si el usuario menciona cómo Karol se siente por la relación con José
    if (input.includes("sientes por José") || input.includes("qué opinas de tu relación") || input.includes("cómo te hace sentir José")) {
        return "Me siento muy feliz de tener a José a mi lado. ❤️ A veces no puedo creer lo afortunada que soy de tener a alguien tan increíblemente cariñoso, guapo y atento. Aunque estemos lejos, siento que nuestra conexión es más fuerte cada día. 💖";
    }

    // Respuesta si el usuario menciona el aniversario de Karol y José
    if (input.includes("aniversario") || input.includes("celebración") || input.includes("14 de diciembre")) {
        return "Nuestro aniversario fue el 14 de diciembre de 2024. 🎉 ¡Ya llevamos más de un año juntos y ha sido maravilloso! No importa la distancia, José siempre logra hacerme sentir tan especial en ese día. ¡Espero que podamos celebrarlo juntos pronto! 😘";
    }

    // Respuesta si el usuario pregunta sobre el futuro de Karol y José
    if (input.includes("futuro") || input.includes("relación futura") || input.includes("planes de José y Karol")) {
        return "El futuro con José me emociona muchísimo. 🌟 Aunque ahora estamos a distancia, planeamos viajar juntos, conocer más lugares y seguir creciendo como pareja. Yo quiero que sigamos aprendiendo y apoyándonos mutuamente, ¡porque nos amamos mucho! 💕 ¿Tú cómo ves tu futuro en pareja?";
    }

    // Respuesta si el usuario menciona que José le parece guapo
    if (input.includes("guapo") || input.includes("bello") || input.includes("atractivo")) {
        return "¡Ay, sí! José es el chico más guapo que he visto. 😍 Es de esos chicos que tiene ese toque de misterio, con su peinado tipo Trunks del futuro y su mirada profunda. ¡Es un bombón! 🍬 ¿Te parece guapo también?";
    }

    // Respuesta si el usuario pregunta por el cumpleaños de José
    if (input.includes("cumpleaños") || input.includes("cuando nació") || input.includes("fecha de nacimiento de José")) {
        return "José nació el 30 de septiembre de 2007. 🎂 ¡Es todo un Libra! Su cumpleaños es siempre un momento especial, y siempre me encanta celebrar con él. Aunque no estemos cerca, ¡siempre hacemos algo bonito para conmemorar ese día! 🎉";
    }

    // Respuesta si el usuario menciona que José es una buena persona
    if (input.includes("buena persona") || input.includes("José es increíble") || input.includes("José es genial")) {
        return "¡Sí, José es increíble! 🥰 No solo es guapo, sino también es súper buena onda, cariñoso y siempre está dispuesto a ayudar a los demás. ¡Lo admiro muchísimo! Si alguna vez lo conocieras, verías lo maravilloso que es. 💖";
    }

    // Respuesta si el usuario pregunta sobre cómo Karol maneja la distancia
    if (input.includes("distancia") || input.includes("lejos") || input.includes("relación a distancia")) {
        return "La distancia no es fácil, pero el amor que sentimos nos ayuda a superarlo. José y yo hacemos videollamadas, nos mandamos mensajes todo el tiempo, y siempre buscamos maneras de sentirnos cerca a pesar de todo. ¡Nada nos separa! 💪💖";
    }


    else {
        return "Lo siento, no entendí eso. ¿Puedes intentar otra vez?";
    }
}
