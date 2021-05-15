/*! Licenses of used libraries, fonts and other software can be found at /lib-licenses.txt */
import{a as e}from"./vendor.a325d5f6.js";import{D as t}from"./DetailsWrapper.e331fc28.js";import{R as r}from"./Remote.45995b48.js";import"./TextContainer.26dd32e7.js";var a="s1xdvx";export default()=>e(t,null,e(t.Img,{className:a},e(r,null)),e(t.Body,null,e("q",null,"Remote Control")," is a simple app you can install on your computer. It allows you to control media playback via a simple web app, that connects to your device. This way you can play or pause videos, alter their loudness or select a new film on a streaming platform.",e("br",null),"The application you install on your computer is a simple program, written in Rust, that hosts a server on the local network. The server is implemented using the Rust library"," ",e("a",{href:"https://rocket.rs/",target:"_blank",rel:"noopener noreferrer"},"Rocket"),". It exposes endpoints, that when requested, issue commands to the operating system. Using the libraries"," ",e("a",{href:"https://docs.rs/enigo/0.0.14/enigo/",target:"_blank",rel:"noopener noreferrer"},"Enigo")," ","and"," ",e("a",{href:"https://docs.rs/winapi/0.3.9/winapi/",target:"_blank",rel:"noopener noreferrer"},"WinAPI"),", keyboard or mouse input can be simulated. This way, the app can control media loudness or playback by virtually pressing media keys.",e("br",null),"The app also serves a web app, that can be accessed with a smartphone, that is connected to the same network as the host computer. The web app is implemented using the JavaScript frontend framework"," ",e("a",{href:"https://svelte.dev/",target:"_blank",rel:"noopener noreferrer"},"Svelte"),". It features three screens. First, a screen with buttons, with which the most basic media playback options can be controled. Playback can be paused and resumed, the loudness can be altered and tracks can be skipped. Second, a trackpad to move the mouse, click and scroll the screen. And last a settings page, which allows the user to change the app' color scheme and fine tune the experience.",e("br",null),e("br",null),"Checkout the projects"," ",e("a",{href:"https://github.com/mefechoel/remote-control",target:"_blank",rel:"noopener noreferrer"},"GitHub repository"),"."));
