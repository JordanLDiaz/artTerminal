<template>
  <div class="">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-4" v-for="p in projects" :key="p.id">
          <ProjectCard :project="p" />
        </div>
      </div>
    </div>
  </div>

  <Modal />
</template>

<script>
import { computed, onMounted } from "vue";
import { projectsService } from "../services/ProjectsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";

export default {
  setup() {
    async function getProjects() {
      try {
        await projectsService.getProjects()
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getProjects()
    })


    return {
      projects: computed(() => AppState.projects)
    }
  }
}
</script>

<style scoped lang="scss"></style>
