import Link from "next/link";
import Modal from "../../../../components/auth/Modal";

export default function AdminLogin() {
  return (
    <Modal title={"Вход для админинстратора"} buttonText={"Войти"}>
      Вход для{" "}
      <Link href={"/auth/login/manager"} className="link">
        Менеджера
      </Link>
    </Modal>
  );
}
