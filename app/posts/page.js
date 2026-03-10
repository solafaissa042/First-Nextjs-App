import Link from "next/link";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 300,
    },
  });
  const posts = await response.json();
  console.log(posts);
  const postJSX = posts.map((post) => {
    return (
      <Link
        style={{
          width: "70%",
        }}
        key={post.id}
        href={`/posts/${post.id}`}
      >
        <div
          style={{
            padding: "10px",
            borderRadius: "10px",
            marginTop: "20px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Posts Page</h1>
      {postJSX}
    </div>
  );
};

export default page;
