import { REQUEST_EDITS,RECEIVE_EDITS,REQUEST_EDIT,RECEIVE_EDIT,VERIFY_QUALITY,VERIFY_MACRO,REFRESH_STATE } from '../constants'

const defaultEdits = {
  isFetching: false,
  fetched: false,
  types: {
    syntactical: {edits: []},
    validity: {edits: []},
    quality: {edits: [], verified: false},
    macro: {edits: [], verified: false}
  },
  rows: {}
}

export default (state = defaultEdits, action) => {
  switch (action.type) {
    case REQUEST_EDITS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_EDITS:
      return {
        ...state,
        types: action.edits,
        isFetching: false,
        fetched: true
      }
    case REQUEST_EDIT:
      return {
        ...state,
        rows: {
          ...state.rows,
          [action.edit]: {
            ...state.rows[action.edit],
            isFetching: true
          }
        }
      }
    case RECEIVE_EDIT:
      return {
        ...state,
        rows: {
          ...state.rows,
          [action.edit]: {
            ...state.rows[action.edit],
            isFetching: false,
            rows: action.rows
          }
        }
      }
    case VERIFY_QUALITY: {
      const clonedState = {...state}
      clonedState.types.quality.verified = action.checked
      return clonedState
    }
    case VERIFY_MACRO: {
      const clonedState = {...state}
      clonedState.types.macro.verified = action.checked
      return clonedState
    }
    case REFRESH_STATE: {
      return defaultEdits
    }
    default:
      return state
  }
}
