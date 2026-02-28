import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useReadingPreferences = create(
  persist(
    (set, get) => ({
      fontSize: 'lg',
      setFontSize: (size) => set({ fontSize: size }),
      customFontSizePx: 28,
      setCustomFontSizePx: (px) => set({ customFontSizePx: px }),

      theme: 'light',
      setTheme: (theme) => set({ theme }),

      lineHeight: 'relaxed',
      setLineHeight: (height) => set({ lineHeight: height }),

      bookmarks: [],
      toggleBookmark: (surahNumber, verseNumber) => {
        set((state) => {
          const exists = state.bookmarks.some(
            (b) => b.surahNumber === surahNumber && b.verseNumber === verseNumber
          )
          if (exists) {
            return {
              bookmarks: state.bookmarks.filter(
                (b) => !(b.surahNumber === surahNumber && b.verseNumber === verseNumber)
              ),
            }
          } else {
            return {
              bookmarks: [
                ...state.bookmarks,
                { surahNumber, verseNumber },
              ],
            }
          }
        })
      },

      isBookmarked: (surahNumber, verseNumber) => {
        const state = get()
        return state.bookmarks.some(
          (b) => b.surahNumber === surahNumber && b.verseNumber === verseNumber
        )
      },
    }),
    {
      name: 'reading-preferences',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
