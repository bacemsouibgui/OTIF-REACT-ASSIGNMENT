import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  useEffect(() => {
    axios
      .get(" https://otif-server-dot-otif-mx.uc.r.appspot.com/access/?username=")
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  }, [userId]);
  return (
    <div>
      <h1>{user && user.username}</h1>
      <h3>{user && user.email}</h3>
      <h3>{user && user.password}</h3>
      <h3>{user && user.profile_picture_url}</h3>
      <h3>{user && user.phone_num}</h3>

      
    </div>
  );
};
export default Profile;
