type HeadingProps = {
  children: string;
};
type ParentProps = {
  children: React.ReactNode;
};
export function ChildrenString(props: HeadingProps) {
  return <div>{props.children}</div>;
}

export function ParentComp(props: ParentProps) {
  return <div>{props.children}</div>;
}
