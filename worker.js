// Web Worker for heavy computation
// This runs on a separate thread, keeping the main thread responsive

self.addEventListener('message', function(e) {
    const result = performHeavyComputation();
    self.postMessage(result);
});

function performHeavyComputation() {
    let result = 0;
    // CPU-intensive task that previously blocked the main thread
    for (let i = 0; i < 1000000000; i++) {
        result += Math.sqrt(i) * Math.sin(i);
    }
    return result;
}