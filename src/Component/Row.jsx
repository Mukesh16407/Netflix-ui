import React from "react";
import { Card } from "./Card";

const imgUrl ="https://image.tmdb.org/t/p/original"

export const Row = ({ title,arr=[{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-XzZJ0liF3xqTopH1BQ330Nkd9F3K-Itm33SrZc21X3y00DnXBs_GvB8TQbmV9gmjkI&usqp=CAU"
      
}] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item,index)=>(
            <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
        ))}
      </div>
    </div>
  );
};
