moveProgress();
// loadData();
/**
 * Hàm chuyển động progressbar
 * Author: Duy
 */
function moveProgress() {
  try {
    let elem = document.querySelector(".progress");
    let progressBar = document.querySelector(".main__progress");
    progressBar.style.display = "flex";
    let width = 20;
    let id = setInterval(frame, 30);
    function frame() {
      //chạy thanh progress lên 100% thì mới gọi hàm loadData
      if (width >= 100) {
        clearInterval(id);
        loadData();
        progressBar.style.display = "none";
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerText = width + "%";
      }
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hàm redload lại data
 * Author: Duy
 */
function reloadData() {
  try {
    //tái sử dụng lại hàm progress (đã bao gồm hàm loadData)
    moveProgress();
    let arrayEmployee = document.querySelectorAll(".tr-employee-data");
    for (let i = 0; i < arrayEmployee.length; i++) {
      arrayEmployee[i].remove();
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hàm call dữ liệu
 * Author: Duy
 */
function loadData() {
  //gọi api lấy dữ liệu
  try {
    $.ajax({
      url: "https://amis.manhnv.net/api/v1/Employees",
      type: "GET",
      dataType: "json",
      success: function (res) {
        for (const employee of res) {
          var trHTML = `
                          <tr class="tr-employee-data">
                              <td><input type="checkbox" class="checkbox-input"></td>
                              <td>${employee.EmployeeCode}</td>
                              <td>${employee.EmployeeName}</td>
                              <td>${employee.Gender || ""}</td>
                              <td class="dob">${employee.CreatedDate.slice(
                                0,
                                -9
                              ).replace(/-/g, "/")}</td>
                              <td>001201005936</td>
                              <td>Trưởng nhóm</td>
                              <td>Xay keo, phối trộn</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                          </tr>
                        `;
          $(".trEmployee").append(trHTML);
        }
      },
    });
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hàm hiển thị dialog
 * Author: Duy
 */
function displayDialog() {
  try {
    //hiển thị dialog khi click vào btn
    let isDisplay = document.querySelector(".dialog");
    isDisplay.style.display = "flex";

    //Tự động focus vào trường mã nhân viên
    let focusInput = document.querySelector("#input-id");
    focusInput.focus();
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hàm đóng dialog
 * Author: Duy
 */
function closeDialog() {
  try {
    //Ẩn dialog
    let isDisplay = document.querySelector(".dialog");
    console.log(isDisplay);
    isDisplay.style.display = "none";
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hàm validate dữ liệu
 * Author: Duy
 */
function validateDialog() {
  try {
    inputErrors = [];

    //get tất cả input bắt buộc
    let inputRequired = $("[m-required]");

    //xoá hết error label
    let elementErrors = document.querySelectorAll(".error-notification");
    for (const item of elementErrors) {
      item.remove();
    }
    for (const input of inputRequired) {
      if (
        input.value.trim() === "" ||
        input.value === null ||
        input.value === undefined
      ) {
        inputErrors.push(input);
      } else {
        $(input).removeClass("input--error");
      }
    }

    if (inputErrors.length > 0) {
      //focus vào ô lỗi đầu tiên
      inputErrors[0].focus();
      for (const array of inputErrors) {
        array.classList.add("input--error");
        $(array).after(
          `<div class="error-notification">Mã không để trống</div>`
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
}
