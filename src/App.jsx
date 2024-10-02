import QuoteGenerator from "./components/QuoteGenerator.jsx";

function App() {

  return (
    <main className="w-full min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div>
        <h1 className="text-3xl font-bold text-center p-10">Random Quote Generator</h1>
      </div>
      <div className="flex justify-center">
        <QuoteGenerator />
      </div>
    </main>
  )
}

export default App
