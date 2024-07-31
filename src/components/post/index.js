import React from "react";
import markdownIt from "markdown-it";
import matter from "gray-matter";
import { Typography } from "@mui/material";

const md = markdownIt();

const Post = ({ content }) => {
    const { data, content: mdContent } = matter(content);
    const htmlContent = md.render(mdContent);

    return (
        <div>
            <Typography sx={{ textAlign: "center" }} variant="h2">
                {data.title}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default Post;
