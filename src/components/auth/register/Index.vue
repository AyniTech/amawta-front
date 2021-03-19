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
          <div id="1" class="circle-progress active "></div>
          <p class="register-advance">Información básica</p>
        </div>
        <div class="vertical-divider"></div>
        <div class="flex justify-start align-center">
          <div id="2" class="circle-progress active"></div>
          <p class="register-advance">Ubicación</p>
        </div>
        <div class="vertical-divider"></div>
        <div class="flex justify-start align-center">
          <div id="3" class="circle-progress active"></div>
          <p class="register-advance">Niveles y clases</p>
        </div>
        <div class="vertical-divider flex justify-center"></div>
        <div class="flex justify-start align-center">
          <div id="4" class="circle-progress active"></div>
          <p class="register-advance">Sobre ti</p>
        </div>
        <div class="vertical-divider"></div>
        <div class="flex justify-start align-center">
          <div id="5" class="circle-progress active"></div>
          <p class="register-advance">Foto de perfil</p>
        </div>
        <div class="vertical-divider"></div>
        <div class="flex justify-start align-center">
          <div id="6" class="circle-progress active"></div>
          <p class="register-advance">Logros</p>
        </div>
      </aside>
      <div>
        <register-one></register-one>
        <register-two></register-two>
      </div>
    </main>
  </div>
</template>
<script>
import RegisterOne from './RegisterOne';
import RegisterTwo from './RegisterTwo'
export default {
  name: "RegisterRequired",
  components:{
    RegisterOne,
    RegisterTwo
  }

};
</script>
<style lang="scss" scoped>
@media (max-width:"600px"){
  aside{
    display:none;
  }
}
</style>
