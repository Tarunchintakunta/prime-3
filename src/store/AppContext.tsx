import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type Dispatch,
  type ReactNode,
} from 'react'

/* ------------------------------------------------------------------ */
/*  State shape & actions                                              */
/* ------------------------------------------------------------------ */

export type AppState = {
  savedCourseIds: string[]
  mobileMenuOpen: boolean
  newsletterSubmitted: boolean
}

export type AppAction =
  | { type: 'TOGGLE_SAVE_COURSE'; id: string }
  | { type: 'CLEAR_SAVED' }
  | { type: 'OPEN_MOBILE_MENU' }
  | { type: 'CLOSE_MOBILE_MENU' }
  | { type: 'NEWSLETTER_SUBMITTED' }

const STORAGE_KEY = 'prime.app.v1'

const initialState: AppState = {
  savedCourseIds: [],
  mobileMenuOpen: false,
  newsletterSubmitted: false,
}

function init(state: AppState): AppState {
  if (typeof window === 'undefined') return state
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return state
    const parsed = JSON.parse(raw) as Partial<AppState>
    return {
      ...state,
      savedCourseIds: Array.isArray(parsed.savedCourseIds)
        ? parsed.savedCourseIds.filter((x): x is string => typeof x === 'string')
        : state.savedCourseIds,
      newsletterSubmitted: !!parsed.newsletterSubmitted,
    }
  } catch {
    return state
  }
}

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'TOGGLE_SAVE_COURSE': {
      const has = state.savedCourseIds.includes(action.id)
      return {
        ...state,
        savedCourseIds: has
          ? state.savedCourseIds.filter((id) => id !== action.id)
          : [...state.savedCourseIds, action.id],
      }
    }
    case 'CLEAR_SAVED':
      return { ...state, savedCourseIds: [] }
    case 'OPEN_MOBILE_MENU':
      return { ...state, mobileMenuOpen: true }
    case 'CLOSE_MOBILE_MENU':
      return { ...state, mobileMenuOpen: false }
    case 'NEWSLETTER_SUBMITTED':
      return { ...state, newsletterSubmitted: true }
    default:
      return state
  }
}

/* ------------------------------------------------------------------ */
/*  Contexts                                                           */
/* ------------------------------------------------------------------ */

const AppStateContext = createContext<AppState | undefined>(undefined)
const AppDispatchContext = createContext<Dispatch<AppAction> | undefined>(
  undefined,
)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, init)

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          savedCourseIds: state.savedCourseIds,
          newsletterSubmitted: state.newsletterSubmitted,
        }),
      )
    } catch {
      /* storage may be disabled — non-fatal */
    }
  }, [state.savedCourseIds, state.newsletterSubmitted])

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = state.mobileMenuOpen ? 'hidden' : original
    return () => {
      document.body.style.overflow = original
    }
  }, [state.mobileMenuOpen])

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

/* ------------------------------------------------------------------ */
/*  Hooks                                                              */
/* ------------------------------------------------------------------ */

export function useAppState(): AppState {
  const ctx = useContext(AppStateContext)
  if (!ctx) throw new Error('useAppState must be used within <AppProvider>')
  return ctx
}

export function useAppDispatch(): Dispatch<AppAction> {
  const ctx = useContext(AppDispatchContext)
  if (!ctx)
    throw new Error('useAppDispatch must be used within <AppProvider>')
  return ctx
}

export function useSavedCourses() {
  const { savedCourseIds } = useAppState()
  const dispatch = useAppDispatch()
  return useMemo(
    () => ({
      savedIds: savedCourseIds,
      count: savedCourseIds.length,
      isSaved: (id: string) => savedCourseIds.includes(id),
      toggle: (id: string) =>
        dispatch({ type: 'TOGGLE_SAVE_COURSE', id }),
      clear: () => dispatch({ type: 'CLEAR_SAVED' }),
    }),
    [savedCourseIds, dispatch],
  )
}

export function useMobileMenu() {
  const { mobileMenuOpen } = useAppState()
  const dispatch = useAppDispatch()
  return useMemo(
    () => ({
      open: mobileMenuOpen,
      openMenu: () => dispatch({ type: 'OPEN_MOBILE_MENU' }),
      closeMenu: () => dispatch({ type: 'CLOSE_MOBILE_MENU' }),
    }),
    [mobileMenuOpen, dispatch],
  )
}

export function useNewsletter() {
  const { newsletterSubmitted } = useAppState()
  const dispatch = useAppDispatch()
  return useMemo(
    () => ({
      submitted: newsletterSubmitted,
      submit: () => dispatch({ type: 'NEWSLETTER_SUBMITTED' }),
    }),
    [newsletterSubmitted, dispatch],
  )
}
