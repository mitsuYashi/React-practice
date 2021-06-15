import React, { useState } from 'react';
import firebase from 'firebase';
// import auth from 'firebase/auth';

export default function SignUp() {

    const [email, setEmail] = useState('')

    var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://www.example.com/finishSignUp?cartId=1234',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        dynamicLinkDomain: 'example.page.link'
    };


    const submitSignUp = () => {
        firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
            .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
        });
    }

    return (
        <div>
            <input type='text'></input>
            <input type='submit' value='登録'></input>
        </div>
    )
}