import Link from "next/link";
import Modal from "../../../../components/auth/Modal";

export default function AdminLogin() {
  return (
    <Modal title={"Вход для менеджера"} buttonText={"Войти"}>
      Вход для{" "}
      <Link href={"/auth/login/admin"} className="link">
        Админинстратора
      </Link>
    </Modal>
  );
}