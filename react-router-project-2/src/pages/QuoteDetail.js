import { Fragment } from "react";
import { useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "James", text: "React is very versatile!" },
  { id: "q2", author: "Marina", text: "React is my favourite framework!!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
    </Fragment>
  );
};

export default QuoteDetail;
