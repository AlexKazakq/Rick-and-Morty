import {API} from "assets/api/api";
import {CharacterType, ResponseType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {CharacterCard} from "components/Card/CharacterCard/CharacterCard";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";

export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters()

    return {
        props: {
            characters
        }
    }
}

const Characters = ({characters}: PropsType) => {

    const charactersList = characters.results.map(character => (
        <CharacterCard key={character.id} character={character}/>
    ))

    return (
        <PageWrapper>
            {charactersList}
        </PageWrapper>
    )
}

Characters.getLayout = getLayout
export default Characters

type PropsType = {
    characters: ResponseType<CharacterType>
}