import { IAuth } from "types";

interface props {
  auth: IAuth | undefined;
}

function SignInSignup({ auth }: props) {
  const handleOpenSignin = () => {
    auth?.handleOpenModal();
  };
  return (
    <div className=" flex flex-row items-center space-x-2 bg-inherit">
      <button
        className="rounded-md border-[1px] border-white/60 py-[3px] px-5 font-light text-white"
        onClick={handleOpenSignin}
      >
        Sign in - Sign up
      </button>
    </div>
  );
}

export default SignInSignup;
