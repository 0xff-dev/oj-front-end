<template>
    <div class="login-register-pannel">
        <div class="pannel-container">
            <div class="pannel-head">
                <span class="pannel-head-title">Welcome to OJ</span>
                <span @click="closePannel"><img class="login-register-icon" :src="closeIcon" ></span>
            </div>
            <div class="pannel-content">
                <div class="pannel-item">
                    <span class="icon-span"><img class="login-register-icon" :src="userIcon"></span>
                    <input class="input-span" type="text" placeholder="Username">
                </div>
                <div class="login-items" v-if="whichPannel==1">
                    <div class="pannel-item">
                        <span class="icon-span"><img class="login-register-icon" :src="lockIcon"></span>
                        <input class="input-span" type="password" placeholder="Password">
                    </div>
                    <div class="login-footer">
                        <button @click="login">Login</button>
                        <div class="regidter-or-forget-pwd">
                            <span @click="toRegister">Register now</span>
                            <span @click="forgetPwd">Forget Password?</span>
                        </div>
                    </div>
                </div>
                <div class="register-items" v-if="whichPannel==2">
                    <div class="pannel-item">
                        <span class="icon-span"><img class="login-register-icon" :src="emailIcon"></span>
                        <input class="input-span" type="password" placeholder="Email">
                    </div>
                    <div class="pannel-item">
                        <span class="icon-span"><img class="login-register-icon" :src="lockIcon"></span>
                        <input class="input-span" type="password" placeholder="Password">
                    </div>
                    <div class="pannel-item">
                        <span class="icon-span"><img class="login-register-icon" :src="lockIcon"></span>
                        <input class="input-span" type="password" placeholder="RePassword">
                    </div>
                    <div class="register-footer">
                        <button @click="register">Register</button>
                        <button @click="toLogin">Already registed? Login now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            userIcon: require(`../../assets/images/user.png`),
            emailIcon: require(`../../assets/images/mail.png`),
            lockIcon: require(`../../assets/images/lock.png`),
            closeIcon: require(`../../assets/images/close-circle.png`),
            whichPannel: this.show, // 1登录，2注册
        }
    },
    props: {
        show: {
            type: Number,
            required: true
        }
    },
    methods: {
        login: function() {
            alert("login success");
        },
        toRegister: function() {
            this.whichPannel = 2
        },
        toLogin: function() {
            this.whichPannel = 1
        },
        register: function() {

        },
        forgetPwd: function() {
            alert("forget password")
        },
        closePannel: function() {
            this.$emit('update:show', 0);
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
    z-index: 150;
    display: flex;
    justify-content: center;
    align-items: flex-start
}

.pannel-container {
    width: 450px;
    height: auto;
    margin-top: 10%;
    background-color: white;
    border-radius: 10px;
}

.pannel-head {
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
.pannel-content {
    height: auto;
    padding: 20px;
}

.pannel-item {
    border-radius: 5px;
    height: 35px;
    display: flex;
    border-radius: 10px;
    margin-bottom: 20px;
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
    border: none;
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
.regidter-or-forget-pwd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    color: rgb(73, 140, 233);
}

.regidter-or-forget-pwd span {
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
</style>