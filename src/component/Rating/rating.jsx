import Rating from "@mui/material/Rating";

export let Ratings = ({ value }) => {
  return (
    <>
      <Rating
        name="size-large"
        defaultValue={value}
        size="large"
        sx={{
          "& .MuiRating-icon": {
            fontSize: "30px", 
          },
        }}
        style={{ direction: "ltr" }}
      />
    </>
  );
};
