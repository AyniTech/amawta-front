<template>
  <div>
    <main class="login">
      <section class="section-center section ">
        <div class="title">
          <h2>!Entremos a las novedades de tu perfil¡</h2>
        </div>
        <div class="grid-login ">
          <div class="img-content">
            <img src="img/logo-img.svg" alt="" />
          </div>
          <div class="form-content ">
            <form class="form">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" placeholder="patriciabautista@gmail.com" />
              </div>
              <div class="form-group">
                <label for="passowrd">Password</label>
                <input type="password" placeholder="******" />
                <button class="password-eye"></button>
              </div>
              <button class="btn btn-primary">INGRESAR</button>
              <div class="footer">
                <button
                  type="button"
                  @click="recordar()"
                  class="recordar recordar-btn"
                >
                  <i class="far fa-square"></i>
                  <i class="fas fa-check-square"></i>
                  Recordar
                </button>
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: "FormLogin",
  methods: {
    recordar() {
      const btnRecordar = document.querySelector(".recordar-btn");
      btnRecordar.classList.toggle("active");
    }
  }
};
</script>
