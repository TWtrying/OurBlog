var Day_Text = null;
window.onload = ()=>{
    const perdiv = document.getElementById('card-box');
        data.forEach(e => {
            let tempdiv = document.createElement('div');
            tempdiv.id = e.id;
            tempdiv.className = 'card-item';
            tempdiv.style.backgroundImage = 'url('+e.url+')';
            tempdiv.innerHTML = '<h3>'+e.title+'</h3><p>'+e.detail+'</p>';
            tempdiv.onclick = ()=>{
                console.log("*****************");
                console.log(e.title);
                console.log(e.detail);
                console.log("*****************");
            }
            perdiv.appendChild(tempdiv);
            console.log(e.id,e.title);
        });
    Day_Text = document.getElementById('Day-Text');
    SetDayText();
    Day_Text.onclick = ()=>{
        SetDayText();
    }

    
}

function SetDayText(){
    let data={
        "c": 'k',
        "encode": 'text'
    }
    const Http = new XMLHttpRequest();
    const url = 'https://v1.hitokoto.cn/?encode=text&c=d&max_length=16';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = e=>{
        Day_Text.innerText = Http.responseText;
    }
}