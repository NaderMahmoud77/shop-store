import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={4} sx={{ p: 4, maxWidth: 400, width: "100%" }}>
        <Typography
          variant="h5"
         className="typography"
        >
          تسجيل الدخول
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="البريد الإلكتروني"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="كلمة المرور"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="btn-submit"
          >
            تسجيل الدخول
          </Button>
        </form>

        <Typography
          variant="body2"
          className="typography-2"
        >
          ليس لديك حساب؟
          <a
            href="/sign-up"
           className="account "
          >
            إنشاء حساب جديد
          </a>
        </Typography>
      </Paper>
    </Box>
  );
}
