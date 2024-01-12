function HomeCards () {
    return (
        <>
            <section>
                <h2>MyBrary, tu librería personal</h2>
                <section className="home-card-group">
                    <article className="home-card">
                    <p className="home-card-title">Encuentra cualquier libro</p>
                    <p>Busca por título o autor. ¿Te gusta mucho una frase, pero no sabes de que libro es? También puedes citar un texto y encontrar a qué libro pertenece.
                        <br/><br/>
                        Con nuestro buscador tienes todos los libros del mundo a tu alcance</p>
                    </article>
                    <article className="home-card">
                    <p className="home-card-title">¿Lo quieres? Lo tienes</p>
                    <p>¿Quieres un libro pero no sabes donde comprarlo? Nuestro buscador te dará enlaces y ubicaciones que tienen disponibles el ejemplar que buscas.
                        <br/><br/>
                        Sin complicaciones, sin busquedas adicionales</p>
                    </article>
                    <article className="home-card">
                    <p className="home-card-title">Tu propia colección virtual</p>
                    <p>No te esfuerces en recordar el título del libro que te gusta, simplemente guárdalo en una colección. O quizás quieres llevar un control de los que ya tienes. 
                        <br/><br/>
                        Sea lo que sea, todo es posible con nuestra web</p>
                    </article>
                </section>
            </section>
        </>
    )
}

export default HomeCards