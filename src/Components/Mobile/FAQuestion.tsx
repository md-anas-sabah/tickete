import Accordion from "./Accordion";
import Button from "./Button";

function FAQs() {
  const questions = [
    {
      id: 1,
      askedQuestion: "What should I do on my first trip to Rome?",
      givenAnswer: null,
    },
    {
      id: 2,
      askedQuestion: "What are some hidden gems to see in Rome",
      givenAnswer:
        "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
    },
    {
      id: 3,
      askedQuestion: "How much time should I spend in Rome?",
      givenAnswer: null,
    },
    {
      id: 4,
      askedQuestion: "What food is Rome known for?",
      givenAnswer: null,
    },
    {
      id: 5,
      askedQuestion: "What is the best way to get around Rome?",
      givenAnswer: null,
    },
  ];

  return (
    <div className="mt-10 flex flex-col mb-3">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold ">Frequently asked questions</h1>
        <p className="text-base text-gray-400">
          Here are some of our most asked questions.
        </p>
      </div>
      <div className="mt-4">
        {questions.map((question) => {
          return (
            <Accordion
              key={question?.id}
              title={question?.askedQuestion}
              content={question?.givenAnswer}
            />
          );
        })}
      </div>

      <div className="bg-gray-100 flex flex-row w-full px-5 py-4 items-center rounded-lg justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">
            Still need help? <br /> We are with you
          </h1>
          <Button text={"Chat with us"} preIcon="" />
        </div>
      </div>
      <div className="mt-5 h-[1px] w-full bg-gray-300"></div>
    </div>
  );
}

export default FAQs;
