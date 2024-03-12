import { Link } from "@/ui";

export default async function SkillsPage() {
  return (
    <div>
      <Link href="/admin">Go back</Link>
      <h1 className="text-2xl md:text-3xl font-extrabold text-center">Skills</h1>
      <p>Here you can manage your skills.</p>
    </div>
  );
}
