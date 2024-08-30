import Sidebar from "./Sidebar";
import CompanyDetail from "./CompanyDetail";
import ContactDetail from "./ContactDetail";
import ChangePassword from "./ChangePassword";
import PortfolioAccount from "./PortfolioAccount";
import Documents from "./Documents";
import { useState } from "react";

function Profile() {
    const [activeTab, setActiveTab] = useState(1)
    return (
        <div className="wrapper-box">
            <div className="profile-wrapper">
                <div className="left-bar">
                    <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <div className="right-bar">
                    {
                        activeTab === 1 && <ChangePassword />
                    }
                    {
                        activeTab === 2 && <PortfolioAccount />
                    }
                    {
                        activeTab === 3 && <Documents />
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;