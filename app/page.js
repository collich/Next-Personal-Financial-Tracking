import Button from "@/components/Button"

export default function Home() {
  return (
    <main className="py-5">
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">Personal Financial App</h1>

      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <Button>Add Statement</Button>
        </div>
      </div>
    </main>
  )
}
