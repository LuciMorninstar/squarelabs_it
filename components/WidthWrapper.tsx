import {ReactNode} from "react"

interface WidthWrapperProps{
    children:ReactNode;
}
const WidthWrapper = ({children}:WidthWrapperProps) => {
  return (
    <section className = "w-full px-0 pt-0  mx-auto  ">
        {children}
    </section>
  )
}

export default WidthWrapper