import { StyledBPMForm } from '../styles';

const BPMForm = ({ onSubmit, onChange, formState }) => (
    <StyledBPMForm onSubmit={onSubmit}>
        <div className="form">
            <div className="subtitle">Please Enter a playlist name and corresponding BPM bands</div>
            <div className="input-container ic1">
                <input name="playlistName" className="input" type="text" onChange={onChange} value={formState.playlistName} placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="playlistName" className="placeholder">Playlist Name</label>
            </div>
            <div className="input-container ic2">
                <input name="lowBPM" className="input" type="number" onChange={onChange} value={formState.lowBPM} placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="lowBPM" className="placeholder">Low BPM</label>
            </div>
            <div className="input-container ic2">
                <input name="highBPM" className="input" type="number" onChange={onChange} value={formState.highBPM} placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="highBPM" className="placeholder">High BPM</label>
            </div>
            <button type="submit" className="submit">Submit</button>
        </div>
    </StyledBPMForm>
);
export default BPMForm;