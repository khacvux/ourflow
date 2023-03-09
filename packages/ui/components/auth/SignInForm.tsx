function SignInForm() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <p className="text-sm font-light text-[#767676]">
          Login with your email
        </p>
        <input
          type="email"
          placeholder="Email"
          className="mt-3 w-full rounded-md bg-[#323232] py-3 px-3 font-light text-white outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="mt-5 w-full rounded-md bg-[#323232] py-3 px-3 font-light text-white outline-none"
        />
        <p className="mt-3 cursor-pointer text-end text-sm text-blue-500">
          Forgot password?
        </p>
      </div>

      <button className="bg-blue-500 py-2 font-normal rounded-md text-white mb-7">Sign in</button>
    </div>
  );
}

export default SignInForm;
