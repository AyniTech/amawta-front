<template>
  <div>
    <header>
      <nav class="navbar-section ">
        <div class="section-center-nav">
          <div class="logo">
            <span>Amawta</span>
          </div>
          <div class="title">
            <div class="divider"></div>
            <span>Iniciar Sesión</span>
          </div>
        </div>
      </nav>
    </header>
    <slot></slot>
    <footer class="footer ">
      <div class="section-center">
        <form action="" class="">
          <div class="selectbox">
            <div class="select active" id="select">
              <div class="contenido-select">
                <span class="titulo">Selecciona tu pais</span>
                <p class="descripcion">Lorem ipsum dolor sit.</p>
              </div>
              <i class="fas fa-angle-down"></i>
            </div>

            <div class="opciones" id="opciones">
              <a href="#" class="opcion">
                <div class="contenido-opcion">
                  <img src="img/icon/004-peru.svg" alt="" />
                  <div class="textos">
                    <span class="titulo">Perú</span>
                    <p class="descripcion">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </a>
              <a href="#" class="opcion">
                <div class="contenido-opcion">
                  <img src="img/icon/001-bolivia.svg" alt="" />
                  <div class="textos">
                    <span class="titulo">Bolivia</span>
                    <p class="descripcion">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </a>
              <a href="#" class="opcion">
                <div class="contenido-opcion">
                  <img src="img/icon/003-colombia.svg" alt="" />
                  <div class="textos">
                    <span class="titulo">Colombia</span>
                    <p class="descripcion">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </a>
              <a href="#" class="opcion">
                <div class="contenido-opcion">
                  <img src="img/icon/007-argentina.svg" alt="" />
                  <div class="textos">
                    <span class="titulo">Argentina</span>
                    <p class="descripcion">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </a>
              <a href="#" class="opcion">
                <div class="contenido-opcion">
                  <img src="img/icon/006-ecuador.svg" alt="" />
                  <div class="textos">
                    <span class="titulo">Ecuador</span>
                    <p class="descripcion">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </a>
              <a href="#" class="opcion">
                <div class="contenido-opcion">
                  <img src="img/icon/005-chile.svg" alt="" />
                  <div class="textos">
                    <span class="titulo">Chile</span>
                    <p class="descripcion">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <input type="hidden" name="pais" id="inputSelect" value="" />
        </form>
        <div class="links">
          <span>¿No tienes una cuenta?</span>
          <a href="#">REGISTRARME</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "LoginLayout",
  methods: {
    dropdown() {
      const select = document.querySelector("#select");
      const opciones = document.querySelector("#opciones");
      const contenidoSelect = document.querySelector(
        "#select .contenido-select"
      );
      const hiddenInput = document.querySelector("#inputSelect");
      select.classList.toggle("active");
      document.querySelectorAll("#opciones > .opcion").forEach(opcion => {
        opcion.addEventListener("click", e => {
          e.preventDefault();
          contenidoSelect.innerHTML = e.currentTarget.innerHTML;
          select.classList.toggle("active");
          opciones.classList.toggle("active");
          hiddenInput.value = e.currentTarget.querySelector(
            ".titulo"
          ).innerText;
        });
      });
    }
  }
};
</script>
