import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

const page = async ({ params }) => {
  let parameter = await params;
  const postId = parameter.postId;

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
      <Suspense fallback={<h1>Loading ...</h1>}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
};

export default page;
