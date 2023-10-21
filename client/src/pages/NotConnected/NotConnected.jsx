import React from "react";
import "./NotConnected.css";
import carLogo from "../../assets/carLogo.png";
import location from "../../assets/location.png";
import admin from "../../assets/admin.png";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import admin1 from "../../assets/info-admin/admin-1.jpg";
import admin2 from "../../assets/info-admin/admin-2.jpg";
import admin3 from "../../assets/info-admin/admin-3.jpg";
import { Container, Row, Col } from "reactstrap";
import ServicesList from "../../components/ServicesList/ServicesList";
import BlogList from "../../components/BlogList/BlogList";

const NotConnected = (props) => {
  document.title = "Admin Car";

  return (
    <div style={{ marginTop: "70px", marginBottom: "100px" }}>
      <div className="connect_div">
        <div className="connect_intro">
          <img className="connect_intro_logo" src={carLogo} alt="" />
          <p className="connect_intro_title">
            Trung tâm đăng kiểm xe
            <br />
            Thủ Đức <img src={location} alt="" />{" "}
          </p>
        </div>
        <di className="connect_middle">
          <h1 className="connect_middle_title">Trang web dành cho quản trị</h1>
          <img className="connect_middle_logo" src={admin} alt="" />
        </di>
        <button className="login" onClick={props.connectWallet}>
          Xác minh Tài khoản
        </button>
      </div>
      {/* ============= hero section =========== */}
      <section className="hero">
        <HeroSlider />
      </section>
      <div className="info">
        <div className="admin-1">
          <div className="admin-container-pic">
            <img src={admin1} className="admin-pic" />
            <p className="admin-info">Nguyễn Văn Minh Toàn</p>
          </div>
          <div className="admin-intro">
            <p className="admin-intro-title">
              Tôi là Nguyễn Văn Minh Toàn, một Senior với kinh nghiệm 10 năm
              trong lĩnh vực blockchain. Tôi có kiến thức vững chắc về các
              nguyên tắc cơ bản của blockchain, bao gồm cách thức hoạt động, các
              ứng dụng tiềm năng và các thách thức hiện tại. Tôi cam đoan mọi
              ứng dụng mà tôi viết ra đều đạt độ bảo mật cao.
            </p>
          </div>
        </div>
        <div className="admin-2">
          <div className="admin-intro" style={{marginRight:"5%"}}>
            <p className="admin-intro-title">
              Tôi là Cao Quốc, một người mới bắt đầu trong lĩnh vực blockchain.
              Tôi đã bắt đầu tìm hiểu về blockchain từ 2 tháng trước và tôi rất
              hào hứng với tiềm năng của công nghệ này. Mặc không có nhiều kinh
              nghiệm nhưng tôi sẽ cố gắng để đạt được nhiều thành quả.
            </p>
          </div>
          <div className="admin-container-pic">
            <img src={admin2} className="admin-pic" />
            <p className="admin-info">Cao Quốc Tuấn</p>
          </div>
        </div>
        <div className="admin-3">
          <div className="admin-container-pic">
            <img src={admin3} className="admin-pic" />
            <p className="admin-info">Nguyễn Hoàng Diệp Phi</p>
          </div>
          <div className="admin-intro">
            <p className="admin-intro-title">
              Xin chào tôi là Nguyễn Hoàng Diệp Phi, Tôi là là sinh viên mới ra
              trường chuyên ngành kinh doanh. Tôi rẽ hướng trái ngành sang
              blockchain. Nhưng không sao đầy thách thức nhưng tôi tin tôi sẽ
              thành công. Tôi vẫn đang học hỏi nhiều điều về blockchain, nhưng
              tôi tin rằng công nghệ này có tiềm năng cách mạng hóa nhiều ngành
              công nghiệp. 
            </p>
          </div>
        </div>
      </div>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Chi tiết</h6>
              <h2 className="section__title">Dịch vụ cao cấp </h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Trãi nghiệm người dùng</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NotConnected;
