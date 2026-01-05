export default async function Profile() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();
  return (
    <div>
      <p>User:</p>
      {user.name}
    </div>
  );
}
