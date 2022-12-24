import ListItem from "../list-item/ListItem";

function List(props) {
  return (
    <div className="list">
      <ListItem data={props.data} />
    </div>
  );
}

export default List;
