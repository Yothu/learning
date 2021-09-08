console.log('This is test_1.js!');

const btn = document.getElementById('bt');
const sct = document.getElementById('selector');

btn.onclick = (Event) =>  {
    Event.preventDefault();
    console.log(sct.selectedIndex);
};
