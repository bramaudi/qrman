<h1>Scan from WebCam:</h1>
<div>
    <b>Device has camera: </b>
    <span bind:this={camHasCamera}></span>
    <br>
    <video muted playsinline bind:this={video}></video>
</div>
<div>
    <select bind:this={inversionModeSelect}>
        <option value="original">Scan original (dark QR code on bright background)</option>
        <option value="invert">Scan with inverted colors (bright QR code on dark background)</option>
        <option value="both">Scan both</option>
    </select>
    <br>
</div>
<b>Detected QR code: </b>
<span bind:this={camQrResult}>None</span>
<br>
<b>Last detected at: </b>
<span bind:this={camQrResultTimestamp}></span>

<hr>

<h1>Scan from File:</h1>
<input type="file" bind:this={fileSelector}>
<b>Detected QR code: </b>
<span bind:this={fileQrResult}>None</span>

<script>
  import QrScanner from "../qr-scanner.min.js";
  QrScanner.WORKER_PATH = 'js/qr-scanner-worker.min.js';

  let video,
      camHasCamera,
      camQrResult,
      camQrResultTimestamp,
      fileSelector,
      fileQrResult,
      inversionModeSelect

  function setResult(label, result) {
    label.textContent = result;
    camQrResultTimestamp.textContent = new Date().toString();
    label.style.color = 'teal';
    clearTimeout(label.highlightTimeout);
    label.highlightTimeout = setTimeout(() => label.style.color = 'inherit', 100);
  }

  // ####### Web Cam Scanning #######

  QrScanner.hasCamera().then(hasCamera => camHasCamera.textContent = hasCamera);

  const scanner = new QrScanner(video, result => setResult(camQrResult, result));
  scanner.start();

  inversionModeSelect.addEventListener('change', event => {
    scanner.setInversionMode(event.target.value);
  });

  // ####### File Scanning #######

  fileSelector.addEventListener('change', event => {
    const file = fileSelector.files[0];
    if (!file) {
        return;
    }
    QrScanner.scanImage(file)
      .then(result => setResult(fileQrResult, result))
      .catch(e => setResult(fileQrResult, e || 'No QR code found.'));
  });
</script>
