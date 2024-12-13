import { authRoute } from "@/constants/routes";
import { Typography } from "@mui/material";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(authRoute.login);

  return <Typography>Hello World .</Typography>;
}
