function getDepartmentDetails() {
  fetch("/getDepartmentDetails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: "",
  })
    .then((response) => response.json()) // Parse JSON response
    .then((data) => {
      insertData(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function getProgramDetails() {
  fetch("/getProgramDetails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: "",
  })
    .then((response) => response.json()) // Parse JSON response
    .then((data) => {
      insertProgram(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
getDepartmentDetails();
getProgramDetails();

function insertData(data) {
  const dept = document.getElementById("department");
  data.forEach((item) => {
    const opt = document.createElement("option");
    opt.setAttribute("value", item.department);
    opt.textContent = item.department;
    dept.appendChild(opt);
  });
}

function insertProgram(data) {
  const program = document.getElementById("program");
  data.forEach((item) => {
    const opt = document.createElement("option");
    opt.setAttribute("value", item.program);
    opt.textContent = item.program;
    program.appendChild(opt);
  });
}

const formId = document.getElementById("addStudentForm");
formId.onsubmit = (e) => {
  e.preventDefault();
  const program = document.getElementById("program").value;
  const department = document.getElementById("department").value;
  const year = document.getElementById("year").value;
  const rollNo = document.getElementById("rollNo").value;
  const studentName = document.getElementById("name").value;
  const enrollId = document.getElementById("enrollId").value;

  const formData = {
    program: program,
    department: department,
    year: year,
    rollNo: rollNo,
    studentName: studentName,
    enrollId: enrollId,
  };

  console.log(formData);
  addDetails(formData);
};

function addDetails(formData) {
  fetch("/addStudentDetails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json()) // Parse JSON response
    .then((data) => {
      if(data.success)
      {
        const errMsg = document.getElementById('errMsg');
        errMsg.style.display = "flex";
        errMsg.style.backgroundColor = "blue";
        errMsg.innerHTML = "InsertedSuccessFully";
        setTimeout(()=>{
          errMsg.innerHTML = "";

        },2000)
      }
      else
      {
          const errMsg = document.getElementById('errMsg');
          errMsg.style.display = "flex";
          errMsg.textContent = "Invalid Details!Try Again";
          setTimeout(()=>{
            errMsg.textContent = "";
            errMsg.style.display="none";
          },2000)
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


