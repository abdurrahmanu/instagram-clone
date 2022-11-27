<template>
    <div id="cont">
        <div id="status">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<style scoped>
        #status {
            background: rgb(223, 214, 214);
            width: 100%;
            height: 100vh;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-content: space-around;
            gap: 10px;
            padding: 20px 10px;
        }

        #status div {
            height: 5px;
            background: gray;
            border-radius: 5px;
        }
</style>