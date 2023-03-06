import { Search2Icon } from "@chakra-ui/icons";

function SearchInput() {
  return (
    <div className="flex h-[30px] w-64 flex-row items-center overflow-hidden rounded-full bg-[#313030] px-3">
      <input
        type="text"
        className=" flex-1 bg-inherit pl-2 text-white outline-none placeholder:text-[#9E9E9E]"
        placeholder="Search"
      />
      <button>
        <Search2Icon className="cursor-pointer !text-[#9E9E9E] pb-1 bg-inherit" />
      </button>
    </div>
  );
}

export default SearchInput;
