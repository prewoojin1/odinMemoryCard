export async function getPokemonCards() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
        const data = await response.json()

        const pokemonPromises = data.results.map(async (pokemon) => {
            const detailRes = await fetch(pokemon.url);
            const detailData = await detailRes.json();
        
        return{
            id: detailData.id,
            name: detailData.name,
            image: detailData.sprites.other["official-artwork"]?.front_default || detailData.sprites.front_default,
        }
        });

        const cards = await Promise.all(pokemonPromises);
        return cards;
    } catch(error) {
        console.error("포켓몬 데이터를 불러오는 데 실패했습니다:", error);
        return [];
    }
}

export default getPokemonCards;