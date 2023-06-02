
import scheduleData from "./data.json";
import { onMount } from 'svelte';
import LZString from 'lz-string';

const URL_LENGTH_THRESHOLD = 2048; // Adjust the threshold as needed

function compressAndEncodeData() {
    const dataString = JSON.stringify(scheduleData);
    const encodedData = LZString.compressToEncodedURIComponent(dataString);
    console.log(encodedData);

    if (encodedData.length <= URL_LENGTH_THRESHOLD) {
        const appURL = `https://yourapp.com/schedule?data=${encodedData}`;
        alert(`URL Encoded Data:\n${appURL}`);
    } else {
        const blob = new Blob([compressedData], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        alert(`The schedule's size is too large to send over URL alone. Please download and send the file version instead.`);
        downloadLink.href = url;
        downloadLink.download = 'schedule.json';
        downloadLink.click();
    }
}

function handleDecompressClick() {
    const input = prompt('Paste the URL encoded data here:');
    if (input) {
        try {
            const url = new URL(input);
            const encodedData = url.searchParams.get('data');
            const decodedData = JSON.parse(LZString.decompressFromEncodedURIComponent(encodedData));
            console.log(decodedData);
        } catch (error) {
            console.error('Decompression error:', error);
        }
    }
};

let downloadLink;

onMount(() => {
    downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
});
