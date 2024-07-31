import fs from "fs";
import path from "path";
import Post from "@/components/post";
import { Box } from "@mui/material";

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), "src", "posts");
    const files = fs.readdirSync(postsDirectory);
    return files.map((file) => ({
        slug: file.replace(".md", ""),
    }));
}

export default function PostPage({ params }) {
    const { slug } = params;
    const filePath = path.join(process.cwd(), "src", "posts", `${slug}.md`);
    const content = fs.readFileSync(filePath, "utf8");

    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "70%",
                    margin: "auto",
                }}
            >
                <Post content={content} />
            </Box>
        </Box>
    );
}
