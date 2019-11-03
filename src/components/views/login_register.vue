<template>
    <div class="login-register-pannel">
        <div class="panel-container">
            <div class="panel-head">
                <span class="panel-head-title" v-if="whichPanel!=3" >Welcome to OJ</span>
                <span class="panel-head-title" v-if="whichPanel==3" >Lost Password</span>
                <span @click="closePanel"><img class="login-register-icon" :src="closeIcon" ></span>
            </div>
            <div class="panel-content">
                <div class="panel-item-container" v-if="whichPanel!=3">
                    <div class="panel-item">
                        <span class="icon-span"><img class="login-register-icon" :src="userIcon"></span>
                        <input class="input-span" type="text" placeholder="Username" v-model="username">
                    </div>
                    <span class="tip-span" v-show="!verificationUserName">{{usernameTip}}</span>
                </div>
                <div class="login-items" v-if="whichPanel==1">
                    <div class="panel-item-container">
                        <div class="panel-item">
                            <span class="icon-span"><img class="login-register-icon" :src="lockIcon"></span>
                            <input class="input-span" type="password" placeholder="Password">
                        </div>
                        <!-- login panel don't need tips -->
                        <span class="tip-span"></span>
                    </div>
                    <div class="login-footer">
                        <button @click="login">Login</button>
                        <div class="register-or-forget-pwd">
                            <span @click="toRegister">Register now</span>
                            <span @click="forgetPwd">Forget Password?</span>
                        </div>
                    </div>
                </div>
                <div class="register-items" v-if="whichPanel==2">
                    <div class="panel-item-container">
                        <div class="panel-item">
                            <span class="icon-span"><img class="login-register-icon" :src="emailIcon"></span>
                            <input class="input-span" type="text" placeholder="Email" v-model="email">
                        </div>
                        <span class="tip-span" v-show="!verificationEmail">{{emailTip}}</span>
                    </div>
                    <div class="panel-item-container">
                        <div class="panel-item">
                            <span class="icon-span"><img class="login-register-icon" :src="lockIcon"></span>
                            <input class="input-span" type="password" placeholder="Password" v-model="password">
                        </div>
                        <span class="tip-span" v-show="!verificationPassword">{{passwordTip}}</span>
                    </div>

                    <div class="panel-item-container">
                        <div class="panel-item">
                            <span class="icon-span"><img class="login-register-icon" :src="lockIcon"></span>
                            <input class="input-span" type="password" placeholder="RePassword">
                        </div>
                        <span class="tip-span" v-show="!verificationRePassword">{{rePasswordTip}}</span>
                    </div>
                    <div class="register-footer">
                        <button @click="register">Register</button>
                        <button @click="toLogin">Already registered? Login now</button>
                    </div>
                </div>
                <div class="register-items" v-if="whichPanel==3">
                    <div class="panel-item-container">
                        <div class="panel-item">
                            <span class="icon-span"><img class="login-register-icon" :src="emailIcon"></span>
                            <!--  增加正则的验证 -->
                            <input class="input-span" type="text" placeholder="Email">
                        </div>
                    </div>
                    <div class="register-footer">
                        <!-- 检查邮箱是否选在的接口 -->
                        <button @click="register">submit to send email</button>
                        <button @click="toLogin">Get your password? Login now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
import {domain, apiVersion, ojApis} from '../router/apis.js'

