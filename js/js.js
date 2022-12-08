//Get data
loadData();

function loadData() {
  //gọi api lấy dữ liệu
  $.ajax({
    url: "https://amis.manhnv.net/api/v1/Employees",
    type: "GET",
    dataType: "json",
    success: function (res) {
      console.log(res);
      console.log(typeof res[0].CreatedDate);
      for (const employee of res) {
        console.log(employee.CreatedDate.slice(0, -9));
        var trHTML = `<tr>
                        <td><input type="checkbox" class="checkbox-input"></td>
                        <td>${employee.EmployeeCode}</td>
                        <td>${employee.EmployeeName}</td>
                        <td>${employee.Gender || ""}</td>
                        <td class="dob">${employee.CreatedDate.slice(0, -9).replace(/-/g, '/')}</td>
                        <td>001201005936</td>
                        <td>Trưởng nhóm</td>
                        <td>Xay keo, phối trộn</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>`;
        $(".trEmployee").append(trHTML);
      }
    },
  });
}
