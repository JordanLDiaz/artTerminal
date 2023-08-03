<template>
  <div class="AccountForm">
    <form @submit.prevent="handleSubmit">
      <div class="card m-2">
        <div class="form-floating m-2">
          <input type="text" class="form-control" v-model="editable.name" placeholder="Name" name="name" required />
          <label for="name">Name:</label>
        </div>
        <div class="form-floating m-2">
          <input type="url" class="form-control" v-model="editable.picture" placeholder="Profile Picture" name="picture"
            required />
          <label for="picture">Profile Picture:</label>
        </div>
        <div class="form-floating m-2">
          <input type="url" class="form-control" v-model="editable.coverImg" placeholder="Cover Image" name="coverImg"
            required />
          <label for="coverImg">Cover Image:</label>
        </div>
        <div class="form-floating m-2">
          <input type="url" class="form-control" v-model="editable.linkedin" placeholder="Linkedin" name="linkedin" />
          <label for="linkedin">LinkedIn:</label>
        </div>
        <div class="form-floating m-2">
          <input type="url" class="form-control" v-model="editable.github" placeholder="Github" name="github" />
          <label for="github">Github:</label>
        </div>
        <div class="card-footer">
          <button class="btn btn-outline-primary" type="submit">Save Account</button>
        </div>
      </div>

    </form>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref, watchEffect } from 'vue';
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { accountService } from "../services/AccountService.js";
export default {
  setup() {
    const editable = ref({})

    // NOTE 
    watchEffect(() => {
      editable.value = { ...AppState.account }
    })

    return {
      editable,
      // account: computed(() => AppState.account)
      async handleSubmit() {
        try {
          const formData = editable.value
          await accountService.editAccount(formData)
        } catch (error) {
          logger.error(error)
          Pop.error(error.message)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped></style>