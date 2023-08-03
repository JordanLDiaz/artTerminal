import { AppState } from "../AppState.js";
import { Project } from "../models/Project.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class ProjectsService {
  async getProjects() {
    const res = await api.get('api/projects')
    logger.log('[GETTING PROJECTS]', res.data)
    AppState.projects = res.data.map(p => new Project(p))
    logger.log('[PROJECTS IN THE APPSTATE]', AppState.projects)
  }
}

export const projectsService = new ProjectsService();