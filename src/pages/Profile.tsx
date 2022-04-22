import { useAppSelector } from "../Data/hooks"
import { useAppDispatch } from "../Data/hooks"
import { RootState } from "../Data/store"
import { fetchUser } from "../api-call/fetchUser"
import { setUserID } from "../Data/redux/userSlice"
import { setUserDisplayName } from "../Data/redux/userSlice"
import { setImgSrc } from "../Data/redux/userSlice"
import { useEffect } from "react"

const Profile = () => {
    const accessToken = useAppSelector((state: any) => state.accessToken.value);
    const userDisplayName = useAppSelector((state: RootState) => state.user.displayName);
    const imgSrc = useAppSelector((state: RootState) => state.user.imgSrc);
    const dispatch = useAppDispatch();

    useEffect(() => {
        accessToken !== undefined && (
            fetchUser(accessToken).then(res => {
                dispatch(setUserID(res.id));
                dispatch(setUserDisplayName(res.display_name));
                dispatch(setImgSrc(res.images[0].url));
            }));
    }, [accessToken, dispatch]);
    
    return (
        <div className="profile">
            <img className="" src={imgSrc} alt={userDisplayName} />
            <h2 className="txtlog"> Logged in as: {userDisplayName}</h2>
        </div>
    );
};

export default Profile;