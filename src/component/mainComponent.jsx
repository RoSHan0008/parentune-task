import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function MainComponent() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const GetData = async () => {
    setLoader(true);
    await fetch("https://api9.parentune.com/content/v2/dailyfocus", {
      method: "GET",
      headers: {
        authtoken:
          "9467c5b4e290227a2a270f4a1ec2a37643b4a5dfd90a993b4e6ceb61ea0d5b5a",
        instanceid:
          "c4b50b993092ab3ed5f35ad684f82b4e6d081a4ed65c49902d80dde82183057a",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data?.data.content[0]);
        setLoader(false);
      })
      .catch((err) => {
        console.error(err);
        setLoader(false);
      });
  };
  console.log(data.data);
  useEffect(() => {
    GetData();
  }, []);
  return (
    <Grid
      sx={{
        backgroundColor: "#f1f1f1",
        height: "100%",
        width: "20rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        p={1}
        sx={{
          fontWeight: "bold",
        }}
      >
        Today's Focus
      </Typography>
      <Grid sx={{
        display:"flex",
        alignItems:"end",
        flexDirection:"column"
      }}>
        {data?.data?.map((item) => (
          <Grid
            key={item?.content_id}
            sx={{
              margin: "1rem",
            }}
          >
            <Grid
              item
              sx={{
                background: "#fff",
                width: "17rem",
                borderRadius: "8px",
              }}
            >
              <img
                src={item?.thumb || item?.image}
                alt=""
                style={{
                  width: "17rem",
                  height: "auto",
                  borderRadius: "8px 8px 0px 0px",
                }}
              />
              <Typography
                sx={{
                  padding: ".5rem",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {item.custom_title || item.title}
              </Typography>
              <Typography
                sx={{
                  padding: ".5rem",
                  fontSize: "12px",
                }}
              >{ item.question_text || item.custom_title}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
