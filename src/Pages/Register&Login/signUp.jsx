import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useState , useEffect} from "react";

import "./loginRegister.css";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("كلمة المرور وتأكيدها غير متطابقين");
      return;
    }
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
        <Typography className="typography" variant="h5">
          إنشاء حساب جديد
        </Typography>

        <form onSubmit={handleRegister}>
          <TextField
            label="الاسم بالكامل"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <TextField
            label="تأكيد كلمة المرور"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            className="btn-submit"
            type="submit"
            variant="contained"
            fullWidth
          >
            إنشاء الحساب
          </Button>
        </form>

        <Typography variant="body2" className="typography-2">
          لديك حساب بالفعل؟{" "}
          <a className="account " href="/login">
            تسجيل الدخول
          </a>
        </Typography>
      </Paper>
    </Box>
  );
}
