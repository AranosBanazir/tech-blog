const newBtn = document.querySelector("#newpost-btn");
const editor = document.querySelector("#editor");
const newForm = document.querySelector("#new-form");
const editForm = document.querySelector("#edit-form");
const postContainer = document.querySelector("#post-container");
const editTitleInput = document.querySelector("#editTitleInput");
const editContentInput = document.querySelector("#editContentInput");

const handleEdit = (e) => {
  e.preventDefault()

  const { title, body } = e.target.elements;

  const newPost = {
    title: title.value,
    body: body.value,
  };
  console.log(newPost);

  fetch("/api/posts", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  }).then((res) => {
    if (res.status === 201) {
      console.log("WE CHANGED A POST");
    }
  });
};

const handleNew = (e) => {
  e.preventDefault();
  const { title, body } = e.target.elements;

  const newPost = {
    title: title.value,
    body: body.value,
  };
  console.log(newPost);

  fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  }).then((res) => {
    if (res.status === 201) {
      console.log("WE MADE A NEW POST");
    }
  });
};

const showEditor = () => {};

const handlePost = async (e) => {
  if (!e.target.dataset.id) return;

  editForm.classList.remove("d-none");

  await fetch(`/api/posts/${e.target.dataset.id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      editTitleInput.value = data.title;
      editContentInput.innerHTML = data.body;
    });
};







editForm.addEventListener("submit", handleEdit);
newForm.addEventListener("submit", handleNew);
newBtn.addEventListener("click", showEditor);
postContainer.addEventListener("click", handlePost);
