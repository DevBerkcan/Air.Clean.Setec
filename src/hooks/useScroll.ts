import { useEffect, useState } from 'react'

function useScroll() {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {

    function handleScroll() {

      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scroll }
}

export default useScroll