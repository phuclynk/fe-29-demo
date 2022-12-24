import Body from "../body/Body";
import { DemoProviderB } from "../context";

function Content() {
  return (
    <div className="content">
      <DemoProviderB>
        <Body data={"DATA FROM ROOT"} />
      </DemoProviderB>
    </div>
  );
}

export default Content;
