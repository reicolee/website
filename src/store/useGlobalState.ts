import { useReducer } from "react"
// import storage from "local-storage-fallback"

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE"

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        isDark: !state.isDark,
      }

    default:
      return state
  }
}

const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: true,
  })

  return { state, dispatch }
}

export default useGlobalState
