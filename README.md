# World-Builder

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
## ![MIT license](https://img.shields.io/badge/License-MIT-red.svg) 


## Table of Contents:
  - [Description](#description)
  - [Demo](#demo)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Process](#process)
  - [Learnings](#learnings)
  - [Roadmap](#roadmap)
  - [Links](#links)
  - [License](#license)

## Description

Build a world that auto generates buildings and trees that follows your created
road path. Add cars and traffic signs such as cross walks, stops signs and
traffic lights.

## Demo

![My demo](./demo.gif)

## Technologies

- HTML
- CSS
- JavaScript

## Features

This application allows the user to create a world of there own. The user will
be able create there own desired road paths. Upon creating a path buildings and
trees are auto populated. Once a road path is created the user can then add
items such as cars, traffic lights, cross walks, stop signs, yield and parking
markings. The world can be edited as the user likes. Items and roads can be
deleted and roads can also be adjusted to the users liking. To navigate the
world use the scroll wheel to zoom in and out or pan around the world. The user
can save there world to there computer and load the to resume at a later time.

## Process

1. The application was set up using Html, CSS and JavaScript. A canvas tag was
   then use that would take in contexts such as points and create seagments to
   connect the points. In seperate javascript files the points and segments
   properties where defined in classes. These points could then be added by a
   left click on the canvas, once a point was added a segment would connect to
   the previous point placed. Right clicking would discontinue placing points
   and segments and the user could then move points, or delete them by right
   clicking on a point. Left clicking would again start placing new points or
   connect to a point if close enough. These segments where then given
   properties to make them apear as roads. The canvas then needed to be able to
   adjust as a viewport that could zoom in and out and pan around as the user
   desired.
2. The world needed to populate with trees and buildings. As points are place
   and segmaents (roads) where created, buildings and trees would generate and
   space proportionally around the roads path. A 3d effect was then given to the
   tree and buildings.
3. Several JS files where created to give propertires to items that would be
   placed on the road. Items such as traffic lights, stop signs, and cars. These
   items could then be place anywhere upon the road and deleted as the user
   needed.
4. A save and load feature was then added.

## Learnings

Creating this application gave me a deeper understanding of object oriented
programming using javascript by using classes and constructors. Also better
understanding of how to incorporate math and spacial graphs into classes to
create the world within a canvas.

## Roadmap

Future ideas for the application include:

- being able to auto populate a world based of real world locations.
- give the user the capabilty to controle the car. (3d car)

## Links

Link to GitHub Repository: https://github.com/Jimmy-Vela06/virtual-world

Link to Web Page: https://jimmy-vela06.github.io/virtual-world/

## License

MIT License

Copyright (c) 2024 Jimmy Vela Jr.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
