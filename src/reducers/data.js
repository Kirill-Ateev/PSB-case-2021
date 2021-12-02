import {
  REQUEST_PROJECTS,
  RECEIVE_PROJECTS,
  NOT_RECEIVE_PROJECTS,
  REQUEST_KPI_ENTRIES,
  RECEIVE_KPI_ENTRIES,
  NOT_RECEIVE_KPI_ENTRIES,
} from '../constants/actionTypes';

export default function data(
  state = {
    isFetching: false,
    kpi: null,
    errors: null,
  },
  action
) {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_PROJECTS:
      return {
        ...state,
        isFetching: false,
        projects: action.projects,
      };

    case NOT_RECEIVE_PROJECTS:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };

    case REQUEST_KPI_ENTRIES:
      return {
        ...state,
        isFetching: true,
      };

    case RECEIVE_KPI_ENTRIES:
      return {
        ...state,
        isFetching: false,
        kpi: state.kpi.map((elem) =>
          elem.indexes.some((x) => x.id === action.id)
            ? {
                ...elem,
                indexes: elem.indexes.map((index) =>
                  index.id === action.id
                    ? { ...index, entries: action.entries }
                    : index
                ),
              }
            : elem
        ),
      };

    case NOT_RECEIVE_KPI_ENTRIES:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };

    default:
      return state;
  }
}
