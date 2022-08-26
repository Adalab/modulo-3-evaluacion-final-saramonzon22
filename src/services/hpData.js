const hpData = () => {
    return fetch('https://hp-api.herokuapp.com/api/characters')
        .then((response) => response.json())
        .then((data) => {

            const hpDataClean = data.map((pj) => {
                return {
                    name: pj.name,
                    gender: pj.gender,
                    picture: pj.image,
                    species: pj.species,
                };

            });
            console.log(hpDataClean);
            return hpDataClean;
        });
};

export default hpData;


