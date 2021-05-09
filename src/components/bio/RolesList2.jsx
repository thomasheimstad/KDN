import React from 'react';

const roles = [
  {
    composer: "Verdi",
    operas: [
      {
        title: "Otello",
        role: "Emilia"
      },
      {
        title: "Rigoletto",
        role: "Paggio, Maddalena, Nurse no. 2"
      },
    ]
  },
  {
    composer: "Mozart",
    operas: [
      {
        title: "Cosí fan Tutte",
        role: "Soppidoppi"
      },
    ]
  },
  {
    composer: "Beethoven",
    operas: [
      {
        title: "Fidelio",
        role: "Mrs. Mushimushi"
      },
    ]
  },
  {
    composer: "Britten",
    operas: [
      {
        title: "Sailer Mr. Bailerfailer",
        role: "Starstruck superfan"
      },
    ]
  },
]

let sortRoles = (roller) => {
  function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const composerA = a.composer.toUpperCase();
  const composerB = b.composer.toUpperCase();

  let comparison = 0;
  if (composerA > composerB) {
    comparison = 1;
  } else if (composerA < composerB) {
    comparison = -1;
  }
  return comparison;
}
return roller.sort(compare);
}
const RolesList2 = (props) => {
  const sortedList = sortRoles(roles);
  return (
    <div className="rolesList flex center column basePad">
      <h1>Roles</h1>
      <div className="roleWrapper flex column basePad">
        {
          sortedList.map((composer, i) => {
            return (
              <div key={i} className="role flex column">
                <h2>{composer.composer}</h2>
                {
                  composer.operas.map(opera => {
                    return (
                      <div key={opera.title}>
                        <h3 >{opera.title}</h3>
                        <h4 >{opera.role}</h4>
                      </div>
                    )
                  })
                }
              </div>
            )
            }
          )
        }
      </div>
    </div>
  )
}
export default RolesList2;
