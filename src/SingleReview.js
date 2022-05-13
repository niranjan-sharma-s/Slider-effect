import React from "react";
import { useState,useEffect } from "react";
import data from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const SingleReview = () => {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);

useEffect(() => {
const lastIndex = people.length-1;
if(index < 0){
    setIndex(lastIndex)
}
if(index > lastIndex){
    setIndex(0)
}
},[index,people])

useEffect(()=>{
let slider = setInterval(() => {
    setIndex(index+1)
},3000)
return ()=>clearInterval(slider)
},[index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
let position = 'nextSlide'
if(personIndex === index){
    position='activeSlide'
}
if(personIndex===index-1 || (index === 0 && personIndex===people.length-1)){
    position='lastSlide'
}
          return (
            <article className = {position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <h5 className="title">{title}</h5>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={()=>setIndex(index-1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={()=>setIndex(index+1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default SingleReview;
