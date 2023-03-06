interface props {
  username: string;
  message: string;
  uid: string;
}

function ChatItem(props: props) {
  return (
    <div className="float-right inline-block bg-transparent my-1">
      <b className="bg-transparent text-blue-500 text-sm font-light"> {props.username}</b>
      <span className="bg-transparent text-white text-sm font-light">:  {props.message}</span>
    </div>
  );
}

export default ChatItem;
