const text = document.querySelector(".text");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
  )
  .join("");


let counterDate = $('.skill_box h3');
let executed = false;

$(window).scroll(function () {
  let $scroll = $(this).scrollTop() + 200;
  let $offset = $('.first_skills').offset().top;

  if ($scroll > $offset) {
    if (!executed) {
      counterDate.each(function () {
        let current = $(this);
        let target = current.attr('data-rate');

        $({
          rate: 0
        }).animate({
          rate: target
        }, {
          duration: 2500,
          progress: function () {
            let now = this.rate;
            current.text(Math.ceil(now));
          },
        });
      });

      executed = true; // pieChart 함수가 실행되지 않도록 executed 값을 변경
    }

    // 40500 이상인 경우에만 pieChart 함수 실행
    if ($scroll >= 24000) {
      pieChart();
    }
  }
});

function pieChart() {
  $('.chart').easyPieChart({
    barColor: '#B7CE01',
    scaleColor: false,
    trackColor: '#e8e8e8',
    lineWidth: 17,
    size: 200,
    animate: 2000,
  });
}


function changeImage() {
  document.getElementById("image").src = "../img/myimg3.jpg"; /* 이미지2로 변경 */
}

function restoreImage() {
  document.getElementById("image").src = "../img/myimg2.jpg"; /* 이미지1로 복원 */
}


