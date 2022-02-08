import { Route, Routes } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

const App = () => {
  return (
    <Routes>
      <Route path="/quotes" element={<AllQuotes />} />
      <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
      <Route path="/new-quote" element={<NewQuote />} />
    </Routes>
  );
};

export default App;
