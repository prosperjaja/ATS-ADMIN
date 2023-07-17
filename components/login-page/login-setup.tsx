import React, { useState } from "react";
import Image from "next/image";
import { TextInput, PasswordInput, Checkbox, Button } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValue = {
  email: "",
  password: "",
};

const url = "https://ats-admin-dashboard.onrender.com/api/login";
export const LoginSetUp = () => {
  const [user, setUser] = useState(initialValue);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      setIsLoading(false);
      if (data?.error) {
        setError(data?.error);
        return;
      }
      toast.success("Login successful");
      setUser(data);
      localStorage.setItem("my-user", JSON.stringify(data));
      push("/dashboard");
    } catch (error) {
      toast.error("uh oh, wrong login details!");
      setIsLoading(false);
      console.log("error-response", error);
    }
  };
  return (
    <main>
      <ToastContainer toastClassName={"CustomToast"} />
      <section className="bg-[#e5e5e5] flex flex-col gap-3 justify-center items-center h-[100vh]">
        <Image src={"/images/AFEX logo 1.svg"} alt="" width={130} height={40} />
        <article className="flex flex-col items-center justify-center gap-2 w-[30rem] py-[2rem] px-[clamp(1rem,3vw,2rem)] bg-white rounded-xl shadow-xl shadow-[0px 51.8664px 76.6208px rgba(193, 194, 198, 0.19)]">
          <div className="flex flex-col gap-2 w-full pt-3">
            <h3 className="font-medium">Sign in to ATS Admin</h3>
            <p className="font-medium">
              Email <sup className="text-red-600">*</sup>
            </p>
            <TextInput
              value={user.email}
              placeholder="email.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <p className="font-medium">
              Password <sup className="text-red-600">*</sup>
            </p>
            <PasswordInput
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <div className="flex items-center gap-3">
              <Checkbox />
              <span className="font-medium">Remember me</span>
            </div>
            <Button
              type="submit"
              onClick={handleSubmit}
              styles={{
                root: {
                  "&:hover": {
                    background: "red",
                  },
                },
              }}
              className="bg-[#38cb89]"
            >
              Sign In
              {isLoading ? (
                <img
                  src="/images/Rolling-1s-200px.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="ml-3"
                />
              ) : null}
            </Button>
            <div className="text-red-600 flex justify-end mt-2">
              <Link href={"/verify"}>
                <h3> Forgot password ?</h3>{" "}
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};
