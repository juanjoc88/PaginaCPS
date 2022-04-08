import '../styles.css';
import imagen1 from '../DSC_0291.JPG';

function Inicio(){
    return (
        <div>
            <section class="page-section clearfix">
            <div class="container">
                <div class="intro">
                    <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="../DSC_0291.JPG" alt="..."/>
                    <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                        <h2 class="section-heading mb-4">
                            <span class="section-heading-upper">Un desayuno antes de donar</span>
                            <span class="section-heading-lower">No es otro banco de sangre</span>
                        </h2>
                        <p class="mb-3">Desde el momento en que se ingresa al CPS no se siente como un espacio hospitalario, intentamos hacer sentir al donante tan confortable como nos es posible con un trato ameno de parte de nuestros profesionales e invitandoles una infusión mientras ven 
                            tv o escuchan música.</p>
                        <div class="intro-button mx-auto"><a class="btn btn-primary btn-xl" href="#!">¡Visitenos hoy!</a></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section cta">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <div class="cta-inner bg-faded text-center rounded">
                            <h2 class="section-heading mb-4">
                                <span class="section-heading-upper">Nuestro compromiso</span>
                                <span class="section-heading-lower">con todos</span>
                            </h2>
                            <p class="mb-0">Te guiamos e informamos durante todo el proceso, queremos que estés seguro de nuestra responsabilidad con tu donacón, contamos con procedimientos que cumplen con todas las normativas vigentes, producimos hemocomponentes de altisima calidad y nos aseguramos que estos lleguen a los pacientes que los necesitan en todo el territorio provincial.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
        </div>
);
}

export default Inicio;