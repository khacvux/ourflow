import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function OAuth() {
  return (
    <div className="flex h-full w-[200px] flex-col items-center justify-center border-l border-[#323232] px-5">
      <p className="mb-3 text-center text-white/70">
        Sign in with a 3rd party app
      </p>
      <button className="my-1 flex w-full flex-row items-center justify-center rounded-full border-[1px] border-[#505050] py-1">
        <GoogleIcon className=" mx-3 bg-transparent text-[#E94432]" />
        <div className="flex-1 bg-transparent">
          <p className="bg-transparent text-start text-sm font-normal text-white">
            Google
          </p>
        </div>
      </button>
      <button className="my-1 flex w-full flex-row items-center justify-center rounded-full border-[1px] border-[#505050] py-1">
        <FacebookIcon className=" mx-3 bg-transparent text-blue-500" />
        <div className="flex-1 bg-transparent">
          <p className="bg-transparent text-start text-sm font-normal text-white">
            Facebook
          </p>
        </div>
      </button>
      <button className="my-1 flex w-full flex-row items-center justify-center rounded-full border-[1px] border-[#505050] py-1">
        <TwitterIcon className=" mx-3 bg-transparent text-[#349BEF]" />
        <div className="flex-1 bg-transparent">
          <p className="bg-transparent text-start text-sm font-normal text-white">
            Twitter
          </p>
        </div>
      </button>
      <p className="text-center text-white text-xs font-light mt-10">
        Registration means you agree to the User Agreement and Privacy Policy
      </p>
    </div>
  );
}

export default OAuth;
