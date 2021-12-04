import * as types from '../constants/actionTypes';

export function getProjects() {
  return { type: types.REQUEST_PROJECTS };
}

export function updateCourse(courseId, questionId, state) {
  return { type: types.UPDATE_COURSE, courseId, questionId, state };
}

export function getKpiEntries(id) {
  return { type: types.REQUEST_KPI_ENTRIES, id };
}
