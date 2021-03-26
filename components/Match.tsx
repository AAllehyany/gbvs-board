import { format } from "date-fns";
import { IMatch } from "../data/IMatch";

const Match: React.FC<{fight: IMatch}> = ({fight}) => {

    const image1 = `/characters/${fight.characters[0]}.png`;
    const image2 = `/characters/${fight.characters[1] || fight.characters[0]}.png`
    return (
        <a key={fight._id} target="_blank" href={"https://youtube.com/watch?v=" + fight.video} className="items-center flex flex-col  bg-gray-300  rounded-md m-1 p-2 text-black text-base hover:bg-gray-400">
            <div className="flex items-center mb-1">
                <figure className="w-16 h-16 border-2 border-gray-800 mr-2 rounded-full">
                    <img src={image1} className="w-full h-full object-fit rounded-full"/>
                </figure> 
                <figure className="w-16 border-2 border-gray-800 h-16 mr-2 rounded-full">
                    <img src={image2} className="w-full h-full object-fit rounded-full"/>
                </figure>
            </div>
            <span className="text-xs text-gray-500">{fight.date && format(new Date(fight.date), 'MMM dd, yyyy')}</span>
        </a>
    )
}


export default Match;