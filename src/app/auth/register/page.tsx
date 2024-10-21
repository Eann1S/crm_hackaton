import Modal from "../../../components/auth/Modal";
import Link from "next/link";

export default function Register() {
  return (
    <Modal
      title={"Зарегистрироваться"}
      buttonText={"Зарегистрироваться"}
      username={true}
      repeat={true}
    >
      Если вы уже зарегестрированы нажмите{" "}
      <Link href={"/auth/login"} className="link">
        здесь
      </Link>
    </Modal>
  );
}
