import React from 'react'

const Login = () => {
  const [currentState, setCurrentState] = React.useState('Sign Up')
  const onsubmit = (e) => {
    e.preventDefault();
  } 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={onsubmit} className="w-full max-w-md bg-white rounded-2xl border border-gray-100 p-8">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
          {currentState}
        </h2>

        {currentState === 'Sign Up' && (
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-200
                         focus:outline-none focus:border-gray-400
                         transition text-gray-800"
              required
            />
          </div>
        )}

        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200
                       focus:outline-none focus:border-gray-400
                       transition text-gray-800"
            required
          />
        </div>

        <div className="mb-10">
          <label className="block text-sm text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 rounded-xl border border-gray-200
                       focus:outline-none focus:border-gray-400
                       transition text-gray-800"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl text-white text-base font-medium
                     bg-gray-900 hover:bg-gray-800 transition"
        >
          {currentState}
        </button>

        <p className="mt-8 text-center text-sm text-gray-500">
          {currentState === 'Sign Up'
            ? 'Already have an account?'
            : "Don’t have an account?"}

          <button
            type="button"
            className="ml-2 text-gray-800 font-medium hover:underline"
            onClick={() =>
              setCurrentState(currentState === 'Sign Up' ? 'Login' : 'Sign Up')
            }
          >
            {currentState === 'Sign Up' ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </form>
    </div>
  )
}

export default Login
