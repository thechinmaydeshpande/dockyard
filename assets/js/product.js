new WOW().init();
const blob = document.getElementById("blob");
const blob1 = document.getElementById("blob1");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    {
      duration: 900,
      fill: "forwards",
    }
  );
  blob1.animate(
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
