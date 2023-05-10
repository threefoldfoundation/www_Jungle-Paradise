// Home
if (document.getElementById("gallery-hash-home") !== null) {
  const home = lightGallery(document.getElementById("gallery-hash-home"), {
    dynamic: true,
    dynamicEl: [
      { src: "../images/home/20210915.jpg" },
      { src: "../images/home/flying+boy.JPG" },
      { src: "../images/home/flyingboy.JPG" },
      { src: "../images/home/IMG-20210926-WA0179-640w.jpg" },
      { src: "../images/home/Jungle+Paradise_Beach.jpeg" },
      { src: "../images/home/Jungle_Paradise_Beach_Resort.jpg" },
      { src: "../images/home/Jungle_Paradise_Beach_Resort_Zanzibar.jpg" },
      { src: "../images/home/Pool_Cuple-640w.jpeg" },
      { src: "../images/home/S3V02585_1280w.jpg" },
      { src: "../images/home/S3V02586-1280w.jpg" },
      { src: "../images/home/stuworks-89-640w.jpg" },
      { src: "../images/home/stuworks-128-640w.jpg" },
    ],
  });
  document
    .getElementById("gallery-hash-home")
    .addEventListener("click", function () {
      home.openGallery(0);
    });
}
// Junior King Suite
if (document.getElementById("gallery-hash-demo-1") !== null) {
  const juniorKingSuite = lightGallery(
    document.getElementById("gallery-hash-demo-1"),
    {
      dynamic: true,
      hash: false,
      galleryId: 1,
      dynamicEl: [
        { src: "../images/room_junior/junior01.jpg" },
        { src: "../images/room_junior/junior02.jpg" },
        { src: "../images/room_junior/junior03.jpg" },
        { src: "../images/room_junior/junior04.jpg" },
        { src: "../images/room_junior/junior05.jpg" },
        { src: "../images/room_junior/junior06.jpg" },
        { src: "../images/room_junior/junior07.jpg" },
        { src: "../images/room_junior/junior08.jpg" },
        { src: "../images/room_junior/junior09.jpg" },
        { src: "../images/room_junior/junior10.jpg" },
        { src: "../images/room_junior/junior11.jpg" },
        { src: "../images/room_junior/junior12.jpg" },
        { src: "../images/room_junior/junior13.jpg" },
        { src: "../images/room_junior/junior14.jpg" },
        { src: "../images/room_junior/junior15.jpg" },
        { src: "../images/room_junior/junior16.jpg" },
        { src: "../images/room_junior/junior17.jpg" },
        { src: "../images/room_junior/junior18.jpg" },
        { src: "../images/room_junior/junior19.jpg" },
        { src: "../images/room_junior/junior20.jpg" },
        { src: "../images/room_junior/junior21.jpg" },
        { src: "../images/room_junior/junior22.jpg" },
        { src: "../images/room_junior/junior23.jpg" },
      ],
    }
  );
  document
    .getElementById("gallery-hash-demo-1")
    .addEventListener("click", function () {
      juniorKingSuite.openGallery(0);
    });
}

// Senior King Suite
if (document.getElementById("gallery-hash-demo-2") !== null) {
  const seniorKingSuite = lightGallery(
    document.getElementById("gallery-hash-demo-2"),
    {
      dynamic: true,
      hash: false,
      galleryId: 2,
      dynamicEl: [
        { src: "../images/room_senior/senior01.jpg" },
        { src: "../images/room_senior/senior02.jpg" },
        { src: "../images/room_senior/senior03.jpg" },
        { src: "../images/room_senior/senior04.jpg" },
        { src: "../images/room_senior/senior05.jpg" },
        { src: "../images/room_senior/senior06.jpg" },
        { src: "../images/room_senior/senior07.jpg" },
        { src: "../images/room_senior/senior08.jpg" },
        { src: "../images/room_senior/senior09.jpg" },
        { src: "../images/room_senior/senior10.jpg" },
        { src: "../images/room_senior/senior11.jpg" },
        { src: "../images/room_senior/senior12.jpg" },
        { src: "../images/room_senior/senior13.jpg" },
        { src: "../images/room_senior/senior14.jpg" },
        { src: "../images/room_senior/senior15.jpg" },
        { src: "../images/room_senior/senior16.jpg" },
        { src: "../images/room_senior/senior17.jpg" },
        { src: "../images/room_senior/senior18.jpg" },
        { src: "../images/room_senior/senior19.jpg" },
        { src: "../images/room_senior/senior20.jpg" },
      ],
    }
  );

  document
    .getElementById("gallery-hash-demo-2")
    .addEventListener("click", function () {
      seniorKingSuite.openGallery(0);
    });
}

