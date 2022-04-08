import '../styles.css';

function Nav(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div class="container">
            <a class="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">Menú</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Inicio</a></li>
                    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">¿Quiénes somos?</a></li>
                    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="requisitos.html">Requisitos para donantes</a></li>
                    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="atencion.html">Horarios de atención</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav;