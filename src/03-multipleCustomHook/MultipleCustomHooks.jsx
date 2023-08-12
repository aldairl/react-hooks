import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, error } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      {error && <p className="alert alert-danger"> {error} </p>}

      <button
        onClick={() => increment()}
        className="btn btn-primary"
        disabled={isLoading}
      >
        next quote
      </button>
      {JSON.stringify(counter)}
    </>
  );
};
