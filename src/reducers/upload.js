import {
  SELECT_FILE,
  SELECT_NEW_FILE,
  RECEIVE_FILE_ERRORS,
  RECEIVE_UPLOAD_ERROR,
  REQUEST_UPLOAD,
  RECEIVE_UPLOAD,
  REFRESH_STATE
} from '../constants'

const defaultUploads = {
  __DEFAULT_UPLOAD__: {
    uploading: false,
    file: null,
    newFile: null,
    errors: [],
    errorFile: null,
    uploadError: null
  }
}

/*
 * Maintain data on the current upload
 */
export default (state = defaultUploads, action) => {
  const upload = state[action.id]
    ? state[action.id]
    : state['__DEFAULT_UPLOAD__']

  switch (action.type) {
    case SELECT_FILE:
      return {
        ...state,
        [action.id]: {
          ...upload,
          file: action.file,
          errors: upload.errors.length === 0 ? upload.errors : [],
          errorFile: null,
          uploadError: null
        }
      }
    case SELECT_NEW_FILE:
      return {
        ...state,
        [action.id]: {
          ...upload,
          newFile: action.file
        }
      }
    case RECEIVE_FILE_ERRORS:
      return {
        ...state,
        [action.id]: {
          errors: action.errors,
          errorFile: action.file
        }
      }
    case RECEIVE_UPLOAD_ERROR:
      return {
        ...state,
        [action.id]: {
          ...upload,
          uploadError: action.error
        }
      }
    case REQUEST_UPLOAD:
      return {
        ...state,
        [action.id]: {
          ...upload,
          uploading: true
        }
      }
    case RECEIVE_UPLOAD:
      return {
        ...state,
        [action.id]: {
          ...upload,
          uploading: false
        }
      }
    case REFRESH_STATE:
      return {
        ...state,
        [action.id]: state['__DEFAULT_UPLOAD__']
      }
    default:
      return state
  }
}
