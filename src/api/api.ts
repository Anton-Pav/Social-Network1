import axios from "axios";

const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {
            'API-KEY': '02966c83-5746-408b-bcc9-587459491eff'
        }
    }
);

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow (userId: number) {
       return instance.post(`follow/${userId}`)
    },
    unfollow (userId: number) {
        return  instance.delete(`follow/${userId}`)
    },
    getUserProfile(userId:string) {
        console.warn('Obsolete method. Please profileAPI object')
         return profileAPI.getUserProfile(userId)

    }
}

export const profileAPI = {
    getUserProfile(userId:string) {
        return instance.get(`/profile/ ${userId}`).then(response => response.data)
    },
    getStatus(userId:string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        debugger
        return instance.put(`profile/status`, {status: status})
    }
}
export const authAPI = {
    me() {
      return instance.get(`auth/me`)
    }
}

