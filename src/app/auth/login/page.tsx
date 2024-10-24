import Link from "next/link";
import SignInForm from "../../../components/auth/SignInForm";

export default function Login() {
  return (
    <SignInForm title={"Вход"} buttonText={"Войти"}>
      Если вы ещё не зарегестрированы нажмите{" "}
      <Link href={"/auth/register"} className="link">
        здесь
      </Link>
    </SignInForm>
  );
}
