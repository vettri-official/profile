window.onload = function () {
  skillsets();
};
IsIntoView("education");
IsIntoView("skill");
let flag = [];
function IsIntoView(id) {
  $(window).scroll(function () {
    var hT = $("#" + id).offset().top,
      hH = $("#" + id).outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();

    if (wS > hT + hH - wH) {
      if (!flag.includes(id)) {
        if (id == "education") counter();
        if (id == "skill") progressCounter();
        flag.push(id);
      }
    }
  });
}
function counter() {
  $(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-percent");
    $({ countNum: 0 }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 3000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
}
function progressCounter() {
  $(".skill-progress").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-percent");
    $({ countNum: 0 }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 3000,
        easing: "linear",
        step: function () {
          $this.css("width", `${Math.floor(this.countNum)}%`);
        },
        complete: function () {
          $this.css("width", `${this.countNum}%`);
        },
      }
    );
  });
}
function skillsets() {
  const frame = document.getElementById("skill-frame");
  let array = [
    {
      icon: "<img width='50' src='https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png'/>",
      skill: "HTML",
      percent: 90,
    },
    {
      icon: "<img width='50' src='https://logospng.org/download/css-3/logo-css-3-2048.png' />",
      percent: 90,
      skill: "CSS",
    },
    {
      icon: "<img width='50' src='https://sass-lang.com/assets/img/logos/logo.svg' />",
      percent: 70,
      skill: "SCSS",
    },
    {
      icon: "<img width='50' src='https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' />",
      percent: 80,
      skill: "Bootstrap",
    },
    {
      icon: "<img width='50' src='https://webyourmind.com/wp-content/uploads/2018/08/tech-icon-16.png' />",
      percent: 85,
      skill: "JavaScript",
    },
    {
      icon: "<img width='50' src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_official_icon_130107.png' />",
      percent: 60,
      skill: "TypeScript",
    },
    {
      icon: "<img width='50' src='https://th.bing.com/th/id/R.450f2b96f7e9a4dd6bd4203e9ae7d6d1?rik=ee9MFIc%2b5y5kAg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fjquery-logo-png--512.png&ehk=0sJi1yTrN7399ERPql%2bPhOYr60Sjbx4adZRmCdmExIM%3d&risl=&pid=ImgRaw&r=0' />",
      percent: 90,
      skill: "JQuery",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 223 236" width="50">
      <g _ngcontent-ng-c1135088022="" clip-path="url(#a)">
          <path _ngcontent-ng-c1135088022="" fill="url(#b)"
              d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z">
          </path>
          <path _ngcontent-ng-c1135088022="" fill="url(#c)"
              d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z">
          </path>
      </g>
      <defs _ngcontent-ng-c1135088022="">
          <linearGradient _ngcontent-ng-c1135088022="" id="b" x1="49.009" x2="225.829" y1="213.75"
              y2="129.722" gradientUnits="userSpaceOnUse">
              <stop _ngcontent-ng-c1135088022="" stop-color="#E40035"></stop>
              <stop _ngcontent-ng-c1135088022="" offset=".24" stop-color="#F60A48"></stop>
              <stop _ngcontent-ng-c1135088022="" offset=".352" stop-color="#F20755"></stop>
              <stop _ngcontent-ng-c1135088022="" offset=".494" stop-color="#DC087D"></stop>
              <stop _ngcontent-ng-c1135088022="" offset=".745" stop-color="#9717E7"></stop>
              <stop _ngcontent-ng-c1135088022="" offset="1" stop-color="#6C00F5"></stop>
          </linearGradient>
          <linearGradient _ngcontent-ng-c1135088022="" id="c" x1="41.025" x2="156.741" y1="28.344"
              y2="160.344" gradientUnits="userSpaceOnUse">
              <stop _ngcontent-ng-c1135088022="" stop-color="#FF31D9"></stop>
              <stop _ngcontent-ng-c1135088022="" offset="1" stop-color="#FF5BE1" stop-opacity="0">
              </stop>
          </linearGradient>
          <clipPath _ngcontent-ng-c1135088022="" id="a">
              <path _ngcontent-ng-c1135088022="" fill="#fff" d="M0 0h223v236H0z"></path>
          </clipPath>
      </defs>
  </svg>`,
      skill: "Angular",
      percent: 80,
    },
    {
      icon: "<img width='50' src='https://clouddevs.com/wp-content/uploads/2018/08/react-logo-transparent-300x300.png' />",
      percent: 30,
      skill: "React",
    },
    {
      icon: "<img width='50' src='https://iconape.com/wp-content/png_logo_vector/c.png' />",
      percent: 25,
      skill: "C#",
    },
    {
      icon: "<img width='50' src='https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png' />",
      percent: 30,
      skill: "Java",
    },
    {
      icon: "<img width='50' src='https://logodix.com/logo/696508.png' />",
      percent: 50,
      skill: "SQL Server",
    },
  ];
  array.forEach((element) => {
    const markup = document.createElement("div");
    markup.setAttribute("class", "col-lg-4 col-md-6 col-sm-12");
    const content = `
    <div class="skill-board">
    <div class="row">
    <div class="col-4">
        ${element.icon}
        </div>
        <div class="col-8">
        <div class="skill-title">${element.skill}</div>
        </div>
        </div>
        <div class="skill-progress" data-percent="${element.percent}"></div>
    </div>`;
    markup.innerHTML = content;
    frame.appendChild(markup);
  });
}
