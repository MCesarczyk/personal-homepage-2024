import { handleLogin } from "@/app/actions";
import { Button, Input, PageTitle } from "@/ui";

export default async function Login() {
  return (
    <form action={handleLogin} className="flex flex-col gap-4 w-96 my-12 mx-auto">
      <PageTitle>Log in</PageTitle>
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Button type="submit">Log in</Button>
    </form>
  );
}
