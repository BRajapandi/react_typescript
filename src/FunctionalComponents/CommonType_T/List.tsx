type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      {items.map((item, index) => {
        return <div>HI</div>;
      })}
    </div>
  );
};
export default List;
