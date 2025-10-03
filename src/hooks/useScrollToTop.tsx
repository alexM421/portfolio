import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function useScrollToTop () {

    const location = useLocation()
    const { hash } = location

    useEffect(() => {
        if(!hash) window.scrollTo(0,0)
    },[location])

    return
}