import { get } from "@/server/users";

export default async function Home() {
  const data = await get();

  return (
    <>
      <h1>Frontend</h1>
    </>
  );
}