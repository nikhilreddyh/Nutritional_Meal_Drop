"use strict";
// console.log(currentAccount);
///////////////////////

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const d = new Date();
// let date = d.getDate();
// console.log(date);

let day = d.getDay();
console.log(day);
console.log(days[day]);

let x = 1;
if (x == 0) {
  localStorage.setItem("acc1Mon", 1);
  localStorage.setItem("acc1Tue", 1);
  localStorage.setItem("acc1Wed", 1);
  localStorage.setItem("acc1Thu", 1);
  localStorage.setItem("acc1Fri", 1);
  localStorage.setItem("acc1Sat", 1);
  localStorage.setItem("acc1Sun", 1);
}

console.log(localStorage.getItem("acc1Mon"));
const account1 = {
  sno: 1,
  owner: "Jonas Schmedtmann",
  pin: 1111,
  address: "131-B, Netaji Nagar, South West Delhi, 110001",
  phno: "9490639801",
  mail: "jonas@gmail.com",
  plan: 1,
  date: "01/04/2022",
};

if (x == 0) {
  localStorage.setItem("acc2Mon", 2);
  localStorage.setItem("acc2Tue", 2);
  localStorage.setItem("acc2Wed", 2);
  localStorage.setItem("acc2Thu", 2);
  localStorage.setItem("acc2Fri", 2);
  localStorage.setItem("acc2Sat", 2);
  localStorage.setItem("acc2Sun", 2);
}
// console.log(localStorage.getItem("acc2Fri"));
const account2 = {
  sno: 2,
  owner: "Jessica Davis",
  pin: 2222,
  address: "2-20/B, AB Colony , Tirupathi, 517101",
  phno: "9398827574",
  mail: "jessicadavis@gmail.com",
  plan: 2,
  date: "10/04/2022",
};

if (x == 0) {
  localStorage.setItem("acc3Mon", 1);
  localStorage.setItem("acc3Tue", 1);
  localStorage.setItem("acc3Wed", 1);
  localStorage.setItem("acc3Thu", 1);
  localStorage.setItem("acc3Fri", 1);
  localStorage.setItem("acc3Sat", 1);
  localStorage.setItem("acc3Sun", 1);
}

const account3 = {
  sno: 3,
  owner: "Steven Thomas Williams",
  pin: 3333,
  address: "12-A, Kamala Nagar, Hyderabad, 500001",
  phno: "9364321478",
  mail: "thomas@gmail.com",
  plan: 1,
  date: "21/03/2022",
};

if (x == 0) {
  localStorage.setItem("acc4Mon", 2);
  localStorage.setItem("acc4Tue", 2);
  localStorage.setItem("acc4Wed", 2);
  localStorage.setItem("acc4Thu", 2);
  localStorage.setItem("acc4Fri", 2);
  localStorage.setItem("acc4Sat", 2);
  localStorage.setItem("acc4Sun", 2);
}

const account4 = {
  sno: 4,
  owner: "Sarah Smith",
  pin: 4444,
  address: "50/A, Okland Ave, Patny, 500003",
  phno: "7674125848",
  mail: "smithsarah@gamil.com",
  plan: 2,
  date: "03/04/2022",
};

if (x == 0) {
  localStorage.setItem("acc5Mon", 1);
  localStorage.setItem("acc5Tue", 1);
  localStorage.setItem("acc5Wed", 1);
  localStorage.setItem("acc5Thu", 1);
  localStorage.setItem("acc5Fri", 1);
  localStorage.setItem("acc5Sat", 1);
  localStorage.setItem("acc5Sun", 1);
}

const account5 = {
  sno: 5,
  owner: "Kunal",
  pin: 5555,
  address: "71-28, Espada st, Vizag, 530005",
  phno: "9954863471",
  mail: "kunalk@gmail.com",
  plan: 1,
  date: "21/04/2022",
};

if (x == 0) {
  localStorage.setItem("acc6Mon", 2);
  localStorage.setItem("acc6Tue", 2);
  localStorage.setItem("acc6Wed", 2);
  localStorage.setItem("acc6Thu", 2);
  localStorage.setItem("acc6Fri", 2);
  localStorage.setItem("acc6Sat", 2);
  localStorage.setItem("acc6Sun", 2);
}

const account6 = {
  sno: 6,
  owner: "Aman Dattarwal",
  pin: 6666,
  address: "6-3-2 RoadNo1, BanjaraHills, Hyd, 500034",
  phno: "6302572224",
  mail: "aman77d@gmail.com",
  plan: 2,
  date: "28/03/2022",
};

