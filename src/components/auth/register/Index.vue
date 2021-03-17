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
            <span>Completa tu perfil</span>
          </div>
        </div>
      </nav>
    </header>
    <main class="flex">
      <aside class="register-aside progress">
        <div class="flex justify-start align-center">
          <div class="circle-progress active"></div>
          <p class="register-advance">Información básica</p>
        </div>
        <div class="vertical-divider"></div>
        <div class="flex justify-start align-center">
          <div class="circle-progress active"></div>
          <p class="register-advance">Ubicación</p>
        </div>
        <div class="vertical-divider"></div>
        <div class="flex justify-start align-center">
          <div class="circle-progress active"></div>
          <p class="register-advance">Niveles y clases</p>
        </div>
        <div class="vertical-divider flex justify-center"></div>
        <div class="flex justify-start align-center">
          <div class="circle-progress active"></div>
          <p class="register-advance">Sobre ti</p>
        </div>
        <div class="vertical-divider"></div>
        <div class="flex justify-start align-center">
          <div class="circle-progress active"></div>
          <p class="register-advance">Foto de perfil</p>
        </div>
        <div class="vertical-divider"></div>
        <div class="flex justify-start align-center">
          <div class="circle-progress active"></div>
          <p class="register-advance">Logros</p>
        </div>
      </aside>
      <section class="full-width">
        <div>
          <p class="text-start p-20">Información básica</p>
          <div class="d-block form-register-required">
            <p class="mt-20">Información básica</p>
            <div class="mtb-10">
              <label class="lh-2" for="email">
                Correo :
                <input type="email" name="" id="email" />
              </label>
              <label class="lh-2" for="tel">
                Telefono :
                <input type="tel" name="" id="tel" />
              </label>
            </div>
            <div class="terms-required">
              <input type="checkbox" />
              <span>
                Acepto mostrar mi correo y número de celular en mi perfil.
                Revisar <a href="#">Términos y condiciones de uso.</a>
              </span>
            </div>
            <div>
              <button class="btn btn-primary mr-0">
                Continuar
                <img class="next-btn" src="@/assets/img/Next.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: "RegisterRequired"
};
</script>
<style lang="scss" scoped>
.next-btn {
  width: auto;
  display: inline;
}
.terms-required {
  margin: 20px;
  padding: 10px;
  display: flex;
  input {
    position: relative;
    right: 40px;
  }
  span {
    width: 800px;
    text-align: justify;
    font-size: 12px;
  }
}
</style>
