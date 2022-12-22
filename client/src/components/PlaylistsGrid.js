import { StyledGrid } from '../styles';
import PropTypes from 'prop-types'

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange, value }) => (
    <input type={type} name={name} checked={checked} onChange={onChange} value={value} className='round'/>
);

Checkbox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

const PlaylistsGrid = ({ playlists, changeChecked, CheckedItems }) => {
    return (<>
        {playlists && playlists.length ? (
            <StyledGrid>
                {playlists.map((playlist, i) => (
                    <li className="grid__item" key={i}>
                        <label key={playlist.key} className="label">
                        {playlist.images.length && playlist.images[0] && (
                            <div className="grid__item__img">
                                <img src={playlist.images[0].url} alt={playlist.name} />
                            </div>
                        )}
                        <h3 className="grid__item__name overflow-ellipsis">{playlist.name}</h3>
                        <p className="grid__item__label">Playlist</p>
                        <div className="round">
                            <Checkbox name={playlist.name} checked={CheckedItems.get(playlist.name)} id={i}
                                  onChange={changeChecked} value={playlist.href}/>
                            <label htmlFor={i}></label>
                        </div>
                        </label>
                    </li>
                ))}
            </StyledGrid>
        ) : (
            <p className="empty-notice">No playlists available</p>
        )}
    </>
    )
}

export default PlaylistsGrid;