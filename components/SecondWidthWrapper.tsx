import { ReactNode } from "react"

interface SecondWidthWrapperProps {
  children: ReactNode
}

const SecondWidthWrapper = ({ children }: SecondWidthWrapperProps) => {
  return (
    <section className="w-full px-5 py-4 lg:px-16 lg:py-5 mx-auto">
      {children}
    </section>
  )
}

export default SecondWidthWrapper