const requestURL = 'https://giacomo-draghi.github.io/Giacomo_Draghi_WDD330/src/js/main.json';
fetch(requestURL) .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const ind = jsonObject['ind'];
    for (let i = 0; i < ind.length; i++ ) {
        
        let div = document.createElement ('div');
        let div2 = document.createElement ('div');
        div2.setAttribute('class', 'sec-1');
        let div3 = document.createElement ('div');
        let a = document.createElement('a');
        a.setAttribute ('href', ind[i].link);
        let h1 = document.createElement('h1');
        h1.setAttribute ('id', 'link');
        let h5 = document.createElement('h5');
        let p1 = document.createElement('p');

        h1.textContent = ind[i].title;
        h5.textContent = ind[i].intro;
        p1.textContent = ind[i].text;
        
        a.appendChild(h1);
        div2.appendChild(a);
        div2.appendChild(h5);
        div2.appendChild(p1);

        document.querySelector('div.mainBody').appendChild(div);
        document.querySelector('div.mainBody').appendChild(div2);
        document.querySelector('div.mainBody').appendChild(div3);
        }  
    
});