// Executive King Suite
if (document.getElementById("gallery-hash-demo-3") !== null) {
  const executiveKingSuite = lightGallery(
    document.getElementById("gallery-hash-demo-3"),
    {
      dynamic: true,
      hash: false,
      galleryId: 3,
      dynamicEl: [
        { src: "../images/room_executive/Executive01.jpg" },
        { src: "../images/room_executive/Executive02.jpg" },
        { src: "../images/room_executive/Executive03.jpg" },
        { src: "../images/room_executive/Executive04.jpg" },
        { src: "../images/room_executive/Executive05.jpg" },
        { src: "../images/room_executive/Executive06.jpg" },
        { src: "../images/room_executive/Executive07.jpg" },
        { src: "../images/room_executive/Executive08.jpg" },
        { src: "../images/room_executive/Executive09.jpg" },
        { src: "../images/room_executive/Executive10.jpg" },
        { src: "../images/room_executive/Executive11.jpg" },
        { src: "../images/room_executive/Executive12.jpg" },
        { src: "../images/room_executive/Executive13.jpg" },
        { src: "../images/room_executive/Executive14.jpg" },
        { src: "../images/room_executive/Executive15.jpg" },
        { src: "../images/room_executive/Executive16.jpg" },
        { src: "../images/room_executive/Executive17.jpg" },
        { src: "../images/room_executive/Executive18.jpg" },
        { src: "../images/room_executive/Executive19.jpg" },
        { src: "../images/room_executive/Executive20.jpg" },
        { src: "../images/room_executive/Executive21.jpg" },
        { src: "../images/room_executive/Executive22.jpg" },
        { src: "../images/room_executive/Executive23.jpg" },
        { src: "../images/room_executive/Executive24.jpg" },
        { src: "../images/room_executive/Executive25.jpg" },
        { src: "../images/room_executive/Executive26.jpg" },
        { src: "../images/room_executive/Executive27.jpg" },
        { src: "../images/room_executive/Executive28.jpg" },
        { src: "../images/room_executive/Executive29.jpg" },
      ],
    }
  );

  document
    .getElementById("gallery-hash-demo-3")
    .addEventListener("click", function () {
      executiveKingSuite.openGallery(0);
    });
}

// Ocean Breeze Restaurant
if (document.getElementById("gallery-hash-restaurant-1") !== null) {
  const oceanBreezeRestaurant = lightGallery(
    document.getElementById("gallery-hash-restaurant-1"),
    {
      dynamic: true,
      hash: false,
      galleryId: 1,
      dynamicEl: [
        { src: "../images/restaurant1/re01.jpg" },
        { src: "../images/restaurant1/re02.jpg" },
        { src: "../images/restaurant1/re03.jpg" },
        { src: "../images/restaurant1/re04.jpg" },
        { src: "../images/restaurant1/re05.jpg" },
        { src: "../images/restaurant1/re06.jpg" },
        { src: "../images/restaurant1/re07.jpg" },
        { src: "../images/restaurant1/re08.jpg" },
        { src: "../images/restaurant1/re09.jpg" },
        { src: "../images/restaurant1/re10.jpg" },
        { src: "../images/restaurant1/re11.jpg" },
        { src: "../images/restaurant1/re12.jpg" },
        { src: "../images/restaurant1/re13.jpg" },
        { src: "../images/restaurant1/re14.jpg" },
        { src: "../images/restaurant1/re15.jpg" },
        { src: "../images/restaurant1/re16.jpg" },
        { src: "../images/restaurant1/re17.jpg" },
      ],
    }
  );

  document
    .getElementById("gallery-hash-restaurant-1")
    .addEventListener("click", function () {
      oceanBreezeRestaurant.openGallery(0);
    });
}

// JP's Beach Sun-See-Bar
if (document.getElementById("gallery-hash-restaurant-2") !== null) {
  const jpsBeachSunSeeBar = lightGallery(
    document.getElementById("gallery-hash-restaurant-2"),
    {
      dynamic: true,
      hash: false,
      galleryId: 2,
      dynamicEl: [
        { src: "../images/restaurant2/beach01.jpg" },
        { src: "../images/restaurant2/beach02.jpg" },
        { src: "../images/restaurant2/beach03.jpg" },
        { src: "../images/restaurant2/beach04.jpg" },
        { src: "../images/restaurant2/beach05.jpg" },
        { src: "../images/restaurant2/beach06.jpg" },
        { src: "../images/restaurant2/beach07.jpg" },
        { src: "../images/restaurant2/beach08.jpg" },
        { src: "../images/restaurant2/beach09.jpg" },
        { src: "../images/restaurant2/beach10.jpg" },
        { src: "../images/restaurant2/beach11.jpg" },
        { src: "../images/restaurant2/beach12.jpg" },
        { src: "../images/restaurant2/beach13.jpg" },
        { src: "../images/restaurant2/beach14.jpg" },
      ],
    }
  );

  document
    .getElementById("gallery-hash-restaurant-2")
    .addEventListener("click", function () {
      jpsBeachSunSeeBar.openGallery(0);
    });
}

// Experiences
if (document.getElementById("inline-gallery-container") !== null) {
  const lgContainer = document.getElementById("inline-gallery-container");
  const inlineGallery = lightGallery(lgContainer, {
    container: lgContainer,
    download: false,
    dynamic: true,
    closable: false,
    counter: false,
    slideDelay: 300,
    dynamicEl: [
      { src: "../images/experiences/exper1.jpg" },
      { src: "../images/experiences/exper2.jpg" },
      { src: "../images/experiences/exper3.jpg" },
      { src: "../images/experiences/exper4.jpg" },
      { src: "../images/experiences/exper5.jpg" },
      { src: "../images/experiences/exper6.jpg" },
      { src: "../images/experiences/exper7.jpg" },
      { src: "../images/experiences/exper8.jpg" },
    ],
  });

  const lgBackdrop = document.querySelector(".lg-backdrop");
  const lgNext = document.querySelector(".lg-next");
  const lgPrev = document.querySelector(".lg-prev");
  lgBackdrop.style.backgroundColor = "transparent";
  lgNext.style.right = "0";
  lgNext.style.color = "#000";
  lgPrev.style.color = "#000";
  inlineGallery.openGallery();
}
