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
    isDisplay.style.display = "none";
  } catch (error) {
    console.log(error);
  }
}
