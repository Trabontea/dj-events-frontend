import Link from "next/link";
import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout title="About Dj events">
      <h1>About</h1>
      <p>This is an app to find the latest DJ an other musical events</p>
      <Link href="/">Home</Link>
    </Layout>
  );
}
