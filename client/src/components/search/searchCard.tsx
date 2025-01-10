import { Anime } from "@/types/anime";
import { Character } from "@/types/character";
import { isAnime } from "@/utils/isData";

type cardProps = {
    data: Anime | Character,
    handleClick: () => void
}

export default function SearchCard({ data, handleClick }: cardProps) {

    return (
        <>
            {
                isAnime(data)
                    ?
                    <div className="card" onClick={handleClick}>
                        <div className="card-cover">
                            <img src={data.thumbnail} alt=""></img>
                        </div>
                        <div className="card-info">
                            <p className="title">{data.title}</p>
                            <p className={"studio"}>{data.studio}</p>
                            <small className="author">{data.director}</small>
                            <span></span>
                            <p className={`statusInfo status-${data.statusName.toLowerCase()}`}>{data.statusName}</p>
                        </div>
                    </div>
                    :
                    <div className="card" onClick={handleClick}>
                        <div className="card-cover">
                            <img src={data.thumbnail} alt=""></img>
                        </div>
                        <div className="card-info">
                            <p className="title">{data.name}</p>
                            <span></span>
                            <small className="role">{data.role}</small>
                            <span></span>
                            <p className="statusInfo origin">{data.origin}</p>
                        </div>
                    </div>
            }
        </>
    )
}