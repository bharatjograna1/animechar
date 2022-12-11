/**
 * Developer : Bharat Jograna
 * Created : 11 Dec 2022
 * File Comment : search and list anime character component file
*/
import React from "react";

function AnimeCardCompo({response = {}, handleOnClick}) {
    return ( 
        <div>
            {Object.keys(response).length > 1  && response.data.length > 0 ? (
                <React.Fragment>
                    {response.data.map((item)=>(
                        <div key={item.mal_id} className="card">
                            <div className="col-1">
                                <img 
                                    src={item.images.jpg.image_url} 
                                    width="50%" 
                                    height="85px" 
                                    alt={item.name} 
                                />
                            </div>
                            <div className="col-9">
                                <h3>{item.name}</h3>
                                {item.nicknames.map((nickname,index)=>(
                                    <span key={index} className="nickname">{nickname}</span>
                                ))}
                            </div>
                            <div className="col-1">
                                <div className="fav">❤️{item.favorites || 0}</div>
                            </div>
                            <div className="col-1">
                                <span>
                                    <a href={item.url} rel="noreferrer" target="_blank">
                                        <i className="fa fa-arrow-right fa-3x"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    ))}
                    <div className="btn">
                        <button 
                            className="btn-back"
                            disabled={response?.pagination?.current_page <= 1}
                            onClick={()=>handleOnClick(response.pagination.current_page - 1)} 
                        >
                            Back
                        </button>
                        <button 
                            className="btn-next"
                            disabled={!response?.pagination?.has_next_page}
                            onClick={()=>handleOnClick(response.pagination.current_page + 1)} 
                        >
                            Next
                        </button>
                    </div>
                </React.Fragment>
            )
            : (
                <div className="no-result"><b>No results found!</b></div>
            )
        }
        </div>
    );
}

export default AnimeCardCompo;