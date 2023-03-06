import { AtSignIcon, ChatIcon } from '@chakra-ui/icons'


function InputChat() {
  return (
    <div className="flex h-[102px] w-full flex-col items-stretch bg-inherit p-2">
      <div className="w-full rounded-md bg-[#3B3A3A] p-2 flex flex-row items-center ">
        <input
          type="text"
          placeholder="Say something.."
          className="bg-tran text-sm font-light outline-none bg-transparent py-1 flex-1 text-white"
        />
        <button className='px-2'>
          <AtSignIcon color="#B1B0B0" className=' text-lg bg-inherit' />
        </button>
      </div>
      <div className='flex flex-row items-center justify-between bg-transparent mt-3'>
        <div className='bg-transparent'>
          <button className=' bg-transparent'>
            <ChatIcon color="#B1B0B0" className=' text-lg bg-transparent mx-2'  />
          </button>
        </div>
        <div>
          <button className=' bg-blue-500 px-4 py-1 rounded-md font-normal text-white'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default InputChat;
