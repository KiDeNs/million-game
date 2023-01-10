import React from 'react';
import { routePath } from "./route-path";
import { dataReward } from '../data/dataReward';
import { dataQuiz } from '../data/dataQuiz';
import ImgHand from "../assets/images/hand.png";

import { Routes, Route} from 'react-router-dom'

import StartPage from '../pages/StartPage';
import GamePage from '../pages/GamePage';
import EndPage from '../pages/EndPage';


export const Router = () => (
    <div>
        <Routes>
            <Route path={routePath.START} element={<StartPage pathToGame={routePath.GAME} ImgHand={ImgHand} classCSS="myModal" />} />
            <Route path={routePath.GAME} element={<GamePage pathToGame={routePath.END} dataQuiz={dataQuiz} rewardData={dataReward} />} />
            <Route path={routePath.END} element={<EndPage pathToGame={routePath.START} ImgHand={ImgHand} classCSS="myModalEnd" />} />
        </Routes>
    </div>
);
