# Washie Wash

## Overview

### 1.1 Feature Name:
Washie Wash

### 1.2 Challenge it is related to:
Hand Bubbles

### 1.3 Feature Summary:
“Washie Wash” is a React app minigame where users will learn about the importance of how and when to wash their hands. The features include:
- Importance of washing hands
- Tutorial on handwashing steps
- A short interactive bubble washing minigame
- A quiz to reinforce basic information about handwashing

Washie Wash is designed to fit within FixFood, mirroring the style of the "Spaghetti and Meatballs" example. This is just the prototype; if accepted, I will adjust and style Washie Wash to align with FixFood.

### 1.4 Objectives:
The goals of these features are to remind users about hygiene practices beyond cooking and to enhance user engagement in their daily lives. The expected outcome is for players to evaluate hygiene in their daily routines and remember the correct methods and timings for washing hands.

### 1.5 Target Audience:
The target audience for Washie Wash is broad, focusing especially on children and families to encourage mutual reminders about hygiene in daily life.

## Gameplay Design

### 2.1 Core Mechanics:
- **Description**: Most parts of the minigame will involve users clicking a button throughout the gameplay. In the washing minigame, users will click to create bubbles to complete the task.
- **Controls**: Players will interact using buttons and clicking gestures, especially in the washing minigame.
- **Objective**: Although this prototype does not currently have a scoring system, Washie Wash could be modified to calculate points through each step (tutorial, minigame, and quiz), contributing directly to user profile points in FixFood. In the washing minigame, users will complete the game by clicking to create bubbles that fill a progression bar. Additionally, users complete the app by finishing all steps.

### 2.2 Game Flow:
1. **Landing Page**: Users learn about the importance of washing hands and when to do so. They can press the next button until all steps are complete.
2. **Tutorial**: Users learn each step of handwashing with pictures, progressing through each step using the done button and then moving to the minigame.
3. **Minigame**: Users read a gameplay tutorial and interact by clicking anywhere on the screen to create bubbles and fill the progression bar. After completing, they will go to the quiz page.
4. **Quiz**: Users select the correct answers to questions about handwashing; more questions will be added in the future.
5. **Thank You Page**: Users can restart the program using a restart button.

The navigation header bar has been removed to align with the "Spaghetti & Meatballs" example, and an exit button will be added in the future.

### 2.3 Game Modes:
Washie Wash is a single-player game, but a ranking system can be introduced in FixFood or within this game to rank players based on the fastest clicks or quiz points.

### 2.4 Challenges/Obstacles:
Washie Wash is a basic educational minigame designed to help players recognize the importance of and pay more attention to daily hygiene.

## Programmer Note:
Washie Wash is a prototype created while learning and programming, which took some time to complete. Future enhancements can be implemented. Sass is used for styling, featuring card designs and a special 3D hover-effect button on the landing page.

## How to Run the Program
1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd <repository-folder>
2. **Run the program**:
Make sure NodeJS is install
    npm install
    npm start
    