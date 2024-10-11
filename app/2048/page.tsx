"use client";

import { useState } from "react";
import { useEffect } from "react";
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

    const addRandomTile = (grid: number[][]): number[][] => {
        const emptyPositions: [number, number][] = [];
    
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 0) {
                    emptyPositions.push([i, j]);
                }
            }
        }
    
        if (emptyPositions.length === 0) {
            return grid;
        }
    
        const [row, col] = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
    
        const newValue = Math.random() < 0.9 ? 2 : 4;
    
        grid[row][col] = newValue;
    
        return grid;
    };

    const handleKeyPress = (e: KeyboardEvent, grid: number[][], setGrid: (grid: number[][]) => void) => {
        setGrid((prevGrid) => {
            let newGrid = [...prevGrid]; 
            let moved = false;

            switch (e.key) {
                case "ArrowUp":
                    const upGrid = moveUp(newGrid);
                    moved = JSON.stringify(upGrid) !== JSON.stringify(newGrid);
                    newGrid = upGrid;
                    break;
                case "ArrowDown":
                    const downGrid = moveDown(newGrid);
                    moved = JSON.stringify(downGrid) !== JSON.stringify(newGrid);
                    newGrid = downGrid;
                    break;
                case "ArrowLeft":
                    const leftGrid = moveLeft(newGrid);
                    moved = JSON.stringify(leftGrid) !== JSON.stringify(newGrid);
                    newGrid = leftGrid;
                    break;
                case "ArrowRight":
                    const rightGrid = moveRight(newGrid);
                    moved = JSON.stringify(rightGrid) !== JSON.stringify(newGrid);
                    newGrid = rightGrid;
                    break;
                default:
                    return prevGrid;
            }

            if (moved) {
                newGrid = addRandomTile(newGrid);
            }

            return newGrid;
        });
    };

    const moveLeft = (grid: number[][]): number[][] => {
        const newGrid = grid.map(row => {
            const filteredRow = row.filter(tile => tile !== 0);
    
            for (let i = 0; i < filteredRow.length - 1; i++) {
                if (filteredRow[i] === filteredRow[i + 1]) {
                    filteredRow[i] *= 2;
                    filteredRow[i + 1] = 0;
                    i++;
                }
            }
    
            const mergedRow = filteredRow.filter(tile => tile !== 0);
    
            while (mergedRow.length < row.length) {
                mergedRow.push(0);
            }
    
            return mergedRow;
        });
    
        return newGrid;
    };
    
    const moveRight = (grid: number[][]): number[][] => {
        return grid.map(row => {
            const reversedRow = row.slice().reverse();
            const newRow = moveLeft([reversedRow])[0];
            return newRow.reverse();
        });
    };
    
    const moveUp = (grid: number[][]): number[][] => {
        const newGrid: number[][] = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(0));

        for (let col = 0; col < grid[0].length; col++) {
            const filteredColumn = grid.map(row => row[col]).filter(tile => tile !== 0);
            
            for (let i = 0; i < filteredColumn.length - 1; i++) {
                if (filteredColumn[i] === filteredColumn[i + 1]) {
                    filteredColumn[i] *= 2;
                    filteredColumn[i + 1] = 0;
                    i++;
                }
            }
    
            const mergedColumn = filteredColumn.filter(tile => tile !== 0);
            
            while (mergedColumn.length < grid.length) {
                mergedColumn.push(0);
            }
    
            for (let row = 0; row < grid.length; row++) {
                if (!newGrid[row]) {
                    newGrid[row] = [];
                }
                newGrid[row][col] = mergedColumn[row];
            }
        }
    
        return newGrid;
    };
    
    const moveDown = (grid: number[][]): number[][] => {
        const newGrid: number[][] = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(0));
    
        for (let col = 0; col < grid[0].length; col++) {
            const filteredColumn = grid.map(row => row[col]).filter(tile => tile !== 0);
    
            for (let i = filteredColumn.length - 1; i > 0; i--) {
                if (filteredColumn[i] === filteredColumn[i - 1]) {
                    filteredColumn[i] *= 2;
                    filteredColumn[i - 1] = 0;
                    i++;
                }
            }
    
            const mergedColumn = filteredColumn.filter(tile => tile !== 0);
    
            while (mergedColumn.length < grid.length) {
                mergedColumn.unshift(0);
            }
    
            for (let row = 0; row < grid.length; row++) {
                newGrid[row][col] = mergedColumn[row];
            }
        }
    
        return newGrid;
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => handleKeyPress(e, grid, setGrid);

        window.addEventListener("keydown", handleKeyDown);
        initializeGame();
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="flex flex-col items-start desktop:items-center justify-start w-full h-screen">
            <NavBar showOnScroll={false}></NavBar>

            <div className="flex-grow mt-30"></div>
            <div className="flex-grow flex-shrink basis-auto">
                <div className="flex-grow items-center justify-center basis-auto">
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