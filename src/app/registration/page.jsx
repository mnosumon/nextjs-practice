export const SignUpForm = () => {
  return (
    <>
      <div className="px-10 sm:px-20">
        <form className="bg-white shadow-md rounded-lg px-8 pt-14 pb-8 mb-4 mt-4">
          <div className="mb-4 relative">
            <label className="sr-only" htmlFor="firstname">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-4 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="First Name"
            />
            <div
              id="firstNameErrorMessage"
              className="text-red-500 text-xs italic text-right font-bold"
            ></div>
          </div>
          <div className="relative mb-4">
            <label className="sr-only" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-4 
              font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="relative mb-4">
            <label className="sr-only" htmlFor="emailaddress">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-4 
              font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              "
              id="emailaddress"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-6 relative">
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-4 
              font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-700 hover:bg-green-300 text-white text-sm font-bold p-4 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              CLAIM YOUR FREE TRIAL
            </button>
          </div>
          <p
            id="termsAndConditions"
            className="text-sm mb-4 text-center pt-4 text-gray-700"
          >
            By clicking the button, you are agreeing to our{" "}
            <a href="#" className="font-bold text-red-700">
              Terms and Services
            </a>
          </p>
        </form>
      </div>
    </>
  );
};
export default SignUpForm;
