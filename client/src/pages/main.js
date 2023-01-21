import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import { getCurrentUserPlaylists, generatePlaylist } from '../spotify';
import { StyledHeader } from '../styles';
import { PlaylistsGrid, SectionWrapper, BPMForm, FormFeedback } from '../components'

const Main = () => {
    const [playlists, setPlaylists] = useState(null);
    const [CheckedItems, setCheckedItems] = useState(new Map());
    const [CheckedHref, setCheckedHref] = useState([]);
    const [FormState, setFormState] = useState({
        lowBPM: "",
        highBPM: "",
        playlistName: "",
        formResponse: 0,
        message: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const lb = FormState.lowBPM;
        const hb = FormState.highBPM;
        const pln = FormState.playlistName;
        if (lb === "" || hb === "" || pln === "") {
            setFormState({
                ...FormState,
                formResponse: -2,
                message: "Please fill out all fields."
            });
        }
        if (CheckedHref.length === 0) {
            setFormState({
                ...FormState,
                formResponse: -2,
                message: "Please select at least one playlist."
            });
        }
        else if (lb > hb) {
            setFormState({
                ...FormState,
                formResponse: -2,
                message: "Low BPM must be less than high BPM."
            })
        }
        else {
            generatePlaylist(CheckedHref, lb, hb, pln)
                .then(() => {
                    setFormState({
                        lowBPM: "",
                        highBPM: "",
                        playlistName: "",
                        formResponse: 1
                    });
                    setCheckedItems(new Map());
                    setCheckedHref([]);
                })
                .catch(() => {
                    setFormState({
                        ...FormState,
                        formResponse: -1
                    });
                });
        }
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

    const handleFormChange = (e) => {
        const value = e.target.value;
        setFormState({
            ...FormState,
            [e.target.name]: value
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            const userPlaylists = await getCurrentUserPlaylists();
            console.log(userPlaylists.data);
            userPlaylists.data.items = userPlaylists.data.items.filter(playlist => playlist.images.length > 0);
            setPlaylists(userPlaylists.data);
        };
        catchErrors(fetchData());
    }, []);

    return (
        <>
            {(
                <>
                    <StyledHeader type="user">
                        <div className="header__inner">
                            <div>
                                <h1 className="header__name">{"BPM Sort"}</h1>
                                <p>
                                    Select the playlists and specify a desired BPM bucket to create a playlist containing those BPM's
                                </p>
                            </div>
                        </div>
                    </StyledHeader>
                    <BPMForm onSubmit={handleSubmit} onChange={handleFormChange} formState={FormState}></BPMForm>
                    <FormFeedback success={ FormState.formResponse } message={ FormState.message }></FormFeedback>
                    {playlists && (
                        <main>
                            <SectionWrapper title="Select one or more playlists">
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