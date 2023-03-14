// import Button from "@/components/Button"
import FormPage from "@/components/forms/FormPage"
import Banner from "@/components/Banner"
import Table from "../components/table/Table"

export default function Home() {
  return (
    <main className="py-5">
      <Banner className="bg-gradient-to-r from-orange-200 to-indigo-400 container mx-auto rounded-md">Personal Financial App</Banner>

      <FormPage/>

      <div className="container mx-auto">
        <Table/>
      </div>
    </main>
  )
}
