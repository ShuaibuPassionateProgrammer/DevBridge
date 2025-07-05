import { get } from "@/server/users";

export default async function Home() {
  const data = await get();

  return (
    <>
      <h1>Frontend</h1>
      <div>
        <h2>User</h2>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      </div>
    </>
  );
}