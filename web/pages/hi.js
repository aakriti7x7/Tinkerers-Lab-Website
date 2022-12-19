import Head from 'next/head'
import styles from '../styles/Landing.module.css'
import Image from 'next/image'

const Landing = () => {



    return (
        <div>
            <Head>

                <link href="" rel="icon" />
                <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

                <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
                <link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.css"
                    rel="stylesheet"
                />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
                <script
                    type="text/javascript"
                    src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.1/mdb.min.js"
                ></script>
            </Head>
            <section id={styles.topbar} class="d-flex align-items-center">
                
            </section >

            <header id={styles.header} class="d-flex align-items-center">
                <div class="container d-flex align-items-center justify-content-between">

                    <h1 class="logo"><a href="index.html">Day</a></h1>


                    <nav id="navbar" class={styles.navbar}>
                        <ul>
                            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#services">Services</a></li>
                            <li><a class="nav-link scrollto" href="#pricing">Events</a></li>
                            <li><a class="nav-link scrollto" href="#team">Team</a></li>
                            <li><a class="nav-link scrollto" href="#gallery">Gallery</a></li>

                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i class={`bi bi-list ${styles.mobilenavtoggle}`}></i>
                    </nav>

                </div>
            </header>
            <section id={styles.hero} class="d-flex align-items-center">
                <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
                    <h1>Welcome to TINKERERS' LAB</h1>
                    <h1>IIT PATNA</h1>
                    <a href="#about" class={`${styles.btngetstarted} scrollto`}>Get Started</a>
                </div>
            </section>

            <main id="main">

                <section id="about" class="about">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-6 order-1 order-lg-2 mt-5" data-aos="fade-left">
                                <Image src='/portfolio-2.jpg' width={600} height={400} />


                            </div>
                            <div class="col-lg-6 order-1 order-lg-2 mt-5" data-aos="fade-left">
                                <Image src='/hero-bg.jpg' width={600} height={400} />


                            </div>
                            <div class="col-lg-6 order-1 order-lg-2 mt-5" data-aos="fade-left">
                                <Image src='/about.jpg' width={600} height={400} />



                            </div>

                            <div class="col-lg-6 order-1 order-lg-2 mt-5 ml-5" >
                                <Image src='/cta-bg.jpg' width={600} height={400} className='ml-5' />


                            </div>
                            <div class={styles.sectiontitle}>
                                <span className='mt-5'>Previous Events</span>
                                <h2 className='mt-5'>Previous Events</h2>
                                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="why-us" class="why-us">
                    <div class="container">

                        <div class="row">

                            <div class="col-lg-4 mt-5" data-aos="fade-up">
                                <div class="box">
                                    <span>01</span>
                                    <h4>FREEUPSER MIND</h4>
                                    <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                                </div>
                            </div>

                            <div class="col-lg-4 mt-5" data-aos="fade-up">
                                <div class="box">
                                    <span>02</span>
                                    <h4>ROB HACKATHON</h4>
                                    <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                                </div>
                            </div>



                            <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                                <div class="box mt-5">
                                    <span>03</span>
                                    <h4>CADENCE DESIGN</h4>
                                    <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="clients" class="clients">
                    <div class="container" data-aos="zoom-in">

                        <div class="row d-flex align-items-center">

                            <div class="col-lg-2 col-md-4 col-6">
                                <Image src='/portfolio-3.jpg' width={200} height={100} />

                            </div>

                            <div class="col-lg-2 col-md-4 col-6 mt-3">
                                <Image src='/portfolio-4.jpg' width={200} height={100} />

                            </div>


                            <div class="col-lg-2 col-md-4 col-6">
                                <Image src='/portfolio-5.jpg' width={200} height={100} />

                            </div>

                            <div class="col-lg-2 col-md-4 col-6">
                                <Image src='/portfolio-6.jpg' width={200} height={100} />

                            </div>

                            <div class="col-lg-2 col-md-4 col-6">
                                <Image src='/portfolio-7.jpg' width={200} height={100} />

                            </div>

                            <div class="col-lg-2 col-md-4 col-6">
                                <Image src='/portfolio-8.jpg' width={200} height={100} />

                            </div>

                        </div>

                    </div>
                </section>
                <section id="services" class="services mt-5">
                    <div class="container">

                        <div class={styles.sectiontitle}>
                            <span>Services</span>
                            <h2>Services</h2>
                            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                                <div class="icon-box">
                                    <div class="icon"><i class="bx bxl-dribbble"></i></div>
                                    <h4><a href="">Robocon</a></h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="150">
                                <div class="icon-box">
                                    <div class="icon"><i class="bx bx-file"></i></div>
                                    <h4><a href="">E-yantra</a></h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 " data-aos="fade-up" data-aos-delay="300">
                                <div class="icon-box">
                                    <div class="icon"><i class="bx bx-tachometer"></i></div>
                                    <h4><a href="">Students</a></h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>





                        </div>

                    </div>
                </section>

                <div class={styles.sectiontitle} style={{ marginTop: "5vw" }}>
                    <span>Gallery</span>
                    <h2>Gallery</h2>
                </div>

                   
                        <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
                            <div class="carousel-indicators">
                                <button
                                    type="button"
                                    data-mdb-target="#carouselBasicExample"
                                    data-mdb-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-mdb-target="#carouselBasicExample"
                                    data-mdb-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-mdb-target="#carouselBasicExample"
                                    data-mdb-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100" alt="Sunset Over the City" />
                                    <div class="carousel-caption d-none d-md-block">

                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="Canyon at Nigh" />
                                    <div class="carousel-caption d-none d-md-block">

                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100" alt="Cliff Above a Stormy Sea" />
                                    <div class="carousel-caption d-none d-md-block">

                                    </div>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>



                    
               

                <section id="pricing" class="pricing mt-5">
                    <div class="container">

                        <div class={styles.sectiontitle}>
                            <span>Upcoming Events</span>
                            <h2>Upcoming Events</h2>
                            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                        </div>

                        <div class="row">

                            <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="150">
                                <div class="box featured">
                                    <h3>Drona-wars</h3>
                                    <h4><sup></sup>25<span> /December</span></h4>
                                    <ul>
                                        <li><h2>Teams</h2></li>
                                        <li>IIT GUWAHATI</li>
                                        <li>IIT KANPUR</li>
                                        <li>IIT DELHI</li>
                                        <li>IIT BOMBAY</li>
                                    </ul>
                                    <div class="btn-wrap">
                                        <a href="#" class="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="zoom-in">
                                <div class="box featured">
                                    <h3>Electro-wars</h3>
                                    <h4><sup></sup>27<span> /December</span></h4>
                                    <ul>
                                        <li> <h2>Teams</h2></li>
                                        <li>IIT GUWAHATI</li>
                                        <li>IIT KANPUR</li>
                                        <li>IIT DELHI</li>
                                        <li>IIT BOMBAY</li>
                                    </ul>
                                    <div class="btn-wrap">
                                        <a href="#" class="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                                <div class="box featured">
                                    <h3>Robowar</h3>
                                    <h4><sup></sup>29<span> /December</span></h4>
                                    <ul>
                                        <li><h2>  Teams</h2></li>
                                        <li>IIT GUWAHATI</li>
                                        <li>IIT KANPUR</li>
                                        <li>IIT DELHI</li>
                                        <li>IIT BOMBAY</li>
                                    </ul>
                                    <div class="btn-wrap">
                                        <a href="#" class="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="team" class="team mt-5">
                    <div class="container">

                        <div class={styles.sectiontitle} style={{ marginBottom: "2vw" }}>
                            <span> Our Team</span>
                            <h2> Our Team</h2>
                            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                <div class="member">
                                    <Image src='/team-2.jpg' width={200} height={200} />

                                    <h4>Walter White</h4>
                                    <span>Overall COD</span>
                                    <p>
                                        Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                                    </p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                <div class="member">
                                    <Image src='/team-1.jpg' width={200} height={200} />
                                    <h4>Sarah Jhinson</h4>
                                    <span>COD</span>
                                    <p>
                                        Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                                    </p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                <div class="member">
                                    <Image src='/team-3.jpg' width={200} height={200} />

                                    <h4>William Anderson</h4>
                                    <span>SUBCOD</span>
                                    <p>
                                        Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                                    </p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                <div class="member">
                                    <Image src='/team-1.jpg' width={200} height={200} />

                                    <h4>Walter White</h4>
                                    <span>VOLUNTEER</span>
                                    <p>
                                        Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                                    </p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                <div class="member">
                                    <Image src='/team-2.jpg' width={200} height={200} />
                                    <h4>Sarah Jhinson</h4>
                                    <span>VOLUNTEER</span>
                                    <p>
                                        Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                                    </p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                <div class="member">
                                    <Image src={'/team-3.jpg'} width={200} height={200} />

                                    <h4>William Anderson</h4>
                                    <span>VOLUNTEER</span>
                                    <p>
                                        Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                                    </p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="contact" class="contact mt-5">
                    <div class="container">

                        <div class={styles.sectiontitle} style={{ marginBottom: "2vw" }}>
                            <span>Contact</span>
                            <h2>Contact</h2>
                            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                        </div>

                        <div class="row" data-aos="fade-up">
                            <div class="col-lg-6">
                                <div class="info-box mb-4">
                                    <i class="bx bx-map"></i>
                                    <h3>Our Address</h3>
                                    <p>A107 Lakshmi Street, IIT PATNA, INDIA</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 ">
                                <div class="info-box  mb-4">
                                    <i class="bx bx-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>contact@example.com</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 ">
                                <div class="info-box  mb-4">
                                    <i class="bx bx-phone-call"></i>
                                    <h3>Call Us</h3>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </div>

                        </div>

                        <div class="row" data-aos="fade-up ">

                            <div class="col-lg-6 mt-5">
                                <iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1800.0405307804679!2d84.84989243869263!3d25.535676614578442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna%20(IIT%20Patna)!5e0!3m2!1sen!2sin!4v1671431991547!5m2!1sen!2sin" frameborder="0" style={{ border: "0", width: "100%", height: "384px" }} allowfullscreen></iframe>
                            </div>

                            <div class="col-lg-6 mt-5 mb-5">
                                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div class="form-group mt-3">
                                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div class="my-3">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div class="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
            <footer class="bg-dark text-center text-white">
                <div class="container p-4 pb-0">
                    <section class="mb-4">
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-facebook-f"></i
                        ></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-twitter"></i
                        ></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-google"></i
                        ></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-instagram"></i
                        ></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-github"></i
                        ></a>
                    </section>
                </div>

                <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2022 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/">Tinkerers' Lab IIT patna</a>
                </div>
            </footer>


        </div>);
}

export default Landing;





