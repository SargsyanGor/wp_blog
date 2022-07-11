import React, { useEffect, useState } from 'react'

const ReadingIndicator = ({ target }: any) => {
  const [readingProgress, setReadingProgress] = useState<number>(0)
  const scrollListener = () => {
    if (!target.current) {
      return
    }
    const element = target.current
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (windowScrollTop === 0) {
      return setReadingProgress(0)
    }
    if (windowScrollTop > element.clientHeight + window.innerHeight) {
      return setReadingProgress(100)
    }
    setReadingProgress(
      (windowScrollTop / (element.clientHeight + window.innerHeight)) * 100
    )
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  },[])

  return (
    <div
      style={{
        zIndex: 103,
        width: `${readingProgress}%`,
      }}
      className={`${
        readingProgress === 100 ? 'invisible opacity-0' : ''
      } fixed left-0 top-0 h-1 w-0 bg-amber-500 transition-all duration-75 ease-in-out`}
    ></div>
  )
}

export default ReadingIndicator
