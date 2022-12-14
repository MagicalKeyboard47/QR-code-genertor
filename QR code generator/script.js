"use strict";

const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  //   console.log(url, size);

  if (url === "") {
    alert("Enter a correct URL please");
  } else {
    setTimeout(() => {
      generateQRCode(url, size);

      setTimeout(() => {
        const saveUrl = qr.querySelector("img").src;
        createSaveBtn(saveUrl);
      }, 50);
    }, 1000);
  }

  const generateQRCode = (url, size) => {
    const qrcode = new QRCode("qrcode", {
      text: url,
      width: size,
      height: size,
    });
  };
};
const clearUI = () => {
  qr.innerHTML = "";
  const saveLink = document.getElementById("save-link");
  if (saveLink) saveLink.remove();
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList =
    "bg-lime-300 hover:bg-lime-600 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerHTML = "Save image";
  document.getElementById("generated").appendChild(link);
};
form.addEventListener("submit", onGenerateSubmit);
