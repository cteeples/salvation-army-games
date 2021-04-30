import React, {useContext, useState, useEffect} from 'react'
import {auth} from "../firebase"
import app from "../firebase"

const userRef = app.firestore().collection('users');
const commentRef = app.firestore().collection('comments');

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const  [currentUser, setCurrentUser] = useState()
    const [userInfo, setUserInfo] = useState()
    const [loading, setLoading] = useState(true)

    function signup(firstName, lastName, email, password) {
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            const userItem = {
                firstName: firstName,
                lastName: lastName,
            };

            return userRef.doc(cred.user.uid)
            .set(userItem)
            .catch((err) => {
                console.error(err);
              });
        })
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function getUserInfo() {
        var items = []

        userRef.doc(currentUser.uid).get().then(doc => {
            // doc.forEach(doc => {
            //     items.append(doc.data())
            // })
            // return doc.data()
            items.push(doc.data())
        })
        return items
    }

    function getComments() {
        var items = []

        commentRef.orderBy('date').onSnapshot(snap => {
            snap.forEach(item => {
                items.push(item.data())
            })
        })

        return items
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)       
        })

        return unsubscribe
    }, [])

    useEffect(() => {
        if (currentUser) {
            app.firestore().collection('users').doc(currentUser.uid).get().then(snapshot => {
                setUserInfo(snapshot.data())
            })
        }
    }, [currentUser])

    const value = {
        currentUser,
        userInfo,
        login,
        signup, 
        logout,
        resetPassword,
        getComments,
        getUserInfo,
        updateEmail,
        updatePassword
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}
