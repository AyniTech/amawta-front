<template>
    <div>
            <section class="width-70vw">
        <div>
          <p class="text-start p-20">Información básica</p>
          <div class="d-block form-register-required">
            <p class="mt-20">Información básica</p>
            <div class="mtb-10 flex col text-start">
              <label class=" lh-2" for="email">
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
                    <button @click="next('1')" class="btn btn-primary mr-0">
                Continuar
                <img class="next-btn" src="@/assets/img/Next.svg" alt="" />
                </button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
</template>
<script>
export default {
    name:"RegisterOne",
    methods:{
    next(info){
        document.getElementById(info).classList.add('complete');
        // this.$router.push({
        //     path:"/registerTwo"
        // })
    }
    }
}
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
