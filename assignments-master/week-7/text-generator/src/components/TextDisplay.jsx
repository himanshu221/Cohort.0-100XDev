import { useRecoilValue } from "recoil"
import { textSelector } from "../store/atoms/input"

export const TextDisplay = () => {
    const textGenerated = useRecoilValue(textSelector)
    console.log(textGenerated)
    return (
      <div className="text-display">
        {textGenerated}
      </div>  
    )
}