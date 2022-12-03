import { useState, useEffect, useRef } from 'react';
import { catchErrors } from '../utils';
import { getCurrentUserPlaylists, getCurrentUserProfile, generatePlaylist } from '../spotify';
import { StyledHeader, StyledBPM } from '../styles';
import { PlaylistsGrid } from '../components/PlaylistsGrid'
import SectionWrapper from "../components/SectionWrapper";

const Main = () => {
    const [profile, setProfile] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    const [CheckedItems, setCheckedItems] = useState(new Map());
    const [CheckedHref, setCheckedHref] = useState([]);
    const lowBPM = useRef();
    const highBPM = useRef();


    const handleSubmit = (event) => {
        event.preventDefault();
        const lb = lowBPM.current.value
        const hb = highBPM.current.value
        generatePlaylist(CheckedHref, lb, hb);
        lowBPM.current.value = "";
        highBPM.current.value = "";
    };

    const changeChecked = (e) => {
        const name = e.target.name;
        const isChecked = e.target.checked;
        setCheckedItems(map => new Map(map.set(name, isChecked)));
        const newArr = [...CheckedHref];
        if (isChecked) {
            newArr.push(e.target.value);
        } else {
            newArr.splice(newArr.indexOf(e.target.value), 1)
        }
        setCheckedHref(newArr)
    }

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
                    <form onSubmit={handleSubmit}>
                        <StyledBPM>
                            <label htmlFor="BPM">BPM </label>
                            <input id="bpm1" style={{marginLeft:"5px"}} ref={lowBPM} type="number" />
                            <label>-</label>
                            <input id="bpm2" type="number" ref={highBPM}/>
                            <button type="submit">Submit</button>
                        </StyledBPM>
                    </form>
                    {playlists && (
                        <main>
                            <SectionWrapper title="Playlists" seeAllLink="/playlists">
                                <PlaylistsGrid playlists={playlists.items} changeChecked={changeChecked} CheckedItems={CheckedItems} />
                            </SectionWrapper>
                        </main>
                    )}
                </>
            )}
        </>
    )
};

export default Main;