import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";

export default function CardTeams({ team }) {
  return (
    <Card
      style={{
        height: "100%",
        width: "100%",
        border: "solid lightgrey 1px",
      }}
    >
      <CardHeader
        avatar={<img src={team.image} height="40px" width="40px" alt="" />}
        title={<Typography style={{ fontWeight: 600 }}>{team.name}</Typography>}
        subheader={
          team.created_at ? `created on ${team.created_at}` : `no dates`
        }
        action={
          <IconButton>
            <StarIcon style={team.is_favorited ? { color: "orange" } : null} />
          </IconButton>
        }
      />
      <CardContent>
        <Typography>{team.description}</Typography>
      </CardContent>
      <CardActions>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderTop: "solid 1px lightgrey",
            width: "100%",
          }}
        >
          <Button
            style={{ color: "black" }}
            startIcon={<ChatIcon />}
          >{`${team.campaigns_count} Campaigns`}</Button>
          <Button
            style={{ color: "black" }}
            startIcon={<PeopleIcon />}
          >{`${team.leads_count} Leads`}</Button>
        </div>
      </CardActions>
    </Card>
  );
}
