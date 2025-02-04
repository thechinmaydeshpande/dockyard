new WOW().init();
const blobContactPage = document.getElementById("blob2");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blobContactPage.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    {
      duration: 900,
      fill: "forwards",
    }
  );
};
