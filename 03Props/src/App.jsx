import japanImg from "./assets/obj1.jpg";
import tokyoImg from "./assets/obj2.jpg";
import parisImg from "./assets/obj3.jpg";
import Card2 from "./components/card";

function App() {
  const card1 = {
    img: japanImg,
    place_name: "Japan",
    content: "Land of the rising sun, known for its culture, cuisine, and scenic landscapes."
  };

  const card2 = {
    img: tokyoImg,
    place_name: "Tokyo",
    content: "A vibrant blend of tradition and technology, from ancient temples to neon streets."
  };

  const card3 = {
    img: parisImg,
    place_name: "Paris",
    content: "The City of Lights, famous for art, fashion, and the iconic Eiffel Tower."
  };

  return (
    <>
    <div className="bg-linear-to-r from-sky-400 via-indigo-400 to-purple-400 min-h-screen">
    {/* <div className="- bg-linear-to-r from-orange-300 via-pink-300 to-purple-400 min-h-screen"> */}

      <h1 className="font-medium text-3xl flex justify-center py-7 text-stone-50">
        Travel Destination
      </h1>
      <div className="flex gap-x-5 justify-center h-full py-8">
        <Card2 {...card1} />
        <Card2 {...card2} />
        <Card2 {...card3} />
      </div>
    </div>
    </>
  );
}

export default App;
