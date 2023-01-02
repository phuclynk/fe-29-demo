import {
  useLocation,
  useMatch,
  useParams,
  useSearchParams,
} from "react-router-dom";

function PageD() {
  const { id, title } = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1>
        Page D: {id} {title}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ txt: "Quet nha" });
        }}
      >
        Set search params
      </button>
      <h1>{searchParams.get("txt")}</h1>
    </div>
  );
}

export default PageD;
