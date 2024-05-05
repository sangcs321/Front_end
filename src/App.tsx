import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header id="header">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="header_top">
                <div className="header_top_left">
                  <ul className="top_nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="pages/contact.html">Contact</a></li>
                  </ul>
                </div>
                <div className="header_top_right">
                  <p>Friday, December 05, 2045</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="header_bottom">
                <div className="logo_area"><a href="index.html" className="logo"><img src="images/logo.jpg" alt=""/></a>
                </div>
                <div className="add_banner"><a href="#"><img src="images/addbanner_728x90_V1.jpg" alt=""/></a></div>
              </div>
            </div>
          </div>
        </header>
        <section id="navArea">
          <nav className="navbar navbar-inverse" role="navigation">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                      aria-expanded="false" aria-controls="navbar"><span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav main_nav">
                <li className="active"><a href="index.html"><span className="fa fa-home desktop-home"></span><span
                    className="mobile-show">Home</span></a></li>
                <li><a href="#">Technology</a></li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                            aria-expanded="false">Mobile</a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Android</a></li>
                    <li><a href="#">Samsung</a></li>
                    <li><a href="#">Nokia</a></li>
                    <li><a href="#">Walton Mobile</a></li>
                    <li><a href="#">Sympony</a></li>
                  </ul>
                </li>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Tablets</a></li>
                <li><a href="pages/contact.html">Contact Us</a></li>
                <li><a href="pages/404.html">404 Page</a></li>
              </ul>
            </div>
          </nav>
        </section>
        <section id="newsSection">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="latest_newsarea"><span>Latest News</span>
                <ul id="ticker01" className="news_sticker">
                  <li><a href="#"><img src="images/news_thumbnail3.jpg" alt=""/>My First News Item</a></li>
                  <li><a href="#"><img src="images/news_thumbnail3.jpg" alt=""/>My Second News Item</a></li>
                  <li><a href="#"><img src="images/news_thumbnail3.jpg" alt=""/>My Third News Item</a></li>
                  <li><a href="#"><img src="images/news_thumbnail3.jpg" alt=""/>My Four News Item</a></li>
                  <li><a href="#"><img src="images/news_thumbnail3.jpg" alt=""/>My Five News Item</a></li>
                  <li><a href="#"><img src="images/news_thumbnail3.jpg" alt=""/>My Six News Item</a></li>
                  <li><a href="#"><img src="images/news_thumbnail3.jpg" alt=""/>My Seven News Item</a></li>
                  <li><a href="#"><img src="images/news_thumbnail3.jpg" alt=""/>My Eight News Item</a></li>
                  <li><a href="#"><img src="images/news_thumbnail2.jpg" alt=""/>My Nine News Item</a></li>
                </ul>
                <div className="social_area">
                  <ul className="social_nav">
                    <li className="facebook"><a href="#"></a></li>
                    <li className="twitter"><a href="#"></a></li>
                    <li className="flickr"><a href="#"></a></li>
                    <li className="pinterest"><a href="#"></a></li>
                    <li className="googleplus"><a href="#"></a></li>
                    <li className="vimeo"><a href="#"></a></li>
                    <li className="youtube"><a href="#"></a></li>
                    <li className="mail"><a href="#"></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="sliderSection">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="slick_slider">
                <div className="single_iteam"><a href="pages/single_page.html"> <img src="images/slider_img4.jpg"
                                                                                     alt=""/></a>
                  <div className="slider_article">
                    <h2><a className="slider_tittle" href="pages/single_page.html">Fusce eu nulla semper porttitor felis
                      sit amet</a></h2>
                    <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl
                      quis mauris. Suspendisse a pharetra urna. Morbi dui...</p>
                  </div>
                </div>
                <div className="single_iteam"><a href="pages/single_page.html"> <img src="images/slider_img2.jpg"
                                                                                     alt=""/></a>
                  <div className="slider_article">
                    <h2><a className="slider_tittle" href="pages/single_page.html">Fusce eu nulla semper porttitor felis
                      sit amet</a></h2>
                    <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl
                      quis mauris. Suspendisse a pharetra urna. Morbi dui...</p>
                  </div>
                </div>
                <div className="single_iteam"><a href="pages/single_page.html"> <img src="images/slider_img3.jpg"
                                                                                     alt=""/></a>
                  <div className="slider_article">
                    <h2><a className="slider_tittle" href="pages/single_page.html">Fusce eu nulla semper porttitor felis
                      sit amet</a></h2>
                    <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl
                      quis mauris. Suspendisse a pharetra urna. Morbi dui...</p>
                  </div>
                </div>
                <div className="single_iteam"><a href="pages/single_page.html"> <img src="images/slider_img1.jpg"
                                                                                     alt=""/></a>
                  <div className="slider_article">
                    <h2><a className="slider_tittle" href="pages/single_page.html">Fusce eu nulla semper porttitor felis
                      sit amet</a></h2>
                    <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl
                      quis mauris. Suspendisse a pharetra urna. Morbi dui...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="latest_post">
                <h2><span>Latest post</span></h2>
                <div className="latest_post_container">
                  <div id="prev-button"><i className="fa fa-chevron-up"></i></div>
                  <ul className="latest_postnav">
                    <li>
                      <div className="media"><a href="pages/single_page.html" className="media-left"> <img alt=""
                                                                                                           src="images/post_img1.jpg"/>
                      </a>
                        <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                          malesuada diam eget turpis varius 1</a></div>
                      </div>
                    </li>
                    <li>
                      <div className="media"><a href="pages/single_page.html" className="media-left"> <img alt=""
                                                                                                           src="images/post_img1.jpg"/>
                      </a>
                        <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                          malesuada diam eget turpis varius 2</a></div>
                      </div>
                    </li>
                    <li>
                      <div className="media"><a href="pages/single_page.html" className="media-left"> <img alt=""
                                                                                                           src="images/post_img1.jpg"/>
                      </a>
                        <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                          malesuada diam eget turpis varius 3</a></div>
                      </div>
                    </li>
                    <li>
                      <div className="media"><a href="pages/single_page.html" className="media-left"> <img alt=""
                                                                                                           src="images/post_img1.jpg"/>
                      </a>
                        <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                          malesuada diam eget turpis varius 4</a></div>
                      </div>
                    </li>
                    <li>
                      <div className="media"><a href="pages/single_page.html" className="media-left"> <img alt=""
                                                                                                           src="images/post_img1.jpg"/>
                      </a>
                        <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                          malesuada diam eget turpis varius 2</a></div>
                      </div>
                    </li>
                  </ul>
                  <div id="next-button"><i className="fa  fa-chevron-down"></i></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contentSection">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="left_content">
                <div className="single_post_content">
                  <h2><span>Business</span></h2>
                  <div className="single_post_content_left">
                    <ul className="business_catgnav  wow fadeInDown">
                      <li>
                        <figure className="bsbig_fig"><a href="pages/single_page.html" className="featured_img"> <img
                            alt="" src="images/featured_img1.jpg"/> <span className="overlay"></span> </a>
                          <figcaption><a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a>
                          </figcaption>
                          <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla
                            nisl quis mauris. Suspendisse a phare...</p>
                        </figure>
                      </li>
                    </ul>
                  </div>
                  <div className="single_post_content_right">
                    <ul className="spost_nav">
                      <li>
                        <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                          <img alt="" src="images/post_img1.jpg"/> </a>
                          <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                            malesuada diam eget turpis varius 1</a></div>
                        </div>
                      </li>
                      <li>
                        <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                          <img alt="" src="images/post_img2.jpg"/> </a>
                          <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                            malesuada diam eget turpis varius 2</a></div>
                        </div>
                      </li>
                      <li>
                        <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                          <img alt="" src="images/post_img1.jpg"/> </a>
                          <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                            malesuada diam eget turpis varius 3</a></div>
                        </div>
                      </li>
                      <li>
                        <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                          <img alt="" src="images/post_img2.jpg"/> </a>
                          <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                            malesuada diam eget turpis varius 4</a></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="fashion_technology_area">
                  <div className="fashion">
                    <div className="single_post_content">
                      <h2><span>Fashion</span></h2>
                      <ul className="business_catgnav wow fadeInDown">
                        <li>
                          <figure className="bsbig_fig"><a href="pages/single_page.html" className="featured_img"> <img
                              alt="" src="images/featured_img2.jpg"/> <span className="overlay"></span> </a>
                            <figcaption><a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare
                              mauris</a></figcaption>
                            <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet
                              nulla nisl quis mauris. Suspendisse a phare...</p>
                          </figure>
                        </li>
                      </ul>
                      <ul className="spost_nav">
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img1.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 1</a></div>
                          </div>
                        </li>
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img2.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 2</a></div>
                          </div>
                        </li>
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img1.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 3</a></div>
                          </div>
                        </li>
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img2.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 4</a></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="technology">
                    <div className="single_post_content">
                      <h2><span>Technology</span></h2>
                      <ul className="business_catgnav">
                        <li>
                          <figure className="bsbig_fig wow fadeInDown"><a href="pages/single_page.html"
                                                                          className="featured_img"> <img alt=""
                                                                                                         src="images/featured_img3.jpg"/>
                            <span className="overlay"></span> </a>
                            <figcaption><a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare
                              mauris</a></figcaption>
                            <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet
                              nulla nisl quis mauris. Suspendisse a phare...</p>
                          </figure>
                        </li>
                      </ul>
                      <ul className="spost_nav">
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img1.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 1</a></div>
                          </div>
                        </li>
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img2.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 2</a></div>
                          </div>
                        </li>
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img1.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 3</a></div>
                          </div>
                        </li>
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img2.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 4</a></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single_post_content">
                  <h2><span>Photography</span></h2>
                  <ul className="photograph_nav  wow fadeInDown">
                    <li>
                      <div className="photo_grid">
                        <figure className="effect-layla"><a className="fancybox-buttons" data-fancybox-group="button"
                                                            href="images/photograph_img2.jpg"
                                                            title="Photography Ttile 1"> <img
                            src="images/photograph_img2.jpg" alt=""/></a></figure>
                      </div>
                    </li>
                    <li>
                      <div className="photo_grid">
                        <figure className="effect-layla"><a className="fancybox-buttons" data-fancybox-group="button"
                                                            href="images/photograph_img3.jpg"
                                                            title="Photography Ttile 2"> <img
                            src="images/photograph_img3.jpg" alt=""/> </a></figure>
                      </div>
                    </li>
                    <li>
                      <div className="photo_grid">
                        <figure className="effect-layla"><a className="fancybox-buttons" data-fancybox-group="button"
                                                            href="images/photograph_img4.jpg"
                                                            title="Photography Ttile 3"> <img
                            src="images/photograph_img4.jpg" alt=""/> </a></figure>
                      </div>
                    </li>
                    <li>
                      <div className="photo_grid">
                        <figure className="effect-layla"><a className="fancybox-buttons" data-fancybox-group="button"
                                                            href="images/photograph_img4.jpg"
                                                            title="Photography Ttile 4"> <img
                            src="images/photograph_img4.jpg" alt=""/> </a></figure>
                      </div>
                    </li>
                    <li>
                      <div className="photo_grid">
                        <figure className="effect-layla"><a className="fancybox-buttons" data-fancybox-group="button"
                                                            href="images/photograph_img2.jpg"
                                                            title="Photography Ttile 5"> <img
                            src="images/photograph_img2.jpg" alt=""/> </a></figure>
                      </div>
                    </li>
                    <li>
                      <div className="photo_grid">
                        <figure className="effect-layla"><a className="fancybox-buttons" data-fancybox-group="button"
                                                            href="images/photograph_img3.jpg"
                                                            title="Photography Ttile 6"> <img
                            src="images/photograph_img3.jpg" alt=""/> </a></figure>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="single_post_content">
                  <h2><span>Games</span></h2>
                  <div className="single_post_content_left">
                    <ul className="business_catgnav">
                      <li>
                        <figure className="bsbig_fig  wow fadeInDown"><a className="featured_img"
                                                                         href="pages/single_page.html"> <img
                            src="images/featured_img1.jpg" alt=""/> <span className="overlay"></span> </a>
                          <figcaption><a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a>
                          </figcaption>
                          <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla
                            nisl quis mauris. Suspendisse a phare...</p>
                        </figure>
                      </li>
                    </ul>
                  </div>
                  <div className="single_post_content_right">
                    <ul className="spost_nav">
                      <li>
                        <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                          <img alt="" src="images/post_img1.jpg"/> </a>
                          <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                            malesuada diam eget turpis varius 1</a></div>
                        </div>
                      </li>
                      <li>
                        <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                          <img alt="" src="images/post_img2.jpg"/> </a>
                          <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                            malesuada diam eget turpis varius 2</a></div>
                        </div>
                      </li>
                      <li>
                        <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                          <img alt="" src="images/post_img1.jpg"/> </a>
                          <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                            malesuada diam eget turpis varius 3</a></div>
                        </div>
                      </li>
                      <li>
                        <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                          <img alt="" src="images/post_img2.jpg"/> </a>
                          <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                            malesuada diam eget turpis varius 4</a></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <aside className="right_content">
                <div className="single_sidebar">
                  <h2><span>Popular Post</span></h2>
                  <ul className="spost_nav">
                    <li>
                      <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                        <img alt="" src="images/post_img1.jpg"/> </a>
                        <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                          malesuada diam eget turpis varius 1</a></div>
                      </div>
                    </li>
                    <li>
                      <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                        <img alt="" src="images/post_img2.jpg"/> </a>
                        <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                          malesuada diam eget turpis varius 2</a></div>
                      </div>
                    </li>
                    <li>
                      <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                        <img alt="" src="images/post_img1.jpg"/> </a>
                        <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                          malesuada diam eget turpis varius 3</a></div>
                      </div>
                    </li>
                    <li>
                      <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                        <img alt="" src="images/post_img2.jpg"/> </a>
                        <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                          malesuada diam eget turpis varius 4</a></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="single_sidebar">
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#category" aria-controls="home" role="tab"
                                                                  data-toggle="tab">Category</a></li>
                    <li role="presentation"><a href="#video" aria-controls="profile" role="tab"
                                               data-toggle="tab">Video</a></li>
                    <li role="presentation"><a href="#comments" aria-controls="messages" role="tab"
                                               data-toggle="tab">Comments</a></li>
                  </ul>
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="category">
                      <ul>
                        <li className="cat-item"><a href="#">Sports</a></li>
                        <li className="cat-item"><a href="#">Fashion</a></li>
                        <li className="cat-item"><a href="#">Business</a></li>
                        <li className="cat-item"><a href="#">Technology</a></li>
                        <li className="cat-item"><a href="#">Games</a></li>
                        <li className="cat-item"><a href="#">Life &amp; Style</a></li>
                        <li className="cat-item"><a href="#">Photography</a></li>
                      </ul>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="video">
                      <div className="vide_area">
                        <iframe width="100%" height="250"
                                src="http://www.youtube.com/embed/h5QWbURNEpA?feature=player_detailpage" frameBorder="0"
                                allowFullScreen></iframe>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="comments">
                      <ul className="spost_nav">
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img1.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 1</a></div>
                          </div>
                        </li>
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img2.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 2</a></div>
                          </div>
                        </li>
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img1.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 3</a></div>
                          </div>
                        </li>
                        <li>
                          <div className="media wow fadeInDown"><a href="pages/single_page.html" className="media-left">
                            <img alt="" src="images/post_img2.jpg"/> </a>
                            <div className="media-body"><a href="pages/single_page.html" className="catg_title"> Aliquam
                              malesuada diam eget turpis varius 4</a></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single_sidebar wow fadeInDown">
                  <h2><span>Sponsor</span></h2>
                  <a className="sideAdd" href="#"><img src="images/add_img.jpg" alt=""/></a></div>
                <div className="single_sidebar wow fadeInDown">
                  <h2><span>Category Archive</span></h2>
                  <select className="catgArchive">
                    <option>Select Category</option>
                    <option>Life styles</option>
                    <option>Sports</option>
                    <option>Technology</option>
                    <option>Treads</option>
                  </select>
                </div>
                <div className="single_sidebar wow fadeInDown">
                  <h2><span>Links</span></h2>
                  <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Rss Feed</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Life &amp; Style</a></li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <footer id="footer">
          <div className="footer_top">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="footer_widget wow fadeInLeftBig">
                  <h2>Flickr Images</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="footer_widget wow fadeInDown">
                  <h2>Tag</h2>
                  <ul className="tag_nav">
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Fashion</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Life &amp; Style</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Photo</a></li>
                    <li><a href="#">Slider</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="footer_widget wow fadeInRightBig">
                  <h2>Contact</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <address>
                    Perfect News,1238 S . 123 St.Suite 25 Town City 3333,USA Phone: 123-326-789 Fax: 123-546-567
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <p className="copyright">Copyright &copy; 2045 <a href="index.html">NewsFeed</a></p>
            <p className="developer">Developed By Wpfreeware</p>
          </div>
        </footer>
      </div>
  );
}

export default App;
