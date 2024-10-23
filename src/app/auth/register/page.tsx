import Form from "../../../components/auth/Form";
import Link from "next/link";

export default function Register() {
  return (
    <Form
      title={"Зарегистрироваться"}
      buttonText={"Зарегистрироваться"}
      repeat
    >
      Если вы уже зарегестрированы нажмите{" "}
      <Link href={"/auth/login"} className="link">
        здесь
      </Link>
    </Form>
  );
}
