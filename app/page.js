import Button from "@/components/Button"
import {GoPlusSmall} from "react-icons/go"
import Banner from "@/components/Banner"

export default function Home() {
  const plusIcon = <span className="text-center m-auto"><GoPlusSmall size={23}/></span>

  return (
    <main className="py-5">
      <Banner>Personal Financial App</Banner>

      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <Button className='flex'>Add Statement {plusIcon}</Button>
        </div>
      </div>
    </main>
  )
}
