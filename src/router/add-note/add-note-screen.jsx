import React from "react";
import PropTypes from "prop-types";
import Footer_v2 from "../../components/Footerv2/Footer_v2";
import NavbarScreen from "../../components/NavBar/Navbar-screen";

AddNoteScreen.propTypes = {};

function AddNoteScreen(props) {
  return (
    <>
      <NavbarScreen />

      <div className="wrapper__content container">
        <div className="row">
          <div className="content__left col-md-8 col-sm-12">
            <h1 className="content__title--one">
              đăng kí thông tin tiêm chủng
            </h1>

            <h1 className="content__title--two">Thông tin khách hàng</h1>
            <div className="content__content--one row">
              {/* <!-- name --> */}
              <div className="col-md-6 col-sm-12">
                <input
                  type="text"
                  className="form-control mb-3"
                  id="name"
                  placeholder="Họ và tên người tiêm (*)"
                />
              </div>
              {/* <!-- Gender --> */}
              <div className="col-md-6 col-sm-12">
                <select className="custom-select mb-3">
                  <option defaultValue="0">Giới tính</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
              </div>

              {/* <!-- date --> */}
              <div className="col-md-6 col-sm-12">
                <input
                  type="date"
                  className="form-control mb-3"
                  id="email"
                  placeholder="Ngày sinh định dạng 25/03/2021 (*)"
                />
              </div>
              {/* <!-- mã số tiêm chủng  --> */}
              <div className="col-md-6 col-sm-12">
                <input
                  type="text"
                  className="form-control mb-3"
                  id="email"
                  placeholder="Mã sổ tiêm chủng nếu có"
                />
              </div>
              {/* <!-- phone --> */}
              <div className="col-md-6 col-sm-12">
                <input
                  type="text"
                  className="form-control mb-3"
                  id="email"
                  placeholder="Điện thoại đăng kí (*)"
                />
              </div>
              {/* <!-- email --> */}
              <div className="col-md-6 col-sm-12">
                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  placeholder="Email đăng kí "
                />
              </div>
              {/* <!-- địa chỉ hộ khẩu --> */}
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control mb-3"
                  id="email"
                  placeholder="Địa chỉ hộ khẩu thường trú (*)"
                />
              </div>

              {/* <!-- tỉnh thành  --> */}
              <div className="col-md-4 col-sm-12">
                <select className="custom-select mb-3">
                  <option defaultValue="0">Tỉnh thành</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
              </div>

              {/* <!-- quân huyện --> */}
              <div className="col-md-4 col-sm-12">
                <select className="custom-select mb-3">
                  <option defaultValue="0">Quận huyện</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
              </div>
              {/* <!-- phường xã --> */}
              <div className="col-md-4 col-sm-12">
                <select className="custom-select mb-3">
                  <option defaultValue="0">Phường xã</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
              </div>
              {/* <!-- người liên hệ 1 --> */}
              <div className="col-md-6 col-sm-12">
                <input
                  type="text"
                  className="form-control mb-3"
                  id="email"
                  placeholder="Người liên hệ 1"
                />
              </div>
              {/* <!-- phone --> */}
              <div className="col-md-3 col-sm-12">
                <input
                  type="number"
                  className="form-control mb-3"
                  id="phone"
                  placeholder="Điện thoại"
                />
              </div>
              {/* <!-- quan hệ --> */}
              <div className="col-md-3 col-sm-12">
                <select className="custom-select mb-3">
                  <option defaultValue="0">Quan hệ</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
              </div>
              {/* <!-- người liên hệ 2 --> */}
              <div className="col-md-6 col-sm-12">
                <input
                  type="text"
                  className="form-control mb-3"
                  id="email"
                  placeholder="Người liên hệ 2"
                />
              </div>
              {/* <!-- phone --> */}
              <div className="col-md-3 col-sm-12">
                <input
                  type="number"
                  className="form-control mb-3"
                  id="phone"
                  placeholder="Điện thoại"
                />
              </div>
              {/* <!-- quan hệ --> */}
              <div className="col-md-3 col-sm-12">
                <select className="custom-select mb-3">
                  <option defaultValue="0">Quan hệ</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
              </div>
            </div>
            <h1 className="content__title--two">Thông tin tiêm chủng</h1>

            <div className="content__content--one row">
              {/* <!-- Chọn mũi tiêm theo --> */}
              <div className="col-md-6 col-sm-12">
                <select className="custom-select mb-3">
                  <option defaultValue="0">CHỌN MŨI TIÊM THEO</option>
                  <option value="1">Lẻ</option>
                  <option value="2">Từ 0-6 tuổi</option>
                </select>
              </div>
              {/* <!-- cơ sở tiêm chủng --> */}
              <div className="col-md-6 col-sm-12">
                <select className="custom-select mb-3">
                  <option defaultValue="0">CƠ SỞ TIÊM CHỦNG</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
              </div>
              {/* <!-- Danh mục mũi tiêm --> */}
              <div className="col-md-6 col-sm-12">
                <select className="custom-select mb-3">
                  <option defaultValue="0">Danh mục mũi tiêm</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
              </div>

              {/* <!-- Ngày tiêm --> */}
              <div className="col-md-6 col-sm-12">
                <input
                  type="date"
                  className="form-control mb-3"
                  id="phone"
                  placeholder="Ngày tiêm định dạng 25/03/2021 (*)"
                />
              </div>
            </div>

            <button className="btn btn-danger mb-4">
              Đăng kí thông tin tiêm chủng
            </button>
          </div>
          <div className="content__right col-md-4 col-sm-12">
            <h1 className="content__title mb-3">Hỗ trợ</h1>
            <button className="w-100 btn">Đăng kí thông tin tiêm chủng</button>
            <button className="w-100 btn">Tra cứu sổ tiêm chủng</button>
            <button className="w-100 btn">Câu hỏi thường gặp</button>
          </div>
        </div>
      </div>

      <Footer_v2 />
    </>
  );
}

export default AddNoteScreen;
