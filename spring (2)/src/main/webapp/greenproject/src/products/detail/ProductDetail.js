import Image from "../../nillkin-case-1.jpg";
import RelatedProduct from "./RelatedProduct";
import Ratings from "react-ratings-declarative";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../template/ScrollToTopOnMount";
import Review from "./Review";


const iconPath =
  "M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z";

  // https://mingoogle.tistory.com/9 를 보시면 이게 무었인지 대략 이해가능! 간단하게 svg 의 파일 경로라고 생각하면 편함

  function BannerIncidator(props) {
    return (
      <button
        type="button"
        data-bs-target="#bannerIndicators"
        data-bs-slide-to={props.index}  
        className={props.active ? "active" : ""}
        aria-current={props.active}
      />
    );
  }

  function BannerImage(props) {
    return (
      <div
        className={"carousel-item " + (props.active ? "active" : "")}
        data-interval="false"
      >
        <div
          className="ratio"
          style={{ "--bs-aspect-ratio": "100%", maxHeight: "565 px" }}
        >
          <img
            className="d-block w-100 h-100 bg-dark cover"
            alt=""
            src={props.image}
          />
        </div>
      </div>
    );
  }
 

function ProductDetail() {
  // 일단 만드는거 데이터를 어떻게 얻어오냐는 우리가 해결해야할 문제..



  function changeRating(newRating) {}

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount/>
      <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/products">
              {/* https://getbootstrap.com/docs/5.0/helpers/colored-links/ */}
              모든 제품군
            </Link>
          </li>
          <li className="breadcrumb-item">
            <a className="text-decoration-none link-secondary" href="!#">
              케이스 &amp; 커버
              {/* 	
              앰퍼샌드(Ampersand) 라 불리며 & 문자를 뜻함.
              AND 라는 의미를 포함하여 javascript나 java 등에서 AND 연산 기호로 사용되기도 함.
              & 문자를 화면에 출력하고 싶으면 &amp; 를 사용. */}
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            iPhone X cover
          </li>
        </ol>
      </nav>
      <div className="row mb-4">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <div
                  id="bannerIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
              <div className="carousel-indicators">
                <BannerIncidator index="0" active={true} />
                <BannerIncidator index="1" />
                <BannerIncidator index="2" />
              </div>
              <div className="carousel-inner">
                <BannerImage image={Image} active={true} />
                <BannerImage image={Image} />
                <BannerImage image={Image} />
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">iPhone X cover</h2>
            <h4 className="text-muted mb-4">10,000원</h4>

            <div className="row g-3 mb-4">
              <div className="col">
                <button className="btn btn-outline-dark py-2 w-100">
                  장바구니에 넣기
                </button>
              </div>
              <div className="col">
                <button className="btn btn-dark py-2 w-100">지금 사러가기</button>
              </div>
            </div>

            <h4 className="mb-0">Details</h4>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">제품코드</dt>
              <dd className="col-sm-8 mb-3">C0001</dd>

              <dt className="col-sm-4">카테고리</dt>
              <dd className="col-sm-8 mb-3">Cases &amp; Covers</dd>

              <dt className="col-sm-4">브랜드</dt>
              <dd className="col-sm-8 mb-3">iPhone X</dd>

              <dt className="col-sm-4">제조사</dt>
              <dd className="col-sm-8 mb-3">어딘가</dd>

              <dt className="col-sm-4">색상</dt>
              <dd className="col-sm-8 mb-3">Red, Green, Blue, Pink</dd>

              <dt className="col-sm-4">상태</dt>
              <dd className="col-sm-8 mb-3">재고 있음</dd>

              <dt className="col-sm-4">별점</dt>
              <dd className="col-sm-8 mb-3">
                <Ratings
                  
                  rating={4}
                  widgetRatedColors="rgb(253, 204, 13)"
                  changeRating={changeRating}
                  widgetSpacings="2px"
                >
                  {Array.from({ length: 5 }, (_, i) => {
                    return (
                      <Ratings.Widget
                        key={i}
                        widgetDimension="20px"
                        svgIconViewBox="0 0 19 20"
                        svgIconPath={iconPath}
                        widgetHoverColor="rgb(253, 204, 13)"
                      />
                    );
                  })}
                </Ratings>
                {/* https://www.npmjs.com/package/react-ratings-declarative 참고하셈 더 좋은 별점 npm있으면 찾아보기 */}
              </dd>
            </dl>

            <h4 className="mb-0">제품 설명</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>
                제품에 대한 설명
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md 12 mb-4">
          
          <hr />
          <Review></Review>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-4">
          <hr />
          <h4 className="text-muted my-4">Related products</h4>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            {Array.from({ length: 4 }, (_, i) => {
              return (
                <RelatedProduct key={i} percentOff={i % 2 === 0 ? 15 : null} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;