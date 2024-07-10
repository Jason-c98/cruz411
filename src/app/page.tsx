"use client"
import Button from "@mui/material/Button"
import Image from "next/image";
import styles from "./page.module.css";
import {useEffect, useState} from "react"
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Home(){

return (
  <main className={styles.main}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Button color="inherit">Post</Button>
      </Toolbar>
    </AppBar>
    <Image
      src={process.env.NEXT_PUBLIC_FILE_LOCATION + "stock-image.png"}
      width={500}
      height={400}
      alt="Stock image"
    >
    </Image>
  </main>
  );
}