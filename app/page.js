import Button from "@/components/Button"
import Banner from "@/components/Banner"
import Table from "../components/table/Table"

export default function Home() {
  return (
    <main className="py-5">
      <Banner>Personal Financial App</Banner>

      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <Button icon className='flex'>Add Statement</Button>
        </div>
      </div>

      <div className="container mx-auto">
        <Table/>
      </div>
    </main>
  )
}
