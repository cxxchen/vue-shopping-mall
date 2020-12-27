<template>
    <!-- 登录页面 -->
    <div>
        <SearchBar></SearchBar>
        <Row class="container">
            <i-col span="12" offset="2" class="signup-img-box">
            <img src="static/img/signup-sale.png" alt="">
      </i-col>
            <i-col span="6">
                <div></div>
            </i-col>
            <i-col span="8" class="login-box">
                <div class="login-container">
                    <div class="login-header">
                        <p>欢迎登录</p>
                    </div>
                    <div class="form-box">
                        <Form ref="formInline" :model="formDate" :rules="ruleInline">
                            <FormItem prop="username">
                                <i-input type="text" v-model="formDate.username" clearable size="large" placeholder="用户名">
                                    <Icon type="person" slot="prepend"></Icon>
                                </i-input>
                            </FormItem>
                            <FormItem prop="password">
                                <i-input type="password" v-model="formDate.password" clearable size="large" placeholder="密码">
                                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                                </i-input>
                            </FormItem>
                            <FormItem>
                                <Button type="error" class="login-button" size="large" @click="handleSubmit('formInline')" long>
                                登录
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </i-col>
            <i-col span="6">
                    <div></div>
            </i-col>
        </Row>
        <Footer></Footer>
    </div>
</template>

<script>
    import SearchBar from './header/SearchBar.vue';
    import store from '@/vuex/store';
    import {mapMutations, mapActions} from 'vuex';
    import Footer from './footer/Footer.vue';

    export default {
        name: 'Login',
        data() {
            return {
                formDate: {
                    username: '',
                    password: ''
                },
                ruleInline: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            ...mapMutations(['SET_USER_LOGIN_INFO']),
            ...mapActions(['login']),
            handleSubmit(name) {
                const father = this;
                console.log(this.formDate.username);
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.login(father.formDate).then(result => {
                            if (result) {
                                this.$Message.success('登录成功');
                                father.$router.push('/');
                            } else {
                                this.$Message.error('用户名或密码错误');
                            }
                        });
                    } else {
                        this.$Message.error('请填写正确的用户名或密码');
                    }
                });
            }
        },
        components:{
           SearchBar,
           Footer
        },
        store
    };
</script>

<style scoped>
   .signup-img-box {
       height: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
}  
   .signup-img-box>img {
       height: 80%;
}
    .container {
       margin: 15px auto;
       height: 500px;
       overflow: hidden;
    }

    .login-img-box {
        height: 485px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login-img-box > img {
        width: 68%;
    }

    .login-box {
        height: 485px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login-container {
        width: 80%;
        height: 280px;
        border: #e91212 solid 1px;
    }

    .login-header {
        height: 50px;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
        letter-spacing: 5px;
        color: #fff;
        background-color: #dd2a2a;
    }

    .login-button {
        background-color: #dd2a2a;
        border: #129ae9 solid 1px;
    }

    .form-box {
        width: 80%;
        margin: 30px auto;
    }
</style>
