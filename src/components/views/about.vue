<!-- data from https://qduoj.com/FAQ i just achieve this page -->
<template>
    <div class="content">
        <div class="title">Frequently Asked Questions</div>
        <div class="precautions">
            <ul>
                <li class="li-item">
                    Where is the input and the output?<br>
                    Your program shall read input from <span class="special-span">stdin</span> ('Standard Input') and output to <span class="special-span">stdout</span> ('Standard output') For example,
                    you can use <span class="special-span">scanf</span> in C or <span class="special-span">cin</span> in C++ to read from stdin, and use <span class="special-span">printf</span> in C or <span class="special-span">span</span> in C++ to write stdout. User programs
                    are not allowed read of write files, or you will get a <span class="special-span">Runtime Error</span>.
                </li>
                <li class="li-item">
                    What's the meaning of the submission execution time?<br>
                    The online judge might testyour code multiple times with different input files, If your code gives the correct answer within the times
                    limit for each input file, the execution time displayed is the max of the time spent for each test case. Otherwise, execution time will have no sense.
                </li>
                <li class="li-item">
                    How can I use C++ Int64?<br>
                    You sould declare as <span class="special-span">long lnog</span> and use with <span class="special-span">cin/cout</span> or <span class="special-span">%lld</span>
                    , using <span class="special-span">__int</span> will result in <span class="special-span">Compile Erro</span>
                </li>
                <li class="li-item">
                    Java specifications?<br>
                    All programs must begin in a static main method in a <span class="special-span">Main</span> class. Do not use public classes:
                    Even <span class="special-span">Main</span> Must be non public to avoid compile error. Use buffered I/O to avoid time limit
                    execeeded due to excesive flushing.
                </li>
                <li class="li-item">
                    About presentation error?<br>
                    There is no presentation error in this oj. The judger will trim the blacks and wraps in your output's last line. if 
                    it's still different with the correct output. the result will be <span class="special-span">Wrong Answer</span>
                </li>
                <li class="li-item">
                    How to report bugs about thid oj?<br>
                    The onlinejudges is open source, you can open an issue in <a href="https://github.com/stevenshuang/oj-server">Github</a>
                     The details about a bug is required. which will help us a lot to solve the bug. Certainly, we are very pleased to merge your pull requests.
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.commit('setTabIndex', 5)
    }
}
</script>

<style scoped>
.content {
    margin: 30px 20px 30px 30px;
    padding-bottom: 10px;
}
.title {
    font-size: 21px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    text-align: start;
    margin-bottom: 5px;
    margin-top: 5px;
}
.special-span {
    background-color: rgb(238,238,238);
    text-align: center;
    border-radius: 5px;
}
.precautions {
    margin-left: 10px;
    margin-bottom: 10px;
}

.li-item {
    text-align: start;
    margin-bottom: 20px;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei;
}
</style>
