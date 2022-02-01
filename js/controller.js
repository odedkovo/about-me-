$(document).ready(init);

function init() {
  $('.submit').click(getInputs);
  renderPage();
  $('.portfolio-link').click(renderModal);
  // renderModals();
}

function renderPage() {
  var projects = getGproj();
  console.log(projects);

  var strHTMLs = projects.map(
    (proj) =>
      `<div data-id=${proj.id} class="col-md-4 col-sm-6 portfolio-item">
    <a
      class="portfolio-link"
      data-toggle="modal"
      href="#portfolioModal${proj.countId}"
    >
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="./img/portfolio/${proj.name}.png" alt="" />
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
    </div>
  </div>`
  );
  // console.log(strHTMLs.join());
  $('.render-project').html(strHTMLs);
}

function renderModal() {
  const projectId = $(this).closest('.portfolio-item').data().id;

  var proj = getProjById(projectId);
  var strHTMLs = ` <div
      class="portfolio-modal modal fade"
      id="portfolioModal${proj.countId}"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${proj.name}</h2>
                  <p class="item-intro text-muted">${proj.title}</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="img/portfolio/${proj.name}.png"
                    alt=""
                  />
                  <p>
                    ${proj.desc}
                  </p>
                  <ul class="list-inline">
                    <li>Date: ${proj.publishedAt}</li>
                    <li>Category${proj.lables}</li>
                    <li><a href="${proj.link}">for the project </a></li>
                  </ul>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fa fa-times"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  // console.group(strHTMLs);
  console.log('g');
  console.log(strHTMLs);
  $('.the-modals').html(strHTMLs);
}

function getInputs() {
  var email = $('.email').val();
  var subject = $('.subject').val();
  var text = $('.txt').val();

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=odedkovo2@gmail.com.com&su=${subject}&body=my email is -${email}-${text}`
  );
}
