import Link from "next/link";
import Modal from "../../../components/auth/Modal";

export default function Login() {
  return (
    <Modal title={"Вход"} buttonText={"Войти"}>
      Если вы ещё не зарегестрированы нажмите{" "}
      <Link href={"/auth/register"} className="link">
        здесь
      </Link>
    </Modal>
  );
}
