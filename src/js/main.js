const requestURL = 'https://jak127.github.io/final_project/temple.json';
fetch(requestURL) .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const temple = jsonObject['temple'];
    for (let i = 0; i < temple.length; i++ ) {
        
        let div = document.createElement ('div');
        div.setAttribute('class', 'box');
        let sec = document.createElement ('section');
        let div2 = document.createElement ('div');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let h4 = document.createElement('h4');
        let p6 = document.createElement('p');
        let p7 = document.createElement('p');
        let p8 = document.createElement('p');
        let hh4 = document.createElement('h4');
        let hhh4 = document.createElement('h4');
        let p9 = document.createElement('p');
        p9.setAttribute('class', 'description-' + [i]);
        let p10 = document.createElement('p');
        p10.setAttribute('class', 'temp-' + [i]);
        let img = document.createElement('img');
        img.setAttribute ('src', temple[i].imageurl);
        img.setAttribute ('alt', temple[i].name);

        h2.textContent = temple[i].name;
        p1.textContent = 'Address: ' + temple[i].address;
        p2.textContent = 'Telephone: '+ temple[i].telephone;
        p3.textContent = 'E-mail: ' + temple[i].email;
        p4.textContent = 'Services: ' + temple[i].services;
        p5.textContent = 'Dedicated on: ' + temple[i].history;
        h4.textContent = 'Ordinance Schedule:';
        p6.textContent = temple[i].session1;
        p7.textContent = temple[i].session2;
        hh4.textContent ='Closure:';
        p8.textContent = temple[i].closure;
        hhh4.textContent = 'Weather summary';
        p9.textContent = 'Currently: ';
        p10.textContent = 'Temperature: ';
        
        sec.appendChild(h2);
        sec.appendChild(p2);
        sec.appendChild(p3);
        sec.appendChild(p4);
        sec.appendChild(p5);
        sec.appendChild(h4);
        sec.appendChild(p6);
        sec.appendChild(p7);
        sec.appendChild(hh4);
        sec.appendChild(p8);
        sec.appendChild(hhh4);
        sec.appendChild(p9);
        sec.appendChild(p10);
        div2.appendChild(img);
        div.appendChild(div2);
        div.appendChild(sec);

        document.querySelector('div.json').appendChild(div);

        var apiURL ='https://api.openweathermap.org/data/2.5/weather?id=4976934&units=imperial&APPID=2b91a52d5a023d1d2b5394b4e8268e24';

        if (i == 0){
            var apiURL ='https://api.openweathermap.org/data/2.5/weather?id=4976934&units=imperial&APPID=2b91a52d5a023d1d2b5394b4e8268e24';
        } else if (i == 1) {
            var apiURL ='https://api.openweathermap.org/data/2.5/weather?id=2988507&units=imperial&APPID=2b91a52d5a023d1d2b5394b4e8268e24';
        } else if (i == 2) {
            var apiURL ='https://api.openweathermap.org/data/2.5/weather?id=3117735&units=imperial&APPID=2b91a52d5a023d1d2b5394b4e8268e24';
        } else if (i == 3){
            var apiURL ='https://api.openweathermap.org/data/2.5/weather?id=2643743&units=imperial&APPID=2b91a52d5a023d1d2b5394b4e8268e24';
        }
        

        let des = 'p.description-' + [i];
        let tem = 'p.temp-' + [i];
        fetch(apiURL)
          .then((response) => response.json())
          .then((jsObject) => {
            console.log(jsObject);
            let data = jsObject;
            let current = data.weather[0].main;
            document.querySelector(des).append(current);
            let temperature = data.main.temp;
            document.querySelector(tem).append(temperature);
            });
        }  
    
});
