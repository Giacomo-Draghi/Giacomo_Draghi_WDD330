const ind = [{
        title: "Week1",
        link : "week1.html",
        intro : "intro:",
        text : "Here you will find some of my notes from the very first week and even one small exercise where you can write your very own story! "
      },
      {
        title: "Week2",
        link : "week2.html",
        intro : "intro:",
        text : "Here you will find some notes from week 2 readings and most important, a Quiz that uses a mix of Array and functions. "
      },
      {
        title: "Week2-Team",
        link : "week2Team.html",
        intro : "intro:",
        text : "Here you will find the work the Team did for this week. "
    },
    {
        title: "Week3",
        link: "week3.html",
        intro: "intro:",
        text: "Here you will find Some of my notes from this week about object and more, it will also be linked the team work as well! "
    },
    {
        title: "Week4",
        link: "week4.html",
        intro: "intro:",
        text: "Here you will my little exercise for this week."
    }
    ];

    ind.forEach(ind => {
        
        let div = document.createElement ('div');
        let div2 = document.createElement ('div');
        div2.setAttribute('class', 'sec-1');
        let div3 = document.createElement ('div');
        let a = document.createElement('a');
        a.setAttribute ('href', ind.link);
        let h1 = document.createElement('h1');
        h1.setAttribute ('id', 'link');
        let h5 = document.createElement('h5');
        let p1 = document.createElement('p');
        let a2 = document.createElement('a');
        a2.setAttribute ('href', ind.link);

        h1.textContent = ind.title;
        h5.textContent = ind.intro;
        p1.textContent = ind.text;
        a2.textContent = 'See more...';
        
        p1.appendChild(a2);
        a.appendChild(h1);
        div2.appendChild(a);
        div2.appendChild(h5);
        div2.appendChild(p1);

        document.querySelector('div.mainBody').appendChild(div);
        document.querySelector('div.mainBody').appendChild(div2);
        document.querySelector('div.mainBody').appendChild(div3);
        });

