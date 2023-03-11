const homeTab = document.getElementById("nav-home-tab");
const educationTab = document.getElementById('nav-education-tab');
const expTab = document.getElementById('nav-exp-tab');
const skillsTab = document.getElementById('nav-skills-tab');
const contactTab = document.getElementById('nav-contact-tab');

const homeID = "nav-home";
const educationID = "nav-education";
const expID = "nav-exp";
const skillsID = "nav-skills";
const contactID = "nav-contact";

const itemOneButton = document.getElementById("itemOneButton");
const itemTwoButton = document.getElementById("itemTwoButton");
const itemThreeButton = document.getElementById("itemThreeButton");

const itemOneID = "itemOne";
const itemTwoID = "itemTwo";
const itemThreeID = "itemThree";

homeTab.addEventListener('click', function(){changeTab(homeID)});
educationTab.addEventListener('click', function(){changeTab(educationID)});
expTab.addEventListener('click', function (){changeTab(expID)});
skillsTab.addEventListener('click', function(){changeTab(skillsID)});
contactTab.addEventListener('click', function(){changeTab(contactID)});

itemOneButton.addEventListener('click', function(){OpenClose(itemOneID)});
itemTwoButton.addEventListener('click', function(){OpenClose(itemTwoID)});
itemThreeButton.addEventListener('click', function(){OpenClose(itemThreeID)});


function changeTab(tab){
    let tabs = [homeID, educationID, expID, skillsID, contactID];
    
    for(item of tabs){
        if(item == tab){
            document.getElementById(item).classList.add("show", "active");
            document.getElementById(item+'-tab').classList.add("active");
            document.getElementById(item+'-tab').style.backgroundColor = "antiquewhite";
        }
        else{
            document.getElementById(item).classList.remove("show", "active");
            document.getElementById(item+'-tab').classList.remove("active");
            document.getElementById(item+'-tab').style.backgroundColor = "#fff";
        }
    }
}

function OpenClose(item){
    let items = [itemOneID, itemTwoID, itemThreeID];

    for(data of items){
        
        if(data == item){
            let selected = document.getElementById(data+"Button").classList.contains("item-selected");

            document.getElementById(data).classList.toggle("show");

            if(selected == false){
                document.getElementById(data+'Button').classList.add("item-selected");
            }
            else{
                document.getElementById(data+'Button').classList.remove("item-selected");
            }
        }
    }
}