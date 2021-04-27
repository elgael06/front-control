import React, { Component } from 'react'
import Quagga from 'quagga';
import BarcodeReader from 'react-barcode-reader';

class Scanner extends Component {
  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 640,
            height: 280,
            // facingMode: 'auto', // or user
          },
        },
        constraints: {
          facingMode: "environment",
          // deviceId: "7832475934759384534"
        },
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        numOfWorkers: 4,
        decoder: {
          readers: ['code_128_reader'],
        },
        area: { // defines rectangle of the detection/localization area
          top: "0%",    // top offset
          right: "0%",  // right offset
          left: "0%",   // left offset
          bottom: "0%"  // bottom offset
        },
        debug: {
          drawBoundingBox: false,
          showFrequency: false,
          drawScanline: false,
          showPattern: false
      },
      multiple: false,
        singleChannel: false
        // locate: true,
      },
      function(err) {
        if (err) {
          return console.log(err)
        }
        Quagga.start()
      },
    )
    Quagga.onDetected(this._onDetected)
  }

  componentWillUnmount() {
    console.log('dismont scaner...')
    Quagga.offDetected(this._onDetected);
  }

  _onDetected = result => {
    this.props.onDetected(result)
  }

  render() {
    return <>
      <div id="interactive" className="viewport" />

      <BarcodeReader
        onError={err=>console.log(`err`, err)}
        onScan={err=>alert(`code `, err)}
      />
      </>
  }
}

export default Scanner