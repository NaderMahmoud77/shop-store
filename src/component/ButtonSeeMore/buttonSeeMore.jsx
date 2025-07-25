// Mui
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export function ButtonSeeMore() {
  return (
    <>
      <Tooltip
        title="تفاصيل اكتر للمنتج"
        placement="left-start"
        followCursor
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "1.2rem",
              padding: "10px",
            },
          },
        }}
      >
        <Button className="see-more">عرض المزيد ...</Button>
      </Tooltip>
    </>
  );
}
