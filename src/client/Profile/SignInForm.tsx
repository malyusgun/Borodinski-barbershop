import { SignInFormProps } from "@/types";
import clsx from "clsx";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react"
// import { usePathname } from "next/navigation"
import { FormEventHandler } from "react";

const SigninForm: React.FC<SignInFormProps> = ({
  activeSignInForm,
  setActiveSignInForm,
  setActiveSignUpForm,
}) => {
  const router = useRouter();
  // const pathname = usePathname()
  // const session = useSession()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res && !res.error) {
      router.push("/");
    } else {
      alert("Регистрация завершилась провалом :(");
      console.log(res?.error);
    }
  };
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 z-20 w-full h-full bg-black bg-opacity-50",
        {
          hidden: !activeSignInForm,
          block: activeSignInForm,
        }
      )}
    >
      <div
        className={clsx(
          "relative translate-y-1/2 m-auto w-max h-max bg-bgcolor py-[40px] px-[60px] max-[425px]:py-[30px] max-[425px]:px-[40px]",
          {
            "animate-descent": activeSignInForm,
          }
        )}
      >
        <h1 className="text-4xl font-bold mb-7 max-[425px]:text-[24px]">Войти в учётную запись</h1>
        <form action="post" onSubmit={handleSubmit}>
          <input
            className="block w-[300px] max-[425px]:w-[200px] border-[1px] border-solid border-black rounded-[5px] py-[2px] px-[5px] resize-none mb-5 mx-auto bg-bgcolor"
            type="email"
            name="email"
            placeholder="Почта"
            required
          />
          <input
            className="block w-[300px] max-[425px]:w-[200px] border-[1px] border-solid border-black rounded-[5px] py-[2px] px-[5px] resize-none mb-7 mx-auto bg-bgcolor"
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />

          <button
            type="submit"
            className="block bg-black text-white w-1/2 py-3 mx-auto mb-5"
          >
            Войти
          </button>

          <span className="mr-1">Нет аккаунта?</span>
          <button
            onClick={() => {setActiveSignUpForm(true); setActiveSignInForm(false)}}
            className="underline"
          >
            Зарегистрироваться
          </button>
        </form>
        <div
          className="text-[60px] leading-[0.5] font-bold absolute right-[15px] top-[15px] cursor-pointer"
          onClick={() => setActiveSignInForm(false)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