export default {
    data: function() {
        return {
            userIcon: require(`../../assets/images/user.png`),
            emailIcon: require(`../../assets/images/mail.png`),
            lockIcon: require(`../../assets/images/lock.png`),
            closeIcon: require(`../../assets/images/close-circle.png`),
            //  添加用户名，邮箱，密码的验证, 验证主要是对注册部分，以及忘记密码部分
            username: "",
            email:"",
            password:"",
            rePassword:"",
            // 正则验证部分
            usernameTip: "4到16位(字母，数字，下划线，减号),字母开头", 
            emailTip: "email tip",
            passwordTip: "6-16位(至少1数字2大写字母2小写字母1特殊字符)",
            rePasswordTip: "密码不一致",
        }
    },
    computed: {
        whichPanel() {
            return this.$store.state.panelStatus
        },
        verificationUserName(){
            // 再发请求验证用户名是否存在?
            if(this.username === "") return true
            return /^[a-zA-Z][a-zA-Z0-9_-]{1,16}$/.test(this.username)
        },
        verificationEmail(){
            if(this.email === "") return true
            return /^([a-zA-Z0-9_.]+@([a-zA-Z0-9_])+\.(com|cn))/.test(this.email)
        },
        verificationPassword(){
            if(this.password === "") return true 
            return /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{2,})(?=.*[a-z]{2,})(?=.*[!@#$%^&*?()]).*$/.test(this.password)
        },
        verificationRePassword(){
            if(this.rePassword === "") return true
            return this.rePassword === this.password
        }
    },
    methods: {
        resetData(){
            this.username = ""
            this.email = ""
            this.password = ""
            this.rePassword = ""
        },
        login () {
            if(this.verificationUserName && this.verificationPassword) {
                Axios.post(domain+apiVersion+ojApis.login, {"username": this.username, "password": this.password}).then(
                    resp => {
                        if(resp.status === 200) {
                            window.console.log(resp.data)
                            this.$store.commit('setUserToken', resp.data.token)
                            this.$store.commit('setUserInfo', resp.data.userinfo)
                            window.localStorage.setItem('user_token', resp.data.token)
                            this.closePanel()
                        }
                    }
                ).catch(error => {
                    alert(error)
                })
            }
        },
        toRegister: function () {
            this.resetData()
            this.$store.commit('setPanelStatus', 2)
            this.resetTips()
        },
        toLogin: function () {
            this.resetData()
            this.$store.commit('setPanelStatus', 1)
            this.resetTips()
        },
        register: function () {

        },
        forgetPwd: function () {
            this.resetData()
            this.$store.commit('setPanelStatus', 3)
            this.resetTips()
            alert("forget password")
        },
        closePanel: function () {
            this.$store.commit('setPanelStatus', 0)
        },
        resetTips(){
            this.usernameTip = "", this.emailTip = ""
            this.passwordTip = "", this.rePasswordTip = ""
        }
    }
}
</script>

<style scoped>
.login-register-pannel {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    min-width: 1000px;
    background-color: rgba(128, 128, 128, 0.7);
    z-index: 300;
    display: flex;
    justify-content: center;
    align-items: flex-start
}

.panel-container {
    width: 450px;
    height: auto;
    margin-top: 10%;
    background-color: white;
    border-radius: 10px;
}

.panel-head {
    display: flex;
    padding: 0 15px;
    height: 50px;
    border-bottom: rgb(233,234,236) 1px solid;
    justify-content: space-between;
    align-items: center;
}

.login-register-icon {
    width: 15px;
    height: 15px
}
.panel-content {
    height: auto;
    padding: 20px;
}

.panel-item-container {
    height: 50px;
    width: 100%;
    margin-bottom: 10px;
    text-align: start;
}
.panel-item {
    height: 35px;
    display: flex;
    border-radius: 10px;
}

.icon-span {
    height: 100%;
    line-height: 100%;
    width: 30px;
    background-color: rgb(238, 238, 238);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(221,222,225);
}

.input-span {
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0 5px;
    font-size: 16px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid rgb(221,222,225);
}
.input-span:hover {
    border: 1px solid rgb(104,165,237);
}

button {
    height: 35px;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    background-color: rgb(73, 140, 233);
    color: white;
    outline: none;
    cursor: pointer;
}
button:hover {
     background-color: rgb(105, 163, 237);
}
.register-or-forget-pwd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    color: rgb(73, 140, 233);
}

.register-or-forget-pwd span {
    outline: none;
    cursor: pointer;
}

.register-footer button:last-child {
    margin-top: 10px;
    background-color: white;
    border: 1px solid rgb(221,222,225);
    color: black;
}
.register-footer button:last-child:hover {
    border: 1px solid rgb(123,165,237);
    color: rgb(123,165,237);
}
.tip-span {
    margin-left:10px;
    color:red
}
</style>