if (x == 0) {
  localStorage.setItem("acc7Mon", 1);
  localStorage.setItem("acc7Tue", 1);
  localStorage.setItem("acc7Wed", 1);
  localStorage.setItem("acc7Thu", 1);
  localStorage.setItem("acc7Fri", 1);
  localStorage.setItem("acc7Sat", 1);
  localStorage.setItem("acc7Sun", 1);
}

const account7 = {
  sno: 7,
  owner: "Sradha",
  pin: 7777,
  address: "1-10/1. Saptagi Towers, Begumpet, 500016",
  phno: "7538641259",
  mail: "sradhasaras@gmail.com",
  plan: 1,
  date: "19/04/2022",
};

if (x == 0) {
  localStorage.setItem("acc8Mon", 2);
  localStorage.setItem("acc8Tue", 2);
  localStorage.setItem("acc8Wed", 2);
  localStorage.setItem("acc8Thu", 2);
  localStorage.setItem("acc8Fri", 2);
  localStorage.setItem("acc8Sat", 2);
  localStorage.setItem("acc8Sun", 2);
}

const account8 = {
  sno: 8,
  owner: "Anuj Kumar",
  pin: 8888,
  address: "9B, Mind Space, Madhapur, 500058",
  phno: "7674741410",
  mail: "anuj845@gmail.com",
  plan: 2,
  date: "25/03/2022",
};

if (x == 0) {
  localStorage.setItem("acc9Mon", 1);
  localStorage.setItem("acc9Tue", 1);
  localStorage.setItem("acc9Wed", 1);
  localStorage.setItem("acc9Thu", 1);
  localStorage.setItem("acc9Fri", 1);
  localStorage.setItem("acc9Sat", 1);
  localStorage.setItem("acc9Sun", 1);
}
// console.log(localStorage.getItem("acc8Tue"));
// console.log(localStorage.getItem("acc7Tue"));

const account9 = {
  sno: 9,
  owner: "Babbar",
  pin: 9999,
  address: "2B/12-1, Kadapa, 516001",
  phno: "9547575753",
  mail: "babbar@gmail.com",
  plan: 1,
  date: "01/04/2022",
};

if (x == 0) {
  localStorage.setItem("acc10Mon", 2);
  localStorage.setItem("acc10Tue", 2);
  localStorage.setItem("acc10Wed", 2);
  localStorage.setItem("acc10Thu", 2);
  localStorage.setItem("acc10Fri", 2);
  localStorage.setItem("acc10Sat", 2);
  localStorage.setItem("acc10Sun", 2);
}

const account10 = {
  sno: 10,
  owner: "Shira",
  pin: 1010,
  address: "13-42/S, kakinada, East Godavari, 533001",
  phno: "8688457951",
  mail: "shira75@gmail.com",
  plan: 2,
  date: "26/03/2022",
};

let accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
  account9,
  account10,
];

// document.querySelector(
//   ".header h1"
// ).textContent = `Welcome back, ${account2.owner}`;

