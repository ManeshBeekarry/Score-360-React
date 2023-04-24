import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import HowToPlayScoring from '../components/how-to-play-scoring'
import HowToPlayStandings from '../components/how-to-play-standings'
import HowToPlayPredictionsDeadline from '../components/how-to-play-predictions-deadline'
import HowToPlayMiniLeague from '../components/how-to-play-mini-league'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Score 360</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Score 360" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-heading">
          <Navbar></Navbar>
        </div>
        <div className="home-hero">
          <div className="home-content">
            <div className="home-container01">
              <div className="home-container02">
                <h1 className="home-title">
                  <span>
                    Welcome to
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </h1>
                <h1 className="home-title1">Score 360!</h1>
              </div>
              <span className="home-caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-content1">
        <div className="home-div">
          <DangerousHTML
            html={`<meta name="viewport" content="width=device-width, initial-scale=1">
<meta content="text/html; charset=iso-8859-2" http-equiv="Content-Type">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<style>
.mySlides {display:none;}
</style>
<body>

<h2 class="w3-center">Automatic Slideshow</h2>

<div class="w3-content w3-section" style="max-width:500px">
  <img class="mySlides" src="https://media.istockphoto.com/id/466169394/photo/soccer-player-in-action.jpg?s=612x612&w=0&k=20&c=bs_v9JWOVxc8oaPSsudGNpHNRPD-GXej4d4a7hCnGpA=" style="width:100%">
  <img class="mySlides" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjNzHkm4iSLslKyEZDc_zmEcstOlBuc8yAQ&usqp=CAU" style="width:100%">
  <img class="mySlides" src="https://www.freevector.com/uploads/vector/preview/14243/FreeVector-Man-Playing-Football.jpg" style="width:100%">
</div>

<script>
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
</script>

</body>
`}
          ></DangerousHTML>
        </div>
      </div>
      <div className="home-stats">
        <div className="home-container03">
          <div className="home-container04">
            <div className="home-container05">
              <div className="home-container06">
                <div className="home-container07">
                  <div className="home-container08">
                    <span className="home-text02">6</span>
                  </div>
                </div>
                <div className="home-container09"></div>
              </div>
              <div className="home-container10">
                <span className="home-text03">Global Leagues</span>
              </div>
            </div>
          </div>
          <div className="home-container11">
            <div className="home-container12">
              <div className="home-container13">
                <div className="home-container14">
                  <div className="home-container15">
                    <span className="home-text04">600</span>
                  </div>
                </div>
                <div className="home-container16"></div>
              </div>
              <div className="home-container17">
                <span className="home-text05">Users</span>
              </div>
            </div>
          </div>
          <div className="home-container18">
            <div className="home-container19">
              <div className="home-container20">
                <div className="home-container21">
                  <div className="home-container22">
                    <span className="home-text06">600</span>
                  </div>
                </div>
                <div className="home-container23"></div>
              </div>
              <div className="home-container24">
                <span className="home-text07">Mini Leagues</span>
              </div>
            </div>
          </div>
          <div className="home-container25">
            <div className="home-container26">
              <div className="home-container27">
                <div className="home-container28">
                  <div className="home-container29">
                    <span className="home-text08">7200</span>
                  </div>
                </div>
                <div className="home-container30"></div>
              </div>
              <div className="home-container31">
                <span className="home-text09">Fixtures</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="HowToPlay" className="home-how-to-play">
        <div className="home-container32">
          <h1 className="home-heading1">How To Play</h1>
          <HowToPlayScoring rootClassName="rootClassName8"></HowToPlayScoring>
          <HowToPlayStandings rootClassName="how-to-play-standings-root-class-name"></HowToPlayStandings>
          <HowToPlayPredictionsDeadline rootClassName="how-to-play-predictions-deadline-root-class-name"></HowToPlayPredictionsDeadline>
          <HowToPlayMiniLeague rootClassName="how-to-play-mini-league-root-class-name"></HowToPlayMiniLeague>
        </div>
      </div>
      <div className="home-banner-container">
        <div className="home-banner">
          <div className="home-overlay">
            <span className="home-text10">
              <span>Challenge your friends </span>
              <span>
                on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Score 360</span>
              <br></br>
            </span>
            <div className="home-book-btn">
              <span className="home-create-join-mini-league">
                Create/Join Mini League
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container33">
        <div className="home-container34">
          <div className="home-banner1">
            <h1 className="home-text16">
              <span>Subscribe to our </span>
              <span>newsletter!</span>
              <br></br>
            </h1>
            <span className="home-text20">
              Join an ever-growing community of football predictors by
              subscribing to our regular newsletter and get all the latest news,
              information and much more to your inbox.
            </span>
            <div className="home-container35">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                className="home-textinput input"
              />
              <div className="home-book-btn1">
                <span className="home-create-join-mini-league1">SUBSCRIBE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container36">
          <div className="home-banner2">
            <h1 className="home-text21">
              <span>Get in touch</span>
              <br></br>
            </h1>
            <span className="home-text24">Email: info@score360.io</span>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="home-image"
        />
        <span className="home-text25">
          © 2021 teleportHQ, All Rights Reserved.
        </span>
        <div className="home-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon2">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon4">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </footer>
    </div>
  )
}

export default Home
