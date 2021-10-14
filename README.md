Nigel Pelvin / Financial Times Tech Test

## Getting Started

You have two options for viewing the App. 

It can be viewed online at (https://fttecht.herokuapp.com/), 

or on your localhost:

First, run the development server:

```bash
npm run dev # or yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Thought process

Firstly I broke down the task from the description:
" Build a server-rendered site that displays headlines from The Financial Times. You may use our 
Developer APIs​ to achieve this. Additionally, provide a search box for users to search for headlines containing specific words (i.e. searching for "brexit" should return a list of brexit-related headlines)."

There seemed to be three important criteria to this:
- Server rendered
- Only needed to display headlines from the API 
- Headlines needed to be searchable

I then looked over the options and started to formulate in my mind a structure of what I might build. Laura had suggested previously to focus on 1-3 of the optional components and I wanted to go on the high side of this, so I settled on three.

I chose to do one that I was relatively comfortable with (Heroku) and two that would be new and therefore provide learning opportunities.

The three options I settled on were:

● Deployed on Heroku 
● Have pagination 
● Uses​ ​Origami​ Components 

## Selecting a framework

With my key features set, I then had to decide on what technology to use to create the app. The server rendered was the main driver in this decision. I am very comfortable with React, but as this is considered primarily client-side rendering I felt that wouldn't meet the first criteria. I decided to pivot to NextJs instead to fulfill it.  Vanilla Javascript would've been another good option, ultimately I felt this might have taken just a little bit longer and was keeping in mind the time restraints. 

## Challenges / Learnings

- Pagination Logic
I decided to create the pagination logic myself, rather then just googling for a solution as this would provide the best learning opportunity. I listed out the 7 positions for each button and then ran through what each position could be.
E.g.    Position 1 = ALWAYS 1
        Position 2 = 2 or "."
        Position 3 = 3 or "." or (currentPage-1)
This helped me to arrive at an algorithm that I was happy with, and more importantly - worked well!

- Pagination API Limits
Once pagination was starting to work I noticed that api calls to the higher pages wouldn't work. After a bit of debugging I discovered that the API wouldn't work past the 40th page. I couldn't find anything about this in the docs, and in real life this is something I would discuss with a more senior engineer. But as I assumed it to be a hardcoded API limit I therefore had to add a max 40 pages to the pagination algorithm.

- Origami
Origami was fun to learn. I wanted a header to make it look more FT. I had to simplify the header alot as most of the components weren't needed, but after using Carbon Design system previously I think it meshed nicely. I also used Origami for the pagination buttons, background and font.

- NextJS
This was only my 2nd time using NextJS, so it also presented a few errors when trying "yarn build". I managed to successfully debug all of them.

## What Next?

Wishlist of things I would have liked to add if I had more time:

- Testing - still learning and this is my next goal.

- Smoother resizing on search bar - when implementing this origami component it lost some of its smooth horizontal responsiveness, given more time I would investigate why or failing that make it smoother, possibly with something like Sass.

