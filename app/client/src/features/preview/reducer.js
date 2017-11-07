/**
 * @flow
 */

import type { PreviewState as State } from './types'
import type { Action } from '../../shared/types'

const initialState = {
  isDownloading: false,
  resume: {
    pageCount: 1,
    page: 1
  }
}

function preview(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'SAVE_RESUME_DATA':
      return {
        ...state,
        resume: {
          ...state.resume,
          data: action.resumeData
        }
      }

    case 'GENERATE_RESUME_REQUEST':
      return {
        ...state,
        resume: {
          ...state.resume,
          status: 'pending'
        }
      }

    case 'GENERATE_RESUME_SUCCESS':
      return {
        ...state,
        resume: {
          ...state.resume,
          status: 'success',
          url: action.resumeURL
        }
      }

    case 'GENERATE_RESUME_FAILURE':
      return {
        ...state,
        resume: {
          ...state.resume,
          status: 'failure'
        }
      }

    case 'SET_PAGE_COUNT':
      return {
        ...state,
        resume: {
          ...state.resume,
          pageCount: action.pageCount
        }
      }

    case 'PREV_PAGE':
      return {
        ...state,
        resume: {
          ...state.resume,
          page: Math.max(state.resume.page - 1, 1)
        }
      }

    case 'NEXT_PAGE':
      return {
        ...state,
        resume: {
          ...state.resume,
          page: Math.min(state.resume.page + 1, state.resume.pageCount)
        }
      }

    case 'DOWNLOAD_SOURCE_REQUEST':
      return {
        ...state,
        isDownloading: true
      }

    case 'DOWNLOAD_SOURCE_SUCCESS':
    case 'DOWNLOAD_SOURCE_FAILURE':
      return {
        ...state,
        isDownloading: false
      }

    default:
      return state
  }
}

export default preview