import fs from "fs";
import path from "path";
import Post from "@/components/post";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), "src", "posts");
    console.log("post", postsDirectory);
    const files = fs.readdirSync(postsDirectory);
    return files.map((file) => ({
        slug: file.replace(".md", ""),
    }));
}

export default function PostPage({ params }) {
    const { slug } = params;
    console.log("slug", slug);
    const filePath = path.join(process.cwd(), "src", "posts", `first.post.md`);
    const content = fs.readFileSync(filePath, "utf8");

    return <Post content={content} />;
}
