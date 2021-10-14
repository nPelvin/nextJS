Nigel Pelvin / Financial Times Tech Test

## Getting Started

You have two options for viewing the App. 

It can be viewed online at (https://fttecht.herokuapp.com/), or on your localhost:

For localhost first, run the development server:

```bash
npm run dev # or yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Thought process

I broke the task down from the description into key criteria:

- Server rendered
- Needed to display headlines at a minimum from the API 
- Headlines needed to be searchable

I then looked over the options and started to formulate in my mind a structure of what I might build. Laura had suggested previously to focus on 1-3 of the optional components and I wanted to go on the high side of this, so I settled on three optional features.

The three options I settled on were:

● Deployed on Heroku 
● Have pagination 
● Uses​ ​Origami​ Components 

Heroku I was relatively comfortable with. Pagination and Origami I hadn't done before.

## Selecting a framework

With my key features set, I had to decide on what technology to create the app with. The "server rendered" criteria was the main driver in this decision. 

I am very comfortable with React, but as this is considered primarily client-side rendering I felt it wouldn't meet the first criteria. I decided to pivot to NextJs instead. As NextJs is pre-rendered/server-rendered, I thought it would be suitable. I had used NextJs once before, and I considered it a good opportunity to further cement my learning. Vanilla Javascript would've been another good option, but ultimately I felt this might have taken a bit longer and was keeping in mind the time restraints. 

## Challenges / Learnings

- Pagination Logic
I decided to create the pagination logic myself, rather then just googling for a solution as this would provide the best learning opportunity. I listed out the 7 positions for each button and then ran through what number/symbol each position could be. (Arrows for next and previous were added later). 
E.g.    Position 1 = ALWAYS 1
        Position 2 = 2 or "."
        Position 3 = 3 or "." or (currentPage-1)
This helped me to arrive at an algorithm that I was happy with, and most importantly - worked well.

- Pagination API Limits
Once pagination was starting to work I noticed that api calls to the higher pages wouldn't work. After debugging I discovered that the API wouldn't work past the 40th page, no matter the search term. I couldn't find anything about this in the docs, and in real life this is something I would likely discuss with a more senior engineer. But as I assumed it to be a hardcoded API limit I therefore had to add a max 40 pages to the pagination algorithm.

- Origami
Origami was fun to learn. I settled on a header to make it look more like an FT product. I had to simplify the header as most of the components weren't needed, but after using Carbon Design system previously, I found origami quite nice to work with and believe it meshed nicely. I also used Origami for the pagination buttons, background and font.

- NextJS
This was only my 2nd time using NextJS, and subsequently ran into a few errors when trying "yarn build". Reading through the docs, the cause was due to some of my components being in the "pages" folder. Moving the entire components folder to root/ft fixed this issue.

## What Next?

Wishlist of things I would have liked to add if I had more time:

- Smoother resizing on search bar - when implementing this origami component it lost some of its smooth horizontal responsiveness, given more time I would investigate why or failing that make it smoother, possibly with something like Sass.

- Ability to change number of headlines rendered per page. This would be relatively easy to implement I believe.

- Testing - I'm still learning and this would've been a nice stretch goal for me.


## Thanks for taking the time to read

Any questions or feedback, please don't hesitate to reach out to me via CodeYourFuture, or on the email address previously supplied.

Nigel Pelvin