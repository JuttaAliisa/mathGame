# Welcome - Multiplication Practice game

This is my seconf independent project as a up and coming full stack developer, Studying towards my Diploma with Code Institute.
It is inspired my daughter who keeps strugling with multiblications wits 7's and 8's.

![Screenshot](assets/images/responsive.png)

[View this game on Github Pages](https://github.com/JuttaAliisa/mathGame)

# Content

- [Welcome - Multiplication Practise Game](#welcome---multiplication-practise-game)
- [Content](#content)
- [User experience](#user-experience)
  - [Key information](#key-information)
  - [Goal](#goal)
  - [User goals](#user-goals)
- [Design](#design)
  - [Fonts](#fonts)
  - [Wireframes](#wireframes)
- [Features](#features)
  - [Landing page](#landing-page)
  - [Footer](#footer)
  - [Content](#content-pages)
  - [upcoming features](#upcoming-features)
- [Technologies](#technologies)
  - [Languages](#languages)
  - [Resources](#resources)
- [Testing](#testing)
  - [Diagnostics](#diagnostics)
  - [Manual testing](#manual-testing)
  - [Fixed bugs](#fixed-bugs)
  - [Deployment](#deployment)
- [Credits](#credits)
  - [Content](#content-1)
  - [Media](#media)
  - [Acknowledgements](#acknowledgements)



# User experience

This website is a game-like environment for learning multiplication. This game is easy to use and can be played indefinitely. One page layout makes it easy to start and play.

No complicated instruction are needed and the website is easy to access with any device with internet access.

## Key information

- Preview what can be found from the site
- Detailed information about this game/practise site

## Goal

- Responsive site
- Easy access
- Easy to use

## User goals

- Easily access practise
  - Solution: one page layout grant an immediate access to the game
- freedom to choose the multiplication table to practise
  - Solution: you can select and change the table any time, completely freely.
- Score upkeeping
  - Solution: You will see your scores and they will include correct and incorrect answers. You can also reset the scores whenever you wish

# Design

## Fonts

- Main font from Google fonts Tektur

## Wireframes

Wireframes were created for mobile

![Wireframe](assets/images/wireframe.png)

# Features


## Landing page

- Landing page / frontpage is the only page for the site
- The meaning of this is to make the game super easy to access and allows user to fully concentrate on the game

![landingpage](assets/images/landingpage.png)

- Scrolling is kept to minimal, being zero in mobile view and only scores need to be scrolled to in bigger screens.
- In larger screens the empty sides are ideal for add placement in case the site would be commercial.

## Footer

- The footer section includes copyright information

![footer](assets/images/footer.png)

## Content

- Instruction section gives you some encouragement to start playing and goes through the meaning of the game within couple of sentences.

![instruction](assets/images/instructions.png)

- The buttons let you choose the multiplication table you are playing with. You can change at any point and you score will stay until you choose to reset. When you press, the relevant question is posted immediately and after you answer the next one will be up right away until you choose different table

![Levels](assets/images/tables.png)

- The game section will have the question, mandatory and number only answer field and submit button. You will receive immediate feedback for your answer.

![Game](assets/images/game.png)

- The Score section will tell you how you are doing by calculating your right and wrong answers. You can also reset the score at any point by pressing the reset button.

![Score](assets/images/scores.png)

## upcoming features

- The game will later include multible gamemodes with similar table system. 

# Technologies

## Languages

HTML and CSS and JavaScript were used for this website.

## Resources

- Figma - Used to create wireframes
- CodeAnywhere - To code
- Github - To save and store the files for the website.
- Google Fonts - To import the fonts used on the website.
- Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.
- [Favicon.io](https://favicon.io/) To create favicon.
- [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.
  
# Testing

## Diagnostics

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjuttaaliisa.github.io%2FmathGame%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjuttaaliisa.github.io%2FmathGame%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Lighthouse gave near perfect score
  
  ![Disgnostics](assets/images/performance.png)

## Manual testing

To ensure that the site works, I tested the game, buttons and responsiveness manually with multiple devices and browsers:

- Lenovo Legion laptop
- Iphone 13PRO
- iPhone SE
- Macbook pro 13"
- iPad Pro 11"
- Safari
- Chrome
No problems were found
  
## Fixed bugs

- The only bug found during the project was that if the user left the answer field empty and submitted, they saw the alert for ampty field but the answer was still counted as incorrect. I tranferred the code for the aler inside the checkAnswer function and it fixed the problem.
- I would like the table button schosen to stay "active" as long as the user is answering questions regarding the same stage. At the moment the stage.button:active applies only as long as no questions are answered. After the first question the normal color remains. I have not found and answer to this, but will keep looking. This would increase the usability.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
- The live link can be found here - [LINK](https://juttaaliisa.github.io/mathGame/)

# Credits

## Content

- The texts are produced by Jutta Helin
- Instructions and inspiration (but no direct copy of the code) has been searched from <https://stackoverflow.com/> and <https://www.w3schools.com/> together with Code Institute tutorials from full stack development course.

## Media

- Fonts from Google fonts
- Colours from [Coolors.co](https://coolors.co/palette/8cb369-f4e285-f4a259-5b8e7d-bc4b51)
    ![Colors](assets/images/dcolors.png)
- Responsive picture in readme from <https://ui.dev/>

## Acknowledgements

- My patient Mentor Jubril Akolade for support and instructions
- My everloving husband for granting me the time to make this project and further my education
- Code Institute for the opportunity
- My fellow OCT 2023 group for mental and peer support
- My daughter who is having trouble with multiplication tables