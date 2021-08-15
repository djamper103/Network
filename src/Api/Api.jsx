import React from "react";
import * as axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0",
        headers: {
            "API-KEY": "4db4fcd5-88d6-4771-a954-1866f008b5b7"
        }
    }
)

export const usersApi = {

    getUsers(currentPage = 1, pageSize = 10) {

        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(respone => {
                    return respone.data
                })
        )
    },

    followAxios(userId) {

        return (
            instance.post(`/follow/${userId}`)
        )
    },

    unFollowAxios(userId) {

        return (
            instance.delete(`/follow/${userId}`)
        )
    },

    loginAxios() {
        return (instance.get(`/auth/me`))
    },

}

export const ProfileApi = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatusAxios(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatusAxios(status) {
        return (
            instance.put(`/profile/status`, {status: status})
        )
    },

    savePhoto(photoFile) {

        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },

    saveProfileData(profile) {
        return (
            instance.put(`profile`,  profile)
        )
    },
}

export const LoginApi = {

    LoginAxios(email, password, rememberMe = false,captcha) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe,captcha})
        )
    },

    LogoutAxios() {
        return (
            instance.delete(`auth/login`)
        )
    },
}

export const SecurityApi = {

    securityCaptchaUrl() {
        return (
            instance.get(`/security/get-captcha-url`)
        )
    },
}


