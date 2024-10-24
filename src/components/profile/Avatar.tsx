import Image from "next/image";

export default function Avatar({ src }: { src?: string }) {
  return (
    <div className={`avatar`}>
      <div className={`rounded-full`}>
        <Image
          width={500}
          height={500}
          src={src || "/avatar.png"}
          alt="avatar"
        />
      </div>
    </div>
  );
}
