export const handleLogin = async (formData: FormData) => {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log(`Logging in as ${email} with password ${password} to ${process.env.BACKEND_URL}`);

  const response = await fetch(`${process.env.API_URL}${process.env.API_PREFIX}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  console.log(data);
};
