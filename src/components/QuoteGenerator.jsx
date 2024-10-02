import {useState} from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState([]);
  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you’re halfway there. - Theodore Roosevelt"
  ];

  return (
    <div>
      <div className="text-center text-white text-xl p-10 ">
        <div>{quote.map((item) => (
          <div key={item}>
            <p>{item}</p>
          </div>
        ))}</div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => setQuote([quotes[Math.floor(Math.random() * quotes.length)]])}
        >
          Generate Quote
        </button>
      </div>
    </div>
  )
}
export default QuoteGenerator
