"use client";
import { FormEvent, useState } from "react";
import "./page.css";
export default function page() {
  const [logIn, setLogIn]: [boolean, (arg0: boolean) => void] = useState(true);
  const [name, setName]: [string, (arg0: string) => void] = useState("");
  const [email, setEmail]: [string, (arg0: string) => void] = useState("");
  const [password, setPassword]: [string, (arg0: string) => void] =
    useState("");
  const [error, setError]: [string, (arg0: string) => void] = useState("");
  const [showError, setShowError]: [boolean, (arg0: boolean) => void] =
    useState(false);

  const handleLogIn = (): void => {
    setLogIn(!logIn);
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: string = JSON.stringify({
      name,
      email,
      password,
    });
    const areEmpty: boolean =
      name.length == 0 && email.length == 0 && password.length == 0;

    if (!areEmpty) {
      await fetch("http://localhost/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          window.location.href = "/";
        })
        .catch((err) => console.log(err));
    } else {
      setError("All fields are required");
      setShowError(true);
    }
  };

  const register = () => {};
  return (
    <main className="flex flex-col min-h-screen justify-center items-center mx-auto bg-dark">
      <section className="flex flex-col bg-light p-4 rounded-md w-1/2 form">
        {showError && (
          <span className="bg-red-700 p-2 rounded-xl">{error}</span>
        )}
        {!logIn && (
          <form onSubmit={(e) => handleRegister(e)}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block mb-1 font-semibold text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full bg-black border border-gray-300 rounded-md shadow-sm p-2"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-semibold text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full bg-black border border-gray-300 rounded-md shadow-sm p-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 font-semibold text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full bg-black border border-gray-300 rounded-md shadow-sm p-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold rounded-md p-2 mt-4"
              >
                Register
              </button>
            </div>
            <p className="text-gray-600 text-center mt-3">
              Have an account?{" "}
              <span
                className="cursor-pointer text-blue-500 underline"
                onClick={handleLogIn}
              >
                Sign in
              </span>
            </p>
          </form>
        )}
        {logIn && (
          <form>
            <div className="mb-2">
              <label
                htmlFor="log_email"
                className="block mb-1 font-semibold text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="log_email"
                name="email"
                className="w-full bg-black border border-gray-300 rounded-md shadow-sm p-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="log_password"
                className="block mb-1 font-semibold text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                id="log_password"
                name="password"
                className="w-full bg-black border border-gray-300 rounded-md shadow-sm p-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold rounded-md p-2 mt-4"
              >
                Sign in
              </button>
            </div>
            <p className="text-gray-600 text-center mt-3">
              Don't ave an account?{" "}
              <span
                className="cursor-pointer text-blue-500 underline"
                onClick={handleLogIn}
              >
                Sign up
              </span>
            </p>
          </form>
        )}
      </section>
    </main>
  );
}
