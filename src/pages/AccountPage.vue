<template>
  <div class="about text-center account-page">
    <div class="container-fluid">
      <div class="row justify-content-evenly">
        <div class="col-md-3">
          <div class="account-card mb-2 text-center">
            <div class="card-body">
              <img :src="account.picture" :alt="account.name" class="rounded-circle account-picture" />
              <p><i class="mdi mdi-account"></i>: {{ account.name }}</p>
              <div v-if="account.github" class=""><a :href="account.github" target="_blank"><i
                    class="mdi mdi-github"></i></a></div>
              <div v-if="account.linkedin" class=""><a :href="account.linkedin" target="_blank"><i
                    class="mdi mdi-linkedin"></i></a></div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <AccountForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      coverImg: computed(() => `url(${AppState.account?.coverImg})`)
    }
  }
}
</script>

<style scoped lang="scss">
.account-page {

  .account-card {
    background-image: v-bind(coverImg);
    background-position: center;
    background-size: cover;
    height: 200px;


  }

  .account-picture {
    height: 100px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }


}

img {
  max-width: 100px;
}
</style>
