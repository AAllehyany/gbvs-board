import { format } from "date-fns";
import { IMatch } from "../data/IMatch";

const Match: React.FC<{fight: IMatch}> = ({fight}) => {

    return (
        <a key={fight._id} target="_blank" href={"https://youtube.com/watch?v=" + fight.video} className="items-center flex flex-col justify-between bg-gray-300 font-bungee rounded-md m-1 px-3 py-6 text-black text-base hover:bg-gray-400">
            <span>
                <span  className="text-red-800 text-lg">{fight.characters[0]}</span> vs <span className="text-blue-800 text-xl">{fight.characters[1] || fight.characters[0]}</span>
            </span>
            <span className="text-xs text-gray-500">{fight.date && format(new Date(fight.date), 'MMM dd, yyyy')}</span>
        </a>
    )
}


export default Match;