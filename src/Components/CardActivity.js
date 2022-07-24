import { Card, CardHeader } from "@mui/material";

export default function CardActivity({ activity }) {
  return (
    <Card style={{ boxShadow: "none" }}>
      <CardHeader
        avatar={
          <img src={activity.person.avatar} height="40px" width="40px" alt="" />
        }
        title={`${activity.person.name} ${activity.action} ${activity.target}`}
        subheader={
          activity.created_at ? `${activity.created_at}` : `no timings`
        }
      />
    </Card>
  );
}
