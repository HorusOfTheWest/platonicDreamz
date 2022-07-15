const keycaps = [
  {
    name: "Kawaii Strawberry Bunny",
    image:
      "https://i.etsystatic.com/27461219/r/il/284d69/3627661963/il_794xN.3627661963_g617.jpg",
    link: "https://www.etsy.com/ca/listing/1141953006/kawaii-strawberry-bunny-artisan-keycap?click_key=eba54fe370009caac080205ae33c134e4c6b41f2%3A1141953006&click_sum=5a50ff9c&ref=shop_home_feat_1",
  },
  {
    name: "Luna Cat",
    image:
      "https://i.etsystatic.com/27461219/r/il/b43557/3011238967/il_794xN.3011238967_r9ew.jpg",
    link: "https://www.etsy.com/ca/listing/972935070/luna-cat-artisan-keycap-for-mechanical?click_key=f1bec501c7bb791bf986af183cd943a34dee443c%3A972935070&click_sum=12647e6d&ref=shop_home_feat_3",
  },
  {
    name: "Cute Bear",
    image:
      "https://i.etsystatic.com/27461219/r/il/80c691/3069933040/il_794xN.3069933040_iusa.jpg",
    link: "https://www.etsy.com/ca/listing/1001954616/cute-bear-keycap-customizable-backlit?click_key=423e4b8634e5a587ffd78d40bded03dad4b7e6b0%3A1001954616&click_sum=104c17f7&ref=shop_home_feat_4",
  },
  {
    name: "Kawaii Panda",
    image:
      "https://i.etsystatic.com/27461219/r/il/334e5d/2963435882/il_794xN.2963435882_r1er.jpg",
    link: "https://www.etsy.com/ca/listing/972909680/kawaii-panda-customizable-keycap-for?click_key=f9eb7938829b843e874fc3e0cfc1db48ed51b439%3A972909680&click_sum=650021b0&ref=shop_home_active_3",
  },
  {
    name: "Kawaii Cookie Mouse",
    image:
      "https://i.etsystatic.com/27461219/r/il/59b18a/3065697760/il_794xN.3065697760_g44f.jpg",
    link: "https://www.etsy.com/ca/listing/1000820046/kawaii-cookie-mouse-keycap-backlit?click_key=a6495001f0728d7d5823fb30348343ee2bf5892f%3A1000820046&click_sum=7f3203f5&ref=shop_home_feat_2",
  },
  {
    name: "Cute Cake",
    image:
      "https://i.etsystatic.com/27461219/r/il/ff3f3d/3029936357/il_794xN.3029936357_mb1m.jpg",
    link: "https://www.etsy.com/ca/listing/992124833/cute-cake-artisan-customizable-keycap?click_key=a1c7c171f1070822cc2788203500063c95cb19a3%3A992124833&click_sum=1707249d&ref=shop_home_active_4&sca=1",
  },
  {
    name: "Cute Cat Paw",
    image:
      "https://i.etsystatic.com/27461219/r/il/e9171d/3029948761/il_794xN.3029948761_e62u.jpg",
    link: "https://www.etsy.com/ca/listing/952512349/cute-cat-paw-backlit-keycaps-artisan?click_key=9bdd8ec5f1118b7a16b2fa09b27e89b31eb2e1ad%3A952512349&click_sum=a21e06e9&ref=shop_home_active_5&crt=1",
  },
  {
    name: "Angelic Wings",
    image:
      "https://i.etsystatic.com/27461219/r/il/e625f1/3029954663/il_794xN.3029954663_l8id.jpg",
    link: "https://www.etsy.com/ca/listing/992130439/cute-angel-wing-keycap-customizable-for?click_key=cbf45b89c28ac7c0497cbce90d8d1a16e35780cf%3A992130439&click_sum=e2810e6a&ref=shop_home_active_6",
  },
  {
    name: "Kawaii Strawberry",
    image:
      "https://i.etsystatic.com/27461219/r/il/4667c6/2963462072/il_794xN.2963462072_f6bx.jpg",
    link: "https://www.etsy.com/ca/listing/986876745/kawaii-strawberry-customizable-keycap?click_key=e57531e8c4a0d517539ae6338f5661ccaa488a02%3A986876745&click_sum=75193a22&ref=shop_home_active_1&crt=1",
  },
];

const setKeycapsPage = () => {
  const setKeycapItem = (
    item
  ) => `<a target="_blank" x-data="{show: ''}" href="${
    item.link
  }" @mouseover="if (show === '') show = true" @mouseout="show = ''" >
    <img src="${item.image}" />
    <div  class="caption shadow-sm" x-show="show" :id="show" x-ref="${item.name.replaceAll(
      " ",
      ""
    )}" x-transition ><p>${item.name}</p></div>
  </a>`;

  return `<div class="flexbin flexbin-margin">
  ${keycaps.map((el) => setKeycapItem(el)).join("")}
  </div>`;
};

document.getElementById("keycaps-page").innerHTML = setKeycapsPage();

const rightPanel = document.getElementById("right-panel");
if (rightPanel.parentNode.clientWidth >= 769) {
  const height = rightPanel.parentNode.clientHeight;

  rightPanel.style.height = height;
}

window.addEventListener("resize", (event) => {
  if (rightPanel.parentNode.clientWidth >= 769) {
    const height = rightPanel.parentNode.clientHeight;

    rightPanel.style.height = height;
  } else {
    rightPanel.style.height = "100%";
  }
});
