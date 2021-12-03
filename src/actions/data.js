import * as types from '../constants/actionTypes';

export function getProjects() {
  return { type: types.REQUEST_PROJECTS };
}

export function getKpiEntries(id) {
  return { type: types.REQUEST_KPI_ENTRIES, id };
}
