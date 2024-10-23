import Link from "next/link";
import Form from "../../../components/auth/Form";

export default function Login() {
  return (
    <Form title={"Вход"} buttonText={"Войти"}>
      Если вы ещё не зарегестрированы нажмите{" "}
      <Link href={"/auth/register"} className="link">
        здесь
      </Link>
    </Form>
  );
}
