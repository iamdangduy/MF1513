//Get data
loadData();

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
                          <tr>
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
    let msgError = [];
    // get element
    let idEmployee = document.querySelector("#input-id").value;
    let nameEmployee = document.querySelector("#label-name-employee").value;

    //kiểm tra dữ liệu người dùng nhập
    if (idEmployee === "" || idEmployee === undefined || idEmployee === null) {
      msgError.push("ID không được phép để trống");
    }
    if (
      nameEmployee === "" ||
      nameEmployee === undefined ||
      nameEmployee === null
    ) {
      msgError.push("Name không được phép để trống");
    }
    console.log(msgError);
    // let notification = document.querySelector(".popup__main--content");
    //in dữ liệu ra popup
    if (msgError.length !== 0) {
      document.querySelector(".popup").style.display = "flex";
      for (const noti of msgError) {
        let liNoti = `<li class="popup-noti">${noti}</li>`;
        $(".popup__main--content").append(liNoti);
      }
    }
    msgError = [];
  } catch (error) {
    console.log(error);
  }
}

/**
 * Hàm đóng Popup
 * Author: Duy
 */
function closePopup() {
  try {
    //ẩn popup
    document.querySelector(".popup").style.display = "none";

    //xoá hết noti trong popup
    $(".popup-noti").remove();
  } catch (error) {
    console.log(error);
  }
}
