import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Link } from '@mui/material';

const sections = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Organization', id: 'organization' },
  { label: 'Skill', id: 'skill' },
  { label: 'Project', id: 'project' },
];

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#121212' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Stack direction="row" spacing={3}>
          {sections.map((section) => (
            <Link
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              underline="none"
              sx={{
                color: 'white',
                cursor: 'pointer',
                '&:hover': {
                  color: '#90caf9',
                },
              }}
            >
              <Typography variant="body1">{section.label}</Typography>
            </Link>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
