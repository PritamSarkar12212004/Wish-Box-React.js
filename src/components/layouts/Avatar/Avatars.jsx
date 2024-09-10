import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function Avatars() {
  return (
    <div>
      <AvatarGroup max={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://i.pinimg.com/564x/16/a1/ac/16a1ac3fc4ae8d26f5e79bb629a067e0.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://i.pinimg.com/564x/39/82/07/398207f953fcdc31023ad6b117016f68.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://i.pinimg.com/564x/d1/5b/eb/d15bebdb48f7e7c3380c55598239d927.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://i.pinimg.com/564x/70/0e/27/700e273957f30baaadff6e8e5ffe0cc4.jpg"
        />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </div>
  );
}
export default Avatars;
