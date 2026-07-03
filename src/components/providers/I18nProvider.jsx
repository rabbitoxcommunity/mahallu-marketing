import React, { useEffect, useState } from 'react'
import i18n from '../../i18n/config'

export function I18nProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.init().then(() => {
        setIsInitialized(true)
      }).catch((err) => {
        console.error('i18n initialization error:', err)
        setIsInitialized(true) // Set to true anyway to avoid infinite loading
      })
    } else {
      setIsInitialized(true)
    }
  }, [])

  if (!isInitialized) {
    return <div>Loading...</div>
  }

  return children
}
