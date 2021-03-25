import Layout from "../../components/Layout";


const CharacterFights = ({ fights }) => {
    const list =  fights.map(f => (<h1 key={f.id}>{f.characters.join(' vs ')}</h1>))

    return (
        <Layout>
            {list}
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const {character} = context.params;
    const res = await fetch(`http://localhost:3000/api/${character}`);
    const data = await res.json();
    return {
        props: {
            fights: data
        }
    }
}

export default CharacterFights;