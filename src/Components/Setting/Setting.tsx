import "./../../scss/Setting/Setting.scss"
import React, { useState } from 'react';
import mm from './../../Images/Img.png'

const Setting: React.FC = () => {
    const [managerName, setManagerName] = useState('');
    const [logo, setLogo] = useState<File | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [discord, setDiscord] = useState('');
    const [twitch, setTwitch] = useState('');
    const [opensea, setOpensea] = useState('');
    const [twitter, setTwitter] = useState('');
    const [youtube, setYoutube] = useState('');
    const [instagram, setInstagram] = useState('');


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setLogo(e.target.files[0]);
        }
      }

    return (
        <section className='Setting'>
            <div className='container-Setting'>
                <div className="setting-title">
                    <h3>Setting</h3>
                    {/* <h4>Welcome Setting Page</h4> */}
                </div>
                <div className="setting-infos">
                    <div className="setting-profile">
                        <div className="user-profile">
                            <h2>User Profile</h2>
                            <div className="box-user-profile">
                                <div className="manager-name">
                                    <h4>Club Owner Name</h4>
                                    <input type="text" value={managerName} onChange={(e) => setManagerName(e.target.value)} placeholder="Manager Name" required />
                                </div>
                                <div className='box-logo'>
                                    <img src={mm} alt="club logo"></img>
                                    <div className="modif-club-logo">
                                        <label htmlFor="clubLogo"> Change your club logo</label>
                                        <input id="clubLogo" type="file" onChange={handleFileChange} />
                                    </div>
                                </div>
                                <div>
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                        <div className="user-update">
                            <h2>Update Profile</h2>
                            <div className="box-update-user">
                                <div className="email-user">
                                    <h4>Email</h4>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                                </div>
                                <div className="password-user">
                                    <h4>Password</h4>
                                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                                </div>
                                <div>
                                    <button>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="setting-resaux">
                        <div className="box-title">
                            <h2>Club's Social Media</h2>
                        </div>
                        <div className="personnal-rs">
                            <div className="social-media">
                                <div className="box-sm-left">
                                    <div>
                                        <h4>Discord</h4>
                                        <input type="text" value={discord} onChange={(e) => setDiscord(e.target.value)} placeholder="Discord" required />
                                    </div>
                                    <div>
                                        <h4>Twitter</h4>
                                        <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} placeholder="Twitter" required />
                                    </div>
                                    <div>
                                        <h4>Instagram</h4>
                                        <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder="Instagram" required />
                                    </div>
                                </div>
                                <div className="box-sm-right">
                                    <div>
                                        <h4>Twitch</h4>
                                        <input type="text" value={twitch} onChange={(e) => setTwitch(e.target.value)} placeholder="Twitch" required />
                                    </div>
                                    <div>
                                        <h4>Youtube</h4>
                                        <input type="text" value={youtube} onChange={(e) => setYoutube(e.target.value)} placeholder="Youtube" required />
                                    </div>
                                    <div>
                                        <h4>Opensea</h4>
                                        <input type="text" value={opensea} onChange={(e) => setOpensea(e.target.value)} placeholder="Opensea" required />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Setting;
