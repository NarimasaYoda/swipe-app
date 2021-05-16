import React from "react";

// redux_hookを使用（コード記述削減）
import { useSelector, useDispatch } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import RenderCard from "./Card";

import { changeTab } from "../modules/";


const useStyles = makeStyles(() => {
    const baseStyle = {
        padding: "1em",
        // lineHeight: "300px",
        color: "white"
    };

    const activeBaseStyle = {
        color: "white",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px"
    };



    return {
        slide0: {
            ...baseStyle,
            backgroundColor: "skyblue"
        },
        slide1: {
            ...baseStyle,
            backgroundColor: "orange"
        },
        slide2: {
            ...baseStyle,
            backgroundColor: "pink"
        },
        slide3: {
            ...baseStyle,
            backgroundColor: "#e4b860"
        },
        slide4: {
            ...baseStyle,
            backgroundColor: "#60bce4"
        },

        active0: {
            ...activeBaseStyle,
            backgroundColor: "lightseagreen"
        },
        active1: {
            ...activeBaseStyle,
            backgroundColor: "yellowgreen"
        },
        active2: {
            ...activeBaseStyle,
            backgroundColor: "indianred"
        },
        active3: {
            ...activeBaseStyle,
            backgroundColor: "#98752e"
        },
        active4: {
            ...activeBaseStyle,
            backgroundColor: "#2e8598"
        }
    };
});




const Swipe = () => {

    const swipeState = useSelector(state => state.swipe);
    const dispatch = useDispatch();


    const [swipeableActions, setSwipeableActions] = React.useState();

    const classes = useStyles();

    React.useEffect(() => {
        swipeableActions && swipeableActions.updateHeight();
    });





    return (
        <>
            <Tabs
                value={swipeState.index}
                onChange={(e, value) => dispatch(changeTab(value))}
                variant="fullWidth"
                indicatorColor="primary"
            >
                {swipeState.names.map((name, i) => (
                    <Tab
                        className={
                            swipeState.index === i ? classes[`active${i}`] : classes.inactive
                        }
                        label={name}
                        ley={i}
                    />
                ))}
            </Tabs>

            <SwipeableViews
                enableMouseEvents
                action={actions => dispatch(changeTab(actions))}
                resistance
                animateHeight
                index={swipeState.index}
                onChangeIndex={index => dispatch(changeTab(index))}
            >

                {swipeState.names.map((name, index) => (

                    <div key={index} className={classes[`slide${index}`]}>
                        <RenderCard index={index} />
                    </div>

                ))}

            </SwipeableViews>
        </>
    );
};
export default Swipe;
