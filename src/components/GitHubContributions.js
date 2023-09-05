import GitHubCalendar from "react-github-calendar";

import { Box, Typography } from "@mui/material";

export default function App() {
  return (
    <Box sx={{ justifySelf: "center" }}>
      <Typography>@hericlismartins on GitHub</Typography>
      <GitHubCalendar
        loading={false}
        showWeekdayLabels={true}
        weekStart={1}
        year={2022}
        username="hericlismartins"
        displayName="Hericlis Martins"
        colorScheme="dark"
      />
    </Box>
  );
}
