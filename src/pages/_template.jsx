import React from 'react';
import { RouteHandler, Link, State } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import Typography from 'typography';
//import 'css/page.css'

var typography = new Typography(
  {
    "baseFontSize": "18px",
    "baseLineHeight": "28.5px",
    "modularScales": [
        "diminished fourth"
    ],
    "headerFontFamily": "Roboto",
    "bodyFontFamily": "Roboto",
    "headerGray": 20,
    "headerGrayHue": 0,
    "bodyGray": 20,
    "bodyGrayHue": 0,
    "headerWeight": "100",
    "bodyWeight": 400,
    "boldWeight": 700,
    "fontFaces": [],
    "googleBodyFont": "Roboto",
    "showVerticalRhythmGrid": false,
    "bodyFont": "Roboto",
    "googleHeaderFont": "Roboto",
    "headerFont": "Roboto"
});

var fontSizeToMS = typography.fontSizeToMS;

module.exports = React.createClass({
  mixins: [State],

  render: function() {
    return (
      <div>
        <Container
          style={{
            maxWidth: 960,
            paddingTop: 0
          }}
        >
          <RouteHandler typography={typography} {...this.props}/>
        </Container>
      </div>
    );
  }
});
