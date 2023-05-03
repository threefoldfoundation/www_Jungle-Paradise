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
        { src: "../images/room/S3V02507-640w.jpg" },
        { src: "../images/room/S3V02509-640w.jpg" },
        { src: "../images/room/S3V02510-1280w.jpg" },
        { src: "../images/room/bedroom.jpg" },
        { src: "../images/room/S3V02513-1280w.jpg" },
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
        { src: "../images/room/S3V02509-640w.jpg" },
        { src: "../images/room/S3V02517-640w.jpg" },
        { src: "../images/room/S3V02507-640w.jpg" },
        { src: "../images/room/S3V02515-640w.jpg" },
        { src: "../images/room/S3V02510-1280w.jpg" },
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
        { src: "../images/room/S3V02509-640w.jpg" },
        { src: "../images/room/S3V02517-640w.jpg" },
        { src: "../images/room/S3V02507-640w.jpg" },
        { src: "../images/room/S3V02515-640w.jpg" },
        { src: "../images/room/S3V02510-1280w.jpg" },
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
