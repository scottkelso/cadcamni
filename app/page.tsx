import Image from "next/image";
import logo from '../public/CadCamLogoFinal.png'

export default function Home() {

  return (
    <main className="">

      <div id="titlePage" className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* CadCamLogo */}
        <div className="relative flex place-items-center my-5 before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src='/CadCamLogoFinal.png'
            alt="CadCamNI Logo"
            width={1000}
            height={224}
            quality={100}
            priority
          />
        </div>

        {/* Title Image */}
        <div className="relative flex place-items-center my-5 px-10 before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/PcScreen.png"
            alt="PC Screen doing CAD"
            width={378}
            height={245}
          />
        </div>

        {/* Calls to action */}
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="#services"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Services{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Complete manufacturing solutions, including work holding, tooling, NC programs & part manufacturing.
            </p>
          </a>

          <a
            href="#mastercam"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Mastercam{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Mastercam is the most widely used NC software package in the world!
            </p>
          </a>

          <a
            href="#products"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Products{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Reverse screw work holding solutions supplier to engineering manufacturers.
            </p>
          </a>

          <a
            href="#contact"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Contact{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Get in touch for any other information and enquiries.
            </p>
          </a>
        </div>
      </div>

      <section id="services" className="flex flex-col items-center justify-between p-24 bg-white">
        <div className="">
          <h1 className="text-5xl font-extrabold text-zinc-900">Services</h1>
          <p className="text-lg text-gray-500 divide-b">Complete manufacturing solutions, including work holding, tooling, NC programs & part manufacturing.</p>
          <hr className="hr mb-5" />

          <div className="flex flex-row flex-wrap justify-content-center">
            <div className="basis-1/2">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/images/CadDrawing.gif"
                alt="Cad drawing of a part"
                width={350}
                height={260}
              />
            </div>

            <div className="basis-1/2">
              <ul className="list-disc pt-6">
                <li>Subcontract programming</li>
                <li>3, 4 and 5 axis milling machines</li>
                <li>Program prove-out and part manufacturing</li>
                <li>Complete fixture and work holding solutions</li>
                <li>Fixture design and manufacturing</li>
                <li>Sole distributer for 'compact reverse screws'</li>
                <li>Matrix plate design and manufacture</li>
                <li>Mastercam sales and support </li>
              </ul>
            </div>
          </div>

          <div className="">
            <ul className="buttons">
              <li>
                <a href="#contact">
                  <div className="btn blueButton btn-block">
                    <h2>CONTACT</h2>
                  </div>
                </a>
              </li>
              <li>
                <a href="#bio">
                <div className="blueButton btn-block">
                    <h2>BIOGRAPHY</h2>
                </div></a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="mastercam" className="flex flex-col items-center justify-between p-24 bg-zinc-700 text-white">
        <div className="">
          <a
            className=""
            href="https://www.mastercam.com/news/press-releases/mastercam-top-ranking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-5xl font-extrabold text-white-900">#1 in NC Programming<br /> WORLDWIDE</h1>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/NCchart.png"
              alt="CadCamNI Logo"
              width={850}
              height={224}
            />
          </a>
          <h3>Mastercam is the most widely used NC software package in the world!</h3>
          <p>- Reported by CIMdata, Inc. for the 21st year in a row</p>
          <h3>Mastercam has been delivering cutting-edge CAD/CAM software for over 30 years</h3>

          <a
            className=""
            href="https://engtechgroup.com/cad-cam-software/mastercam/"
            target="_new"
            rel="noopener noreferrer"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/mastercam.png"
              alt="Mastercam Logo"
              width={850}
              height={224}
            />
          </a>

          <div className="">
            <ul className="buttons">
              <li>
                <a href="https://engtechgroup.com/cad-cam-software/mastercam/mastercam-mill/" target="_new">
                  <div className="redButton btn-block">
                    <h2>MILLING</h2>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://engtechgroup.com/cad-cam-software/mastercam/mastercam-lathe/" target="_new">
                <div className="redButton btn-block">
                  <h2>TURNING</h2>
                </div></a>
              </li>
              <li>
                <a href="https://engtechgroup.com/cad-cam-software/mastercam/mastercam-design-cad/" target="_new">
                <div className="redButton btn-block">
                  <h2>DESIGN</h2>
                </div></a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="products" className="flex flex-col items-center justify-between p-24 bg-stone-200">
        <div className="">
          <h1 className="text-5xl font-extrabold text-grey-900">REVERSE SCREWS</h1>
          <a
            className=""
            href="https://www.linkedin.com/posts/cadcam-ni_precisiontools-precisionengineering-workholdingsolutions-activity-7047175638666854400-PjCA/"
            target="_new"
            rel="noopener noreferrer"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/reverse-screws.png"
              alt="Box of 25 M10 reverse screws with CadCamNI 3D-printed box"
              width={850}
              height={224}
            />
          
          </a>
          <p>Reverse screw work holding solutions supplier to aerospace, pharmaceutical and general precision engineering manufacturers. Founded by Design Engineer Kenneth Kelso. Based in Northern Ireland, supplying UK and Ireland since 2014.</p>

          <div className="">
            <ul className="buttons">
              <li>
                <a href="assets\CCNI Reverse Screw Catalogue 2023.pdf" target="_new">
                <div className="blueButton btn-block">
                  <h2>CATALOGUE</h2>
                </div>
                </a>
              </li>
              <li>
                <a href="assets\CCNI Reverse Screws 2023.pdf" target="_new">
                <div className="blueButton btn-block">
                  <h2>SPECIFICATIONS</h2>
                </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="bio" className="flex flex-col items-center justify-between p-24 bg-indigo-200">
        <div className="">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/headshot5.png"
            alt="Kenneth Kelso with arms folded smiling"
            width={850}
            height={224}
          />

          <div>
            <h1 className="text-5xl font-extrabold text-grey-900">KENNETH KELSO</h1>
            <br/>
            <h3>Graduated from Ulster University Jordanstown 1995 with a degree in Mechanical Engineering.  Over 20 years experience in CNC programming for the automotive, aerospace and general engineering sectors.</h3>
            <br/><br/>
            <p>Smiths Engineering is CadCamNI's manufacturing partner, where concepts & final designs can be manufactured.</p>
          </div>

          <div className="">
            <ul className="buttons">
              <li>
                <a href="https://uk.bombardier.com" target="_blank">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/bombardierLogo.png"
                    alt="Bombardier Logo"
                    width={150}
                    height={80}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.smiths-engineering.com" target="_blank">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/smithsLogo.png"
                    alt="Smiths Engineering Logo"
                    width={150}
                    height={80}
                  />
                </a>
              </li>
              <li>
                <a href="https://kaneprecisionengineering.com" target="_blank">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/jwkaneLogo.png"
                    alt="JWK Engineering Logo"
                    width={150}
                    height={80}
                  />
                </a>
              </li>
              <li>
                <a href="https://magellan.aero" target="_blank">
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/Magellan_Aerospace_Logo.png"
                    alt="Magellan Aerospace Logo"
                    width={150}
                    height={80}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="flex flex-col items-center justify-between p-24 bg-zinc-700 text-white">
        <div className="">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/CadCamLogoBlockColour.png"
            alt="CadCamNI Logo"
            width={850}
            height={224}
          />

          <div id="contactUs" className="whitetxt center">
            <div className="">
              <h1>Contact</h1>
              <h3>t:  07902521108</h3>
              <h3>e:  kenneth.kelso@cadcamni.co.uk</h3>
            </div>
            <div className="box">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/ni.png"
                alt="Silouette of Northern Ireland"
                width={100}
                height={100}
              />
                <img src="images/ni.png" alt="" width="40%"/>
            </div>
          </div>
        </div>
      </section>

      <section id="copyright" className="flex flex-col items-center justify-between p-5 bg-blue-500 text-white">
        <p>Copyright 2024 by CadCamNI. All Rights Reserved. &copy;</p>
      </section>

    </main>
  );
}
