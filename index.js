class Course {
  constructor(title, description, slots) {
    this.title = title;
    this.description = description;
    this.slots = slots;
  }
}


const courses = [
  new Course("Maths", "This is a maths course", ["9PM", "10PM", "1PM"]),
  new Course("Science", "This is a science course", ["9PM", "10PM", "1PM"]),
  new Course("English", "This is a english course", ["9PM", "10PM", "1PM"]),
  new Course("Physics", "This is a physics course", ["9PM", "10PM", "1PM"]),
  new Course("Philoshopy", "This is a philoshopy course", ["9PM", "10PM", "1PM"]),
];

function bookCourse(i, course) {
  console.log(course);
}
function createCourseDiv(course) {
  var btnGrps = "";
  const title = course.title;
  for (var i = 0; i < course.slots.length; i++) {
    btnGrps += `<button id="${i}" class=" col btn-outline-secondary btn" type="button" onclick="bookCourse(${i}, '${title}')">${course.slots[i]}</button>
          `;
  }

  const courseDiv = `<li class="col course" id="${course.title}">
    <div class="card shadow-sm" >
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text class="" x="50%" y="50%" fill="#eceeef" dy=".3em">
          ${course.title}
        </text>
      </svg>
    
      <div class="card-body">
        <p class="card-text">
          ${course.description}
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="row gap-2">
          ${btnGrps}
          </div>
        </div>
      </div>
    </div>
    </li>`;
  return courseDiv;
}

function displayCourses(courses) {
  document.getElementById("classes").innerHTML = "";
  for (var i = 0; i < courses.length; i++) {
    const courseDiv = createCourseDiv(courses[i]);
    document.getElementById("classes").innerHTML += courseDiv;
  }
}

displayCourses(courses);

function search_courses() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();

  var x = document.getElementsByClassName("course");

  for (i = 0; i < courses.length; i++) {
    if (
      courses[i].title.toLowerCase().includes(input) ||
      courses[i].description.toLowerCase().includes(input)
    ) {
      console.log(x[i]);
      x[i].style.display = "list-item";
    } else {
      console.log(x[i]);
      x[i].style.display = "none";
    }
  }
}
