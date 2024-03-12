import { Link } from "@/ui";

export default async function ProjectsPage() {
  return (
    <div>
      <Link href="/admin">Go back</Link>
      <h1 className="text-2xl md:text-3xl font-extrabold text-center">Projects</h1>
      <p>Here you can manage your projects.</p>
    </div>
  );
}
