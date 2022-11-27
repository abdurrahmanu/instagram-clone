<template>
    <div id="cont">
        <header>
            <div>Share</div>
            <router-link to="/message">
                <Cancel_btn id="cancel" />
            </router-link>
        </header>
        <div id="search">
            <span>To:</span>
            <input type="text" placeholder="Search">
        </div>
        <div id="suggested">
            <div>Suggested</div>
            <div id="not_found">No account found.</div>
        </div>
    </div>
</template>

<script setup>
import Cancel_btn from '../components/svg/cancel_btn.vue'

</script>

<style scoped>
    #cont {
        padding-top: 70px;
    }

    header {
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid gray;
        background: white;
        padding: 10px;
        height: 70px;
        align-items: center;
    }

    #search {
        border-bottom: 1px solid gainsboro;
        padding: 10px;
    }

    input {
        margin-left: 20px;
        width: 90%;
        border: none;
        outline: none;
        height: 50px;
    }

    #cancel {
        position: absolute;
        right: 10px;
        top: 20px;
    }

    #suggested {
        padding: 20px;
        display: grid;
        gap: 40px;
        font-weight: 800;
    }

    #not_found {
        color: gray;
        font-weight: 500;
    }
</style>