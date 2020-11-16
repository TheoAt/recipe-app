import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, source, tags }) => {

    const nbCalories = () => {
        let chaine = calories.toString();
        let tab = [];
        for (let i = 0; chaine.charAt(i) != "."; i++) {
            tab.push(chaine.charAt(i));
        }
        return (tab);
    }

    const nameSource = () => {
        return (source === "No Recipes" ? "Home made" : source);
    }

    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>

            <div className={style.container}>
                <img className={style.image} src={image} alt="Image of the recipe" />
                <div className={style.overlay}>
                    <p className={style.tags}>
                        {tags.map(tag => (
                            <p>{tag}</p>
                        ))}
                    </p>
                </div>
            </div>

            <div className={style.info}>
                <p>{nameSource()}</p>
                <p>{nbCalories()} kcal</p>
            </div>
            <button className={style.button_see_more}>See more</button>
        </div>
    );
}

export default Recipe;