import { useCallback, useState } from "react"

const useActive= (state)=>{
const [active,SetActive]=useState(state)

const unActivate = useCallback(()=>{
    SetActive(false)
})
const activate = useCallback(()=>{
    SetActive(true)
})
return [active,activate, unActivate]
}

export default useActive