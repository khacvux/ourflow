import ChatItem from "./ChatItem"


function ChatList() {
  return (
    <div className="w-full flex-1 flex flex-col items-stretch justify-start bg-inherit px-2 overflow-scroll">
        <ChatItem uid="123123" message="test message" username="username1" />
        <ChatItem uid="123123" message="test message" username="username1" />
        <ChatItem uid="123123" message="test message" username="username1" />
        <ChatItem uid="123123" message="test message" username="username1" />
    </div>
  )
}

export default ChatList