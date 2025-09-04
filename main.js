document.addEventListener("DOMContentLoaded", function () {
  // ===== Thêm Google Fonts =====
  const link1 = document.createElement("link");
  link1.rel = "preconnect";
  link1.href = "https://fonts.googleapis.com";
  document.head.appendChild(link1);

  const link2 = document.createElement("link");
  link2.rel = "preconnect";
  link2.href = "https://fonts.gstatic.com";
  link2.crossOrigin = "anonymous";
  document.head.appendChild(link2);

  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap";
  document.head.appendChild(fontLink);

  fontLink.onload = () => {
    document.body.style.fontFamily = "'Archivo', sans-serif";
  };

  // ===== Thêm Font Awesome =====
  const fontAwesome = document.createElement("link");
  fontAwesome.rel = "stylesheet";
  fontAwesome.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
  document.head.appendChild(fontAwesome);

  // ===== CSS thay Tailwind =====
  const style = document.createElement("style");
  style.innerHTML = `
    .section-wrap {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px;
      margin-top: 48px;
    }
    .container { max-width: 1100px; width: 100%; }
    .title-block { display: flex; flex-direction: column; align-items: center; margin-bottom: 24px; text-align: center; }
    .title-block h2 { margin-bottom: 8px; font-size: 24px; font-weight: 700; color: #1a4f5f; }
    .title-block svg { margin-top: 16px; }
    .two-column { display: flex; flex-direction: column; gap: 40px; margin-top: 40px; }
    @media (min-width: 768px) {
      .two-column { flex-direction: row; justify-content: space-between; align-items: flex-start; gap: 80px; }
    }
    .circle {
      background-color: #dce1e6; border-radius: 50%; width: 144px; height: 144px;
      display: flex; align-items: center; justify-content: center;
      color: #1a4f5f; font-weight: 600; text-align: center; padding: 8px; line-height: 1.2;
    }
    .circle.sm { font-size: 14px; }
    .circle.md { font-size: 16px; position: relative; }
    .btn-round {
      background-color: #1a4f5f; color: #fff; font-weight: 600; border-radius: 9999px;
      width: 400px; min-height: 60px; display: flex; flex-direction: column; align-items: center;
      justify-content: center; text-align: center; font-size: 18px; padding: 8px 16px;
    }
    .btn-round span { font-size: 14px; font-weight: 400; }
    .left-col, .right-col { display: flex; flex-direction: column; align-items: center; gap: 48px; width: 100%; }
    @media (min-width: 768px) { .left-col, .right-col { gap: 80px; width: 50%; } }
    .left-col .two-circles { display: flex; justify-content: space-between; width: 100%; max-width: 320px; }
    .right-col .circle-wrap { position: relative; max-width: 400px; display: flex; flex-wrap: wrap; justify-content: center; gap: 80px; }
    .circle.center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
    svg.connector { position:absolute; bottom:-55px; width:90px; height:60px; }
  `;
  document.head.appendChild(style);

  // ===== Render HTML =====
  const wrapContent = document.querySelector(".section-3 .wrap-content");

  if (wrapContent) {
    const outerDiv = document.createElement("div");
    outerDiv.className = "section-wrap";

    const newDiv = document.createElement("div");
    newDiv.className = "container";
    newDiv.innerHTML = `
      <div class="title-main">
        <h2 class="mb-2">Flexible & Cost-Effective – Pay as You Go</h2>
 <svg fill="none" viewBox="0 0 600 24" height="24" width="500" xmlns="http://www.w3.org/2000/svg" class="w-full">
                <path fill="#225A67" d="M595.06 13.06a1.49 1.49 0 0 0 0-2.12l-9.55-9.547a1.5 1.5 0 0 0-2.12 0 1.51 1.51 0 0 0 0 2.122l8.49 8.485-8.49 8.485a1.51 1.51 0 0 0 0 2.122 1.5 1.5 0 0 0 2.12 0zM0 12v1.5h2v-3H0zm6 0v1.5h4v-3H6zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4z"></path>
              </svg>
      </div>

      <div class="two-column">
        <div class="left-col" style="position:relative">
          <div class="circle md">HR Manager
            <!-- Nối sang trái -->
            <svg class="w-full connector" style="left: -60px; transform: rotateZ(125deg);" xmlns="http://www.w3.org/2000/svg" width="70" height="24" viewBox="0 0 140 24" fill="none">
              <path d="M140.06 13.06a1.49 1.49 0 0 0 0-2.12l-9.55-9.547a1.5 1.5 0 0 0-2.12 0 1.51 1.51 0 0 0 0 2.122l8.49 8.485-8.49 8.485a1.51 1.51 0 0 0 0 2.122 1.5 1.5 0 0 0 2.12 0zM0 12v1.5h2v-3H0zm6 0v1.5h4v-3H6zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4z" fill="#225A67"></path>
            </svg>
            <!-- Nối sang phải -->
            <svg class="w-full connector" style="right: -60px; transform: rotateZ(55deg);" xmlns="http://www.w3.org/2000/svg" width="70" height="24" viewBox="0 0 140 24" fill="none">
              <path d="M140.06 13.06a1.49 1.49 0 0 0 0-2.12l-9.55-9.547a1.5 1.5 0 0 0-2.12 0 1.51 1.51 0 0 0 0 2.122l8.49 8.485-8.49 8.485a1.51 1.51 0 0 0 0 2.122 1.5 1.5 0 0 0 2.12 0zM0 12v1.5h2v-3H0zm6 0v1.5h4v-3H6zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4zm8 0v1.5h4v-3h-4z" fill="#225A67"></path>
            </svg>
          </div>

          <div class="two-circles">
            <div class="circle sm">HR General<br>Team Leader</div>
            <div class="circle sm">Recruitment<br>Consultant</div>
          </div>

          <div class="btn-round">Your Full HR Team, Without Full-Time Cost</div>
        </div>

        <div class="right-col">
          <div class="circle-wrap">
            <div class="circle sm">Recruitment</div>
            <div class="circle sm">Payroll</div>
            <div class="circle sm center">Planning</div>
            <div class="circle sm">Employee<br>Relation</div>
            <div class="circle sm">Social<br>insurance,<br>PIT, TU</div>
          </div>
          <div class="btn-round">
            End-to-End HR Execution
            <span>From hiring to compliance – all handled for you</span>
          </div>
        </div>
      </div>
    `;

    outerDiv.appendChild(newDiv);
    wrapContent.appendChild(outerDiv);
  }
});
