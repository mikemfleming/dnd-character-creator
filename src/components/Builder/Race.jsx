import React from 'react';
import { Link } from 'react-router-dom';

const Race = ({ onSetRace, onSetSubrace, race, subrace }) => (
  <div>
    <div className="tc">
      <h2 className="fl w-100 pa2 bg-navy washed-yellow">
        Select Your Race
      </h2>
      <select
        className="pv2"
        onChange={onSetRace}
        defaultValue={(race ? race.index : 0)}
      >
        <option value="0">Choose One</option>
        <option value="1">Dwarf</option>
        <option value="2">Elf</option>
        <option value="3">Halfling</option>
        <option value="4">Human</option>
        <option value="5">Dragonborn</option>
        <option value="6">Gnome</option>
        <option value="7">Half-Elf</option>
        <option value="8">Half-Orc</option>
        <option value="9">Tiefling</option>
      </select>
    </div>

    {
        !race
          ? null
          : (
            <div className="navy">
              <h1 className="tc">{race.name}</h1>
              <div>
                <p className="measure">{race.alignment}</p>
                <p className="measure">{race.age}</p>
              </div>
              <div>
                {
                  !(race.traits && race.traits.length)
                    ? null
                    : (
                      <table>
                        <tbody>
                          <tr>
                            <th>Racial Traits</th>
                            <th><span>⭐️</span></th>
                          </tr>
                          {
                          !race.traits
                            ? null
                            : (
                              race.traits.map(t => (
                                <tr>
                                  <td>{t.name}</td>
                                  <td>...</td>
                                </tr>
                              ))
                            )
                        }
                        </tbody>
                      </table>
                    )
                }

                {
                  !(race.starting_proficiencies && race.starting_proficiencies.length)
                    ? null
                    : (
                      <table>
                        <tbody>
                          <tr>
                            <th>Starting Proficiencies</th>
                            <th><span>⭐</span></th>
                          </tr>
                          {
                          !race.starting_proficiencies
                            ? null
                            : (
                              race.starting_proficiencies.map(p => (
                                <tr>
                                  <td>{p.name}</td>
                                  <td>...</td>
                                </tr>
                              ))
                            )
                        }
                        </tbody>
                      </table>
                    )
                }

                {/* {
                  !race.starting_proficiency_options
                    ? null
                    : (
                      <form>
                        {
                          race.starting_proficiency_options.from.map(p => (
                            <div>
                              <label>{p.name}</label>
                              <input type="radio" name={p.name}/>
                            </div>
                          ))
                        }
                      </form>
                    )
                } */}

                {
                  !(race.subraces && race.subraces.length)
                    ? null
                    : (
                      <div>
                        {
                          <select onChange={onSetSubrace}>
                            {
                              race.subraces.map((r) => {
                                const subraceId = r.url.split('/').pop();
                                return <option value={subraceId}>{r.name}</option>;
                              })
                            }
                          </select>
                        }
                      </div>
                    )
                }

                {JSON.stringify(subrace)}
              </div>
            </div>
          )
      }
    <Link to="/builder/class">Confirm Choices</Link>
  </div>
);

export default Race;
