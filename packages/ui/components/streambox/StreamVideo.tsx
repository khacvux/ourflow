function StreamVideo() {
  return (
    <div className=" flex h-[735px] w-full items-center justify-center overflow-hidden bg-black">
      <video
        // src="https://video.xx.fbcdn.net/v/t42.1790-2/10000000_1261966731412717_6825184229823409568_n.mp4?_nc_cat=110&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjQ4OSwicmxhIjo0MDk2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=HzrP7zmrG0IAX-l52kK&_nc_rml=0&_nc_ht=scontent.fdad1-3.fna&oh=00_AfCByuO_TpCev_wwd2ug2rP2at0pC54f-NQp4pfBr03xUA&oe=6407D4CF"

        className="h-full w-full bg-black "
        autoPlay
        controls

      />
    </div>
  );
}

export default StreamVideo;

