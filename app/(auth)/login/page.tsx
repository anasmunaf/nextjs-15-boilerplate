"use client";

import React, { useActionState } from "react";
import { Box, Button, Grid2, Link, TextField, Typography } from "@mui/material";
import onLogin from "./actions";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { appRoute, authRoute } from "@/constants/routes";

function getValues(form: FormData) {
  const obj: any = {};
  for (const item of form.entries()) {
    obj[item[0]] = item[1];
  }
  return obj;
}
async function getData(body: any) {
  return await fetch("https://dummyjson.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

const initialState = {
  response: {},
  error: {},
};

const pages = () => {
  const [state, action, isPending] = useActionState(onLogin, initialState);
  const router = useRouter();

  const { control } = useForm({
    defaultValues: {
      username: "emilys",
      password: "emilyspass",
    },
  });

  // async function onSubmit(values: any) {
  //   const response = await getData(values);
  //   localStorage.setItem("token", response.accessToken);
  //   router.push(appRoute.dashboard);
  // }

  return (
    <Grid2
      container
      justifyContent={"center"}
      alignItems="center"
      height={"100vh"}
    >
      <Grid2 size={4} container flexDirection="column" gap={2}>
        <Typography variant="h3" textAlign="center">
          Management System
        </Typography>
        <Box
          component="form"
          // onSubmit={handleSubmit(onSubmit)}
          display="flex"
          flexDirection="column"
          gap={2}
          action={action}
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                label="Email"
                variant="outlined"
                error={!!state?.errors?.username}
                helperText={state?.errors?.username}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                error={!!state?.errors?.password}
                helperText={state?.errors?.password}
                {...field}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isPending}
            loading={isPending}
          >
            Login
          </Button>
        </Box>
        <Link underline="none" onClick={() => router.push(authRoute.register)}>
          Register
        </Link>
      </Grid2>
    </Grid2>
  );
};

export default pages;
