const PostDetails = async ({ postId }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );
  const post = await response.json();

  return (
    <div
      style={{
        width: "70%",
        padding: "10px",
        borderRadius: "10px",
        marginTop: "20px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;

/* const page = async ({ params }) => {
    let parameter = await params;
    const postId = parameter.postId;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        next: {
          revalidate: 300,
        },
      }
    );
    const post = await response.json();
    console.log(post);
    return (
      <div
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Post Details</h1>
        <div
          style={{
            width: "70%",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "20px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <h1>{post.title}</h1>
          <hr />
          <p>{post.body}</p>
        </div>
      </div>
    );
  };
  
  export default page; */
