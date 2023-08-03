<template>
  <div class="ProjectCard">
    <div class="elevation-5 mt-2 rounded">
      <img class="rounded-top project-img" :src="project.coverImg" :alt="project.title">
      <div class="d-flex justify-content-between align-items-center p-2">
        <h3>{{ project.title }}</h3>
        <h3 title="View Project Images" class="selectable" data-bs-toggle="modal" data-bs-target="#projectModal"> <i
            class="mdi mdi-image"></i> {{ project.title.length }}</h3>
        <img class="creator-img rounded-circle" :src="project.creator.picture" :title="project.creator.name">
      </div>
    </div>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Project } from "../models/Project.js";

export default {
  props: { project: { type: Project, required: true } },

  setup() {

    return {

    }

  }
};
</script>


<style lang="scss" scoped>
.project-img {
  height: 30vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.creator-img {
  height: 10vh;
  width: 10vh;

}
</style>