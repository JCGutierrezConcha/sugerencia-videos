//IIFE
const mostrarMultimedia = (() => {
    const parametros = (url, id) => {
        const elemento = document.getElementById(id);
        elemento.src = url;
        //elemento.setAttribute("src", url);
    }
    return {
        parametrosPublicos: (url, id) => {
            return parametros(url, id);
        }
    }
})();

// Crear clase Multimedia.
class Multimedia {
    #url
    constructor(url) {
        this.#url = url;
    }

    get url() {
        return this.#url;
    }

    setInicio() {
        return console.log("Este método es para realizar un cambio en la URL del video");
    }
};

// Crear clase Reproductor que hereda de Multimedia.
class Reproductor extends Multimedia {
    #id
    constructor(url, id) {
        super(url);
        this.#id = id;
    }

    get id() {
        return this.#id;
    }
    // Crear método playMultimedia() con parámetros públicos obtenidos de IIFE.
    playMultimedia() {
        return mostrarMultimedia.parametrosPublicos(this.url, this.id);
    }
    // Re-escribir método setInicio(), incluyendo variable tiempo de inicio.
    setInicio(tiempo) {
        const elemento = document.getElementById(this.id);
        elemento.src = this.url + "?start=" + tiempo;
        //elemento.setAttribute("src", `${this.url}?start=${tiempo}`);

    }
};

// Crear instancias de reroductor de música, película y serie.
let musica1 = new Reproductor("https://www.youtube.com/embed/KjUJUVG6Dbk", "musica");
let pelicula1 = new Reproductor("https://www.youtube.com/embed/esezQhsrix0", "peliculas");
let serie1 = new Reproductor("https://www.youtube.com/embed/X9xJaQK5BjQ", "series");


// Activar métodos playMultimedia y setInicio(tiempo) para instancia de reproductor de música.
musica1.playMultimedia();
musica1.setInicio(122);

// Activar métodos playMultimedia y setInicio(tiempo) para instancia de reproductor de película.
pelicula1.playMultimedia();
pelicula1.setInicio(30);

// Activar métodos playMultimedia y setInicio(tiempo) para instancia de reproductor de serie.
serie1.playMultimedia();
serie1.setInicio(16);



