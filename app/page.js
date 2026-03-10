import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        fontWeight: "bold",
      }}
    >
      <Link href="/posts">Tab To See Posts</Link>
    </div>
  );
}
