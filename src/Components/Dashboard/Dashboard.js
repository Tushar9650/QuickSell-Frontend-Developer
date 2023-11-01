import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import './Dashboard.css';
import Card from "../Card/Card";
import TitleIcon from "../TitleIcon/TitleIcon";

const DashView = () => {
    let firstName;
    let lastName;

    function names(name){
        firstName = (name[0]);
        for(let i  = 0;i < name.length;i++){
            lastName = '';
            if(name[i] === ' ' && i + 1 < name.length){
                lastName = (name[i+1]);
                break;
            }
        }
        firstName = firstName.toUpperCase();
        lastName = lastName.toUpperCase();
        // console.log(name)
        // console.log(firstName,lastName);

    }

    const { selectedData, user } = useSelector(
        (state) => state.SelectDataReducer
    );

    return (
        selectedData && (
            <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
                {selectedData.map((elem, index) => {
                    {names(elem[index].title)  }

                    return (
                        <>
                            <div key={index} className="dashCardContainer">
                                <div className="dashCardHeading flex-sb">
                                    <div className="leftView">
                                        {!user ? (
                                            <TitleIcon title={elem[index].title} />
                                        ) : (
                                            <>
                                                <div
                                                    className="imageContainer relative"
                                                    style={{ width: "15px", height: "15px", display: 'inline-block' }}
                                                >
                                                    <img
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            borderRadius: "50%",
                                                        }}
                                                        src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                                                        alt="UserImage"
                                                    />
                                                </div>
                                            </>
                                        )}
                                        <span>
                                            {" "}
                                            {elem[index]?.title} {elem[index]?.value?.length}
                                        </span>
                                    </div>
                                    <div className="rightView">
                                        <AiOutlinePlus />{" "}
                                        <span style={{ letterSpacing: "2px" }}>...</span>
                                    </div>
                                </div>
                                <div className="dashList flex-gap-10">
                                    {elem[index]?.value?.map((elem, ind) => {
                                        {/* console.log(elem) */ }
                                        return (
                                            <Card id={elem.id} title={elem.title} tag={elem.tag} status={elem.status} first={firstName} last={lastName} />
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        )
    );
};

export default DashView;
