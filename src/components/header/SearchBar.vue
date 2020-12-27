<template>
<div class="search-container">
<input class="search-box" type="text" /><button class="searchwenzi">搜索</button>
</div>
</template>

<script>
export default {
    name:"serachbar"
}
</script>
<style scoped>

.search-container{
        width: 80%;
        height: 100%;
        margin: 0px auto;
        color: #fff;
}
.search-box {
        width: 80%;
        height: 30px;
        border-color:rgb(255, 0, 51)
    }
.searchwenzi{
    width:60px;
    height:30px;
    border:2px;
    background-color:rgb(255, 0, 0);

}
</style>