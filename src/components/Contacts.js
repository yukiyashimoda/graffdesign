import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: '96%',
          mx: "auto",
          p: 2,
          border: "2px solid  transparent",
          borderRadius: "1px",
        }}
      >
        <Typography variant="h4" align="left" mb={2} style={{ fontSize: '30px', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', letterSpacing: 10, marginBottom:'50px'}}>
          Contact Us
        </Typography>
        <Typography variant="body1" style={{ fontSize: '15px', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', letterSpacing: 5, marginBottom: '20px', lineHeight:'30px', justifyContents: 'center'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem non
        est consectetur, non hendrerit odio gravida.
      </Typography>
        <form onSubmit={handleSubmit} >
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
            sx={{border: "2px solid  #fff",
                 borderRadius: "20px", 
                 color: '#f6f6f6',         
                }}
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
            sx={{border: "2px solid  #fff",
                 borderRadius: "20px", 
                 color: '#f6f6f6',         
                }}
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
            sx={{border: "2px solid  #fff",
                 borderRadius: "20px", 
                 color: '#f6f6f6',         
                }}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 5,
              height: '50px',
              backgroundColor: "#b8d200",
              color: "#fff",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#111",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}