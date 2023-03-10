import Button from "@/components/Button"
import Banner from "@/components/Banner"
import Table from "../components/table/Table"
import Form from "@/components/forms/Form"

export default function Home() {
  return (
    <main className="py-5">
      <Banner className="bg-gradient-to-r from-orange-200 to-indigo-400 container mx-auto rounded-md">Personal Financial App</Banner>

      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <Button icon className='flex bg-indigo-500 text-white hover:bg-gray-100 hover:border-indigo-500 hover:text-gray-800'>Add Statement</Button>
        </div>
      </div>

      <div className="container mx-auto py-5">
        <Form/>
      </div>

      <div className="container mx-auto">
        <Table/>
      </div>
    </main>
  )
}
