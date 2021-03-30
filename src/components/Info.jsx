const Info = ({ logbook }) => {
  return (
    <div className="info">
      <p>
        Drag and Drop or Upload your Foreflight Logbook as a CSV file. Once
        fully uploaded, each flight is processed into a geoJson file. This file
        can be exported from this site and imported to Foreflight to see the
        file as a custom content layer.
      </p>
    </div>
  );
};

export default Info;
