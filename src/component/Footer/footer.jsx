import "./footer.css";

export let Footer = () => {
  return (
    <div className="footer">
      <div className="container ">
        <div className="boxs">
          <div className="box-1">
            <h2 className="logo-footer">꧁ تـسـوق ꧂</h2>
            <div className="icons">
              <div className="faceBook ic">
                <i className="bi bi-facebook"></i>
              </div>
              <div className="insta ic">
                <i className="bi bi-instagram"></i>
              </div>
              <div className="twet ic">
                <i className="bi bi-twitter"></i>
              </div>
            </div>
            <p>نسعد بتواصلكم معنا عبر وسائل التواصل الاجتماعي في أي وقت.</p>
          </div>

          <div className="box-2">
            <div className="loc-time-call">
              <i className="bi bi-geo-alt-fill"></i>
              <p>مصر، المنصوره , حي الجامعه قدام بوابة توشكا </p>
            </div>
            <div className="loc-time-call">
              <i className="bi bi-clock-fill"></i>
              <p>ساعات العمل: من الساعه ١٠ص الي ١٢ص</p>
            </div>
            <div className="loc-time-call">
              <i className="bi bi-telephone-forward-fill"></i>
              <p>اتصل بنا من خلال 20106447883+</p>
            </div>
          </div>

          <div className="box-3">
            <img src="/images/products/labtop-3.jpg" alt="لابتوب" />
            <img src="/images/products/phone-14.webp" alt="موبايل" />
            <img src="/images/category/category-3.jpg" alt="كرسي" />
            <img src="/images/special/s3.jpg" alt="تيشيرت" />
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
         تصميم وتطوير: <a href="https://github.com/NaderMahmoud77" target="blank">nader</a>
        جميع الحقوق محفوظة <b>&copy;</b>  ٢٠٢٥.

      </div>
    </div>
  );
};
