const srApi = {
    search(term) {
        return fetch(`http://api.sr.se/api/v2/episodes/search/?query=${term}&format=json`)
        .then(res => {
            return res.json();
        }).then(jsonResponse => {
            if (!jsonResponse.episodes) {
                return [];
            }

            return jsonResponse.episodes.map(episode => ({
                id: episode.id,
                title: episode.title,
                program: episode.program.name,
                description: episode.description,
                audio: episode.listenpodfile.url
            }));
        })
    }
}

export default srApi;