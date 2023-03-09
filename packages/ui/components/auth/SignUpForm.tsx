function SignUpForm() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <p className="text-sm font-light text-[#767676]">
          Sign up with your email
        </p>
        <input
          type="email"
          placeholder="Email"
          className="mt-3 w-full rounded-md bg-[#323232] py-3 px-3 font-light text-white outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="mt-3 w-full rounded-md bg-[#323232] py-3 px-3 font-light text-white outline-none"
        />
        <input
          type="password"
          placeholder="Retype"
          className="mt-3 w-full rounded-md bg-[#323232] py-3 px-3 font-light text-white outline-none"
        />
        <p className="text-xs font-light text-[#767676] mt-2 ">Password must consist of 6-20 alphanumeric characters</p>
      </div>

      <button className="rounded-md bg-blue-500 py-2 font-normal text-white ">
        Sign up
      </button>
    </div>
  );
}

export default SignUpForm;
