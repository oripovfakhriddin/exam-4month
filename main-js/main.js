const userURL = "https://api.github.com/users/oripovfakhriddin";
const followURL = "https://api.github.com/users/oripovfakhriddin/followers";
const repoURL = "https://api.github.com/users/oripovfakhriddin/repos";
const repoPageBox = document.querySelector(".repo__page-box");
const repoListBlock = document.querySelector(".repo__list-block");
const userPageBox = document.querySelector(".user__page-box");
const reposList = document.querySelector(".repos-list");
const followListBox = document.querySelector(".follow-list-box");
const navtab1 = document.querySelector(".navtab1");
const navtab2 = document.querySelector(".navtab2");
const navtab3 = document.querySelector(".navtab3");
const followContainer = document.querySelector(".follow__container");
const reposContainer = document.querySelector(".repo__list-box");
const reposBox = document.querySelector(".repos-box");
renderUI = (data) => {
  repoListBlock.innerHTML = data?.map(
    (item) =>
      `
      <div>
      <ul class="repo__list">
         <div class="repo__list-item-box">
             <li class="repo__list-item">
                 <div class="repo__item-box">
                     <a class="repo__item-link" href="${item.html_url}">${item.name}</a>
                     <span class="repo__item_param">Public</span>
                 </div>
                 <span class="repo__item-data1"></span>
                 <span class="repo__item-data2">${item.language}</span>
             </li>
     </ul>
 </div>
      `
  );
};

const getData = async () => {
  try {
    const res = await fetch(repoURL);
    const data = await res.json();
    // console.log(data);
    renderUI(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

renderUIrepos = (data) => {
  reposList.innerHTML = data.map(
    (item) =>
      `
<li class="repos__list-item">
<hr>
<div class="repos__block">
    <div>
        <div class="repo__item-name-box">
            <a class="repo__item-name" href="${item.html_url}">${item.name}</a>
            <span class="repo__item_param ">Public</span>
        </div>

        <div>
            <span class="repo__item-data1"></span>
            <span class="repo__item-data2">SCSS</span>
            <span
                style="color: rgba(197, 194, 194, 0.319) ; margin:0px 20px;"><svg
                    aria-label="star" role="img" height="16"
                    fill="rgba(197, 194, 194, 0.319)" viewBox="0 0 16 16"
                    version="1.1" width="16" data-view-component="true"
                    class="octicon octicon-star">
                    <path
                        d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z">
                    </path>
                </svg>1</span>
            <span style="color: rgba(197, 194, 194, 0.319);">Upload 10 hours
                ago</span>
        </div>
    </div>
    <div>
        <form>
            <button
                style=" border: none; padding: 7px 10px; background-color: #21262D; color: rgba(197, 194, 194, 0.319); border-radius: 15px;">Starred</button>
            <select
                style="background-color: #21262D; color: aliceblue; border-radius: 15px; padding: 5px 0;">
                <option value=""><span><svg aria-hidden="true" height="16"
                            viewBox="0 0 16 16" version="1.1" width="10"
                            data-view-component="true"
                            class="octicon octicon-triangle-down">
                            <path
                                d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z">
                            </path>
                        </svg></span></option>
                <option>List</option>
            </select>
        </form>
    </div>
</div>
<hr>
</li>

`
  );
};

const getDataProf = async () => {
  try {
    const res = await fetch(repoURL);
    const data = await res.json();
    //  console.log(data);
    renderUIrepos(data);
    // console.log(data);
  } catch (err) {
    //  console.log(err);
  }
};
getDataProf();

renderUIfol = (data) => {
  followListBox.innerHTML = data.map(
    (item) => `
  <li class="follow__list">
  <div class="follow__block">
      <div class="follow__block">
          <div>
              <a href=""><img class="follow__img"
                      src="https://avatars.githubusercontent.com/u/117515054?v=4"
                      alt="Followers img"></a>
          </div>
          <div>
              <a class="follow__title" href="${item.html_url}">Hojiakbar Mahmudov</a>
              <a class="follow__title-user" href="${item.html_url}">${item.login}</a>
              <p class="follow__title-user-text">QA Enginer</p>
          </div>

      </div>
      <div>
          <button type="submit"
              style=" border: none; border: 1px solid rgba(197, 194, 194, 0.319); padding: 7px 10px; background-color: #21262D;  color: rgba(197, 194, 194, 0.319); border-radius: 10px;">Unfollow</button>
      </div>
  </div>
  <hr>
</li>
  
  `
  );
};
const getDataFollow = async () => {
  try {
    const res = await fetch(followURL);
    const data = await res.json();
    //  console.log(data);
    renderUIfol(data);
    //  console.log(data);
  } catch (err) {
    //  console.log(err);
  }
};
getDataFollow();
 followContainer.style.display = "none";
 reposBox.style.display = "none";
navtab1.addEventListener("click", (ev) => {
  reposBox.style.display = "none";
  reposContainer.style.display = "block";
  followContainer.style.display = "none";
});
navtab2.addEventListener("click", (ev) => {
  reposBox.style.display = "block";
  reposContainer.style.display = "none";
  followContainer.style.display = "none";
});

navtab3.addEventListener("click", (ev) => {
  reposBox.style.display = "none";
  reposContainer.style.display = "none";
  followContainer.style.display = "block";
});
