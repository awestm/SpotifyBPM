import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import {getCurrentUserPlaylists, getCurrentUserProfile} from '../spotify';
import { StyledHeader } from '../styles';
import PlaylistsGrid from '../components/PlaylistsGrid'
import SectionWrapper from "../components/SectionWrapper";

const Main = () => {
    const [profile, setProfile] = useState(null);
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getCurrentUserProfile();
            setProfile(data);

            const userPlaylists = await getCurrentUserPlaylists();
            setPlaylists(userPlaylists.data);
        };

        catchErrors(fetchData());
    }, []);

    return (
        <>
            {profile && (
                <>
                    <StyledHeader type="user">
                        <div className="header__inner">
                            <div>
                                <h1 className="header__name">{"Spotify BPM Sorting Tool"}</h1>
                                <p>
                                    Select the playlists and specify a desired BPM bucket to create a playlist containing those BPM's
                                </p>
                            </div>
                        </div>
                    </StyledHeader>

                    {playlists && (
                        <main>
                            <SectionWrapper title="Playlists" seeAllLink="/playlists">
                                <PlaylistsGrid playlists={playlists.items.slice(0, 10)} />
                            </SectionWrapper>
                        </main>
                    )}
                </>
            )}
        </>
    )
};

export default Main;