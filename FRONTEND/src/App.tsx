function App() {
  return (
    <>
    <main classname="max-w-2xl mx-auto flex gap-8 px-4">
      <div classname="py-8 flex flex-col justify-center">
      <h1 classname="text-4xl font-bold uppercase mb-4"><span classname="text-5xl">URL to video</span><br /><span classname="bg-gradient-to-br from-emerald-500 t-sky-500 bg-clip-text text-transparent">with power of AI</span></h1>
     <form classname="grid gap-4">
     <input classname="border-2 rounded-full flex bg-transparent text-white px-4 py-2 grow" type="url" placeholder="https//....."/>
     <button classname="bg-emerald-500 text-white py-2 px-4 rounded-full" type="submit">Create &nbsp; video</buttons>
     </form>
      </div>
      <div classname="py-4">
        <div classname="bg-gray-200 w-[240px] h-[380x] text-gray-500 rounded-2xl p-8"> Video Here</div>
      </div>
      </main>
    </>
  )
}

export default App
