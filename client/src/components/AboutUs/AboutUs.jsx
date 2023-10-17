import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="About-us">
      <div className="About-infor">
        <h4 className="section__subtitle">About Us</h4>
        <h3 className="section__title">
          Chào Mừng đến với ứng dụng tra cứu thông tin xe trực tuyến
        </h3>
        <p className="section__description">
          Ứng dụng của chúng tôi đảm bảo tính minh bạch và an ninh trong việc
          truy cứu thông tin về các chi tiết liên quan đến xe. Sử dụng công nghệ
          blockchain,lưu trữ một hệ thống phân tán và không thể sửa đổi, mọi
          thông tin liên quan đến xe được ghi lại và xác thực.Bạn có thể tra cứu
          thông tin về lịch sử sở hữu, lịch sử bảo trì, thông tin về tai nạn,
          thông tin liên quan đến pháp lý và nhiều hơn nữa về bất kỳ chiếc xe
          nào trong hệ thống. Các thông tin này không chỉ hữu ích cho người mua
          và bán xe đã qua sử dụng, mà còn giúp tăng cường sự tin tưởng và minh
          bạch trong thị trường xe hơi.Ứng dụng truy cứu xe trực tuyến của chúng
          tôi đưa ra thông tin chính xác và đáng tin cậy về lịch sử của một
          chiếc xe, giúp người dùng đưa ra quyết định thông minh và tự tin khi
          mua hoặc bán một chiếc xe đã qua sử dụng.
        </p>
        <div class="icon-container">
          <span class="icon">
            <i class="ri-check-line"></i>
          </span>
          <span class="text">Tra Cứu thông tin xe nhanh chóng</span>
          <span class="icon">
            <i class="ri-check-line"></i>
          </span>
          <span class="text">Thông tin chính xác,không thể sửa đổi</span>
          <span class="icon">
            <i class="ri-check-line"></i>
          </span>
          <span class="text">Tăng cường sự tin tưởng,hữu ích cho người dùng</span>
        </div>
      </div>

      <div className="About-infor-pic"></div>
    </div>
  );
};

export default AboutUs;
