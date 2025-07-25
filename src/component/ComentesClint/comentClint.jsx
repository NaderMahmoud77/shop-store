import { Box } from "@mui/material";

import "./comentClint.css";
import { ComentSingle } from "./comentSingle";

export default function CommentClint() {
  return (
    <div className="comment-clint">
      <h2 className="title">آراء عملائنا</h2>
      <Box sx={{ width: "80%", margin: "auto", mt: 5 }}>
        <ComentSingle />
      </Box>
    </div>
  );
}
