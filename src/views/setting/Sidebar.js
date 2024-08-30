import LockSVG from "../../svgIcons/Lock";
import InstagramSVG from "../../svgIcons/Instagram";
import NotificationSVG from "../../svgIcons/Notification";
import AtrateSVG from "../../svgIcons/Atratee";
import UserDetailSVG from "../../svgIcons/UserDetail";
import DeleteSVG from "../../svgIcons/Delete";

function Sidebar(props) {
    return (
        <div className="profile-menu-bar card">
            <ul className="profile-menu">
                <li>
                <a className={props.activeTab === 1 && 'active'} onClick={()=>props.setActiveTab(1)}><span><LockSVG /> </span> Change Password</a>
                </li>
                <li>
                <a className={props.activeTab === 2 && 'active'} onClick={()=>props.setActiveTab(2)}><span><NotificationSVG /></span> Portfolio Account</a>
                </li>
                <li>
                <a className={props.activeTab === 3 && 'active'} onClick={()=>props.setActiveTab(3)}><span><InstagramSVG /></span> Document</a>
                </li>
                <li>
                <a ><span><DeleteSVG /></span> Delete account</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;