import Link from "next/link";
import RegisterForm from "../../../components/auth/RegisterForm";

export default function Register() {
  return (
    <RegisterForm
      title={"Зарегистрироваться"}
      buttonText={"Зарегистрироваться"}
    >
      Если вы уже зарегестрированы нажмите{" "}
      <Link href={"/auth/login"} className="link">
        здесь
      </Link>
    </RegisterForm>
  );
}
