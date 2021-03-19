<template>
<div>
        <section class="width-70vw">
        <div>
          <p class="text-start p-20">Ubicación</p>
          <div class="d-block form-register-required">
            <p class="mt-20">¿Dónde vives?</p>
            <div class="mtb-10 flex col text-start">
                <label class="lh-2" for="dirección">
                Dirección :
                <input type="text" name="" id="dirección" />
                </label>
                <label class="lh-2" for="distrito">
                Distrito :
                <input type="text" name="" id="distrito" />
                </label>
                <label class="lh-2" for="Provincia">
                Provincia :
                <input type="text" name="" id="Provincia" />
                </label>
            </div>
            <div class="flex justify-around">
                <button class="btn btn-primary-outline">
                    ATRÁS
                </button>
                <button @click="next('2')" class="btn btn-primary mr-0">
                SIGUIENTE
                </button>
            </div>
            </div>
        </div>
        </section>
</div>
</template>
<script>
export default {
    name:"RegisterTwo",
    methods:{
    next(info){
        document.getElementById(info).classList.add('complete');
    }
    }
}
</script>