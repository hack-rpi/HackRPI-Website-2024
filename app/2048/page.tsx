"use client";

import { useState } from "react";
import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";
import Tile from "@/components/game/tile";
import Board from "@/components/game/board";

export default function (){
    const [grid, setGrid] = useState<number[][]>([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]);

    const initializeGame = () => {
        let newGrid = [...grid];
        newGrid = placeRandomTile(newGrid);
        newGrid = placeRandomTile(newGrid);
        setGrid(newGrid);
    };

    const placeRandomTile = (grid: number[][]): number[][] => {
        const emptyTiles: Array<[number, number]> = [];

        grid.forEach((row, rowIndex) => {
            row.forEach((tile, colIndex) => {
                if (tile === 0) {
                    emptyTiles.push([rowIndex, colIndex]);
                }
            });
        });

        if (emptyTiles.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyTiles.length);
            const [row, col] = emptyTiles[randomIndex];
            grid[row][col] = Math.random() > 0.5 ? 2 : 4;
        }

        return grid;
    };

    return (
        <div className="flex flex-col items-start desktop:items-center justify-start w-full h-screen">
            <NavBar showOnScroll={false}></NavBar>

            <div className="flex-grow flex-shrink basis-auto">
                <div className="flex-grow items-center justify-center basis-auto mt-40">
                    <h1>2048</h1>
                    <Board grid={grid} />
                </div>
            </div>

            <div className="w-full">
				<Footer />
			</div>
        </div>
    )
}