// Import stylesheets
import "./style.css"

// 0. Import LIFF SDK
import liff from "@line/liff"

// Body element
const body = document.getElementById("body")


// Profile elements
const pictureUrl = document.getElementById("pictureUrl")
const userId = document.getElementById("userId")
const displayName = document.getElementById("displayName")
const statusMessage = document.getElementById("statusMessage")
const email = document.getElementById("email")


// Button elements
const btnSend = document.getElementById("btnSend")
const btnClose = document.getElementById("btnClose")
const btnShare = document.getElementById("btnShare")
const btnLogIn = document.getElementById("btnLogIn")
const btnLogOut = document.getElementById("btnLogOut")
const btnScanCode = document.getElementById("btnScanCode")
const btnOpenWindow = document.getElementById("btnOpenWindow")

// QR element
//const code = document.getElementById("code")
//const friendShip = document.getElementById("friendShip")

async function main() {
  // Initialize LIFF app)
  //Background color
  liff.ready.then(() => {
    if (liff.getOS() === "android") {
      body.style.backgroundColor = "#888888"
    }
    if (liff.isInClient()) {
      getUserProfile()
    }
    btnShare.style.display = "block"
  })
  
  // Try a LIFF function
  await liff.init({liffId: "1657587854-obzNzJdz"})
}
main();

async function getUserProfile() {
  const profile = await liff.getProfile()
  pictureUrl.src = profile.pictureUrl
  userId.innerHTML = "<b>userId: </b> " + profile.userId
  displayName.innerHTML = "<b>displayName: </b> " + profile.displayName
  statusMessage.innerHTML = "<b>statusMessage: </b> " + profile.statusMessage
  email.innerHTML = "<b>email: </b> " + liff.getDecodedIDToken().email
}

async function shareMsg(){
  const result = await liff.shareTargerPicker([
    {
      type: "text",
      text: "This msg was shared by LIFF"
    }
  ])
  if (result) {
    alert("Msg was shared!")
  } else {
    alert("shareTargetPiker was cancelled bu user")
  }
  llff.closeWindow()
}
btnShare.onclick = () => {
  shareMsg()
}