export default function GoogleMaps() {
  return (
    <div className="bg-primary w-full h-[550px] text-xl mb-10 tablet:h-[400px]">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=17+Island+street%2C+Deneysville%2C+1932&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[550px] tablet:h-[400px]"
          ></iframe>
          <a href="https://online-timer.me"></a>
          <br />
          <a href="https://textcaseconvert.com"></a>
          <br />
        </div>
      </div>
    </div>
  );
}
