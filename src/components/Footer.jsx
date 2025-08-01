import React from "react";
import { Box, Typography, Stack, IconButton, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <Box sx={{backgroundColor: '#0d1117', color: 'white', p: 4, mt: 5, textAlign: 'center', }}>
            <Typography variant="h6" gutterBottom>Get In Touch</Typography>
            <Stack direction="row" justifyContent="center" spacing={3} sx={{ my: 2}}>
                <IconButton component={Link} href="https://wa.me/6285761890269" target="_blank" rel="noopener" color="inherit">
                    <WhatsAppIcon/>
                </IconButton>
                <IconButton component={Link} href="mailto:yulipipk@gmail.com" target="_blank" rel="noopener" color="inherit">
                    <EmailIcon/>
                </IconButton>
                <IconButton component={Link} href="https://github.com/yuliaziliwu" target="_blank" rel="noopener" color="inherit">
                    <GitHubIcon/>
                </IconButton>
                <IconButton component={Link} href="https://instagram.com/yuliapipkaaa" target="_blank" rel="noopener" color="inherit">
                    <InstagramIcon/>
                </IconButton>
            </Stack>
            <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 2 }}>Only Learn On My Life</Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: 2 }}> © {new Date().getFullYear()} Yulia Pipka Ziliwu - FrontEnd Dev</Typography>
        </Box>
    );
}