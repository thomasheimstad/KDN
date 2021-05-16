import React from 'react';

const roles = [
  {
    composer: "Adams",
    operas: [
      {
        title: "Nixon in China",
        role: "2. Secretary"
      },
    ]
  },
  {
    composer: "Bizet",
    operas:
    [
      {
        title: "Carmen",
        role: "Mercédès"
      }
    ]
  },
  {
    composer: "Bruce",
    operas:
    [
      {
        title: "Nothing",
        role: "Agnes"
      }
    ]
  },
  {
    composer: "Gounod",
    operas:
    [
      {
        title: "Faust",
        role: "Sibel"
      }
    ]
  },
  {
    composer: "Händel",
    operas: [
      {
          title: "Alcina",
          role: "Ruggiero & Bradamante"
      },
      {
        title: "Ariodante",
        role: "Ariodante"
      }
    ]
  },
  {
    composer: "Monteverdi",
    operas: [
      {
        title: "L’incoronazione di Poppea",
        role: "Ottavia"
      }
    ]
  },
  {
    composer: "Verdi",
    operas: [
      {
        title: "La Traviata",
        role: "Flora"
      },
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
        role: "Dorabella"
      },
      {
        title: "Die Zauberflöte",
        role: "2. Dame"
      },
      {
        title: "Don Giovanni",
        role: "Zerlina"
      },
      {
        title: "Le nozze di Figaro",
        role: "Cherubino"
      },
      {
        title: "Mitridate",
        role: "Arbate"
      },
      {
        title: "Requiem",
        role: "Alto"
      },
    ]
  },
  {
    composer: "Wagner",
    operas: [
      {
        title: "Parsifal",
        role: "Blumenmädchen"
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
const Roleslist2 = (props) => {
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
export default Roleslist2;