const items = [
  {
    name: "Lemon Chicken",
    ingridients: [
      "dark soy sauce",
      "1/2 small lemon",
      "canola oil",
      "capsicum",
      "carrot",
      "broccoli",
      "chicken stock",
      "spring onions",
    ],
  },
  {
    name: "Puttanesca",
    ingridients: [
      "olive oil",
      "garlic cloves",
      "tomato paste",
      "brown sugar",
      "red wine",
      "dried oregano",
      "caper in vinegar",
      "bucatini pasta",
    ],
  },
  {
    name: "Garlicky fried rice",
    ingridients: [
      "peanut oil",
      "garlic cloves",
      "minced pork",
      "chilli bean sauce",
      "brown sugar",
      "garlic chives",
      "cooked jasmine rice",
      "Fried eggs",
    ],
  },
  {
    name: "chilli linguine",
    ingridients: [
      "linguine",
      "olive oil",
      "unsalted butter",
      "garlic cloves",
      "red chilles",
      "crab meat",
      "flat-leaf parsley",
      "chilli flakes",
    ],
  },
  {
    name: "Tuna caper pasta",
    ingridients: [
      "olive oil",
      "breadcrumbs",
      "italian herbs",
      "garlic cloves",
      "capers in vinegar",
      "chilli flakes",
      "angel hair pasta",
      "juice of lemon",
    ],
  },
  {
    name: "Tofu scramble",
    ingridients: [
      "light-falvoured oil",
      "garlic cloves",
      "spring onions",
      "silken tofu",
      "large eschalot",
      "garlic chives",
      "white cabbage",
      "crispy shallots",
    ],
  },
  {
    name: "Asian eggs",
    ingridients: [
      "long-grain rice",
      "peanuts",
      "8 eggs",
      "coriander & Thai basil",
      "Bean sprouts",
      "grated ginger",
      "olive oil & soya sauce",
      "fish sauce",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Pancetta salad",
    ingridients: [
      "green lentils",
      "bay leaves",
      "flat pancetta",
      "eschalot, garlic clove",
      "small peaches",
      "red wine vinegar",
      "thyme springs",
      "chilli flakes",
    ],
  },
  {
    name: "Egg noodles",
    ingridients: [
      "chicken breasts",
      "sichuan peppercorns",
      "thin egg noodles",
      "rice vinegar",
      "peanut oil",
      "small cucumbers",
      "spring onions",
      "thick clices ginger",
    ],
  },
  {
    name: "Quick chicken roast",
    ingridients: [
      "thyme springs",
      "olive oil",
      "chicken thigs",
      "baby kipfler potates",
      "streaky bacon",
      "truss tomatoes",
      "dried oregano",
      "garlic cloves",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
  {
    name: "Sesame butter radishes",
    ingridients: [
      "unsalted butter",
      "sesame oil",
      "radishes",
      "lemon",
      "white sesame seeds",
      "red vein sorrel",
      "radish leaves",
      "shiso & sourdough",
    ],
  },
];

const ingriBtn1 = document.querySelector(".ingri--1");
const ingriBtn2 = document.querySelector(".ingri--2");
const ingriBtn3 = document.querySelector(".ingri--3");
const ingriBtn4 = document.querySelector(".ingri--4");
const ingriBtn5 = document.querySelector(".ingri--5");
const ingriBtn6 = document.querySelector(".ingri--6");
const ingriBtn7 = document.querySelector(".ingri--7");
const ingriBtn8 = document.querySelector(".ingri--8");
// const inputText = document.querySelector(".input--name").value;

ingriBtn1.addEventListener("click", function () {
  document.querySelector(".hidden--1").classList.toggle("hide");
});
ingriBtn2.addEventListener("click", function () {
  document.querySelector(".hidden--2").classList.toggle("hide");
});
ingriBtn3.addEventListener("click", function () {
  document.querySelector(".hidden--3").classList.toggle("hide");
});
ingriBtn4.addEventListener("click", function () {
  document.querySelector(".hidden--4").classList.toggle("hide");
});
ingriBtn5.addEventListener("click", function () {
  document.querySelector(".hidden--5").classList.toggle("hide");
});
ingriBtn6.addEventListener("click", function () {
  document.querySelector(".hidden--6").classList.toggle("hide");
});
ingriBtn7.addEventListener("click", function () {
  document.querySelector(".hidden--7").classList.toggle("hide");
});
// ingriBtn1.addEventListener("click", function () {
//   document.querySelector(".hidden--1").style.display = "block";
// });

// var currentAccount = accounts.find((acc) => acc.username === inputText);

// console.log(currentAccount);

let check = [];
function weeklyPlans() {
  let i = 0;
  while (check.length != 7) {
    let no = Math.floor(Math.random() * 8);
    if (!check.includes(no)) {
      i++;
      check.push(no);
      let item = document.querySelector(`.day--${i} .item`);
      // console.log(item);
      item.innerHTML = `<a href="/Omnifood/img/items/item${
        no + 1
      }.jpg" target="_blank" style="text-decoration:none; color:black">${
        items[no]["name"]
      }</a>`;

      // <input type="checkbox" name="1" id="ingri1" checked />
      //         <label for="ingri1">onions</label>

      // let form = document.querySelector(`.day--${i++} .change`);
      // console.log(form);

      /*
      form.innerHTML = "";
      let arr = items[no]["ingridients"];
      let str = `<input type="hidden" name="name" value="${account2.owner}">
      <input type="hidden" name="address" value="${account2.address}">
      <input type="hidden" name="item" value="${items[no]["name"]}">
      `;
      for (let ind = 0; ind < arr.length; ind++) {
        str += `<input type="checkbox" name="${arr[ind]}" value="${
          arr[ind]
        }" id="ingri${ind + 1}" checked />
        <label for="ingri${ind + 1}">${arr[ind]}</label>

        `;
      }
      form.innerHTML = str;
      form.appendChild = `<input type="hidden" name="name" value="${account2.name}">`;
      form.appendChild = `<input type="hidden" name="address" value="${account2.address}"`;
      form.appendChild = `<input type="hidden" name="item" value="${items[no]["name"]}"`;
      */

      // let currentAccount = window.currentAccount;
      // console.log(currentAccount);
      let arr = items[no]["ingridients"];

      // document.querySelector(`.day--${i} .change input[name='Name']`).value =
      //   account3.owner;
      // document.querySelector(`.day--${i} .change input[name='Address']`).value =
      //   account3.address;
      document.querySelector(`.day--${i} .change input[name='Item']`).value =
        items[no]["name"];
      // document.querySelector(`.day--${i} .change input[name='Mail']`).value =
      //   account3.mail;
      // document.querySelector(`.day--${i} .change input[name='Phno']`).value =
      //   account3.phno;

      document.querySelector(`.day--${i} .change input[name='1']`).value =
        arr[0];
      document.querySelector(
        `.day--${i} .change label[for='ingri1']`
      ).textContent = arr[0];

      document.querySelector(`.day--${i} .change input[name='2']`).value =
        arr[1];
      document.querySelector(
        `.day--${i} .change label[for='ingri2']`
      ).textContent = arr[1];

      document.querySelector(`.day--${i} .change input[name='3']`).value =
        arr[2];
      document.querySelector(
        `.day--${i} .change label[for='ingri3']`
      ).textContent = arr[2];

      document.querySelector(`.day--${i} .change input[name='4']`).value =
        arr[3];
      document.querySelector(
        `.day--${i} .change label[for='ingri4']`
      ).textContent = arr[3];

      document.querySelector(`.day--${i} .change input[name='5']`).value =
        arr[4];
      document.querySelector(
        `.day--${i} .change label[for='ingri5']`
      ).textContent = arr[4];

      document.querySelector(`.day--${i} .change input[name='6']`).value =
        arr[5];
      document.querySelector(
        `.day--${i} .change label[for='ingri6']`
      ).textContent = arr[5];

      document.querySelector(`.day--${i} .change input[name='7']`).value =
        arr[6];
      document.querySelector(
        `.day--${i} .change label[for='ingri7']`
      ).textContent = arr[6];

      document.querySelector(`.day--${i} .change input[name='8']`).value =
        arr[7];
      document.querySelector(
        `.day--${i} .change label[for='ingri8']`
      ).textContent = arr[7];

      // document.querySelector("form input[name='1']").value = arr[0];
      // document.querySelector("form label[for='ingri1']").textContent = arr[0];
    }

    console.log(no);
  }
}

console.log(check);

weeklyPlans();

let mondaybtn = document.querySelector("input[form='myform1']");
let tuesdaybtn = document.querySelector("input[form='myform1']");
let wednesdaybtn = document.querySelector("input[form='myform1']");
let thursdaybtn = document.querySelector("input[form='myform1']");
let fridaybtn = document.querySelector("input[form='myform1']");
let saturdaybtn = document.querySelector("input[form='myform1']");
let sundaybtn = document.querySelector("input[form='myform1']");

console.log(mondaybtn);

const btns = document.getElementsByClassName("orderBtn");
console.log(btns);
for (let btn = 0; btn < btns.length; btn++) {
  console.log(btn);
  btns[btn].addEventListener("click", function (e) {
    e.preventDefault();
    const inputText = document.querySelector(".input--name").value;
    console.log(inputText);
    console.log(accounts);

    var current = accounts.find((acc) => acc.owner === inputText);
    console.log(current);

    localStorage.setItem("currentSno", current.sno);

    let str = `acc${current.sno}${days[btn]}`;
    console.log(str);

    // const formsInputs = document.getElementsByClassName(
    //   "div .change input[name='Name']"
    // );
    // console.log(formsInputs[0]);
    // console.log(formsInputs[0]);
    console.log(localStorage.getItem(str));
    let mealsLeft = localStorage.getItem(str);
    console.log(mealsLeft);
    if (mealsLeft > 0) {
      let count = localStorage.getItem(str);
      localStorage.removeItem(str);
      localStorage.setItem(str, count <= 1 ? 0 : 1);

      console.log(btn);
      document.querySelector(
        `.day--${btn + 1} .change input[name='Name']`
      ).value = current.owner;
      document.querySelector(
        `.day--${btn + 1} .change input[name='Address']`
      ).value = current.address;
      // document.querySelector(`.day--${btn+1} .change input[name='Item']`).value =
      //   items[no]["name"];
      document.querySelector(
        `.day--${btn + 1} .change input[name='Mail']`
      ).value = current.mail;
      document.querySelector(
        `.day--${btn + 1} .change input[name='Phno']`
      ).value = current.phno;
      document.querySelector(`.day--${btn + 1} .change`).submit();
    } else {
      alert(`Sorry! Only ${current.plan} meals🍔 per day`);
    }
  });
}

for (let i = 0; i <= 6; i++) {
  let str = `acc${localStorage.getItem("currentSno")}${days[i]}`;
  console.log(str);
  document.querySelector(`.left--${days[i]}`).textContent =
    localStorage.getItem(str);
}
