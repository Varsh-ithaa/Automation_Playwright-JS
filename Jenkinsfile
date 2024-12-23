// import groovy.text.StreamingTemplateEngine
// def globalDate = new Date();
// def timeInHours = globalDate.getHours();
// def timeInMinutes globalDate.getMinutes();
// def executionFlag = true;
// def genTodaysDay() {
//     def date= new Date();
//     Calendar calendar Calendar.getInstance();
//     calendar.setTime(date);
//     println "Current Minutes"+date.getMinutes();
//     def day calendar.get(Calendar.DAY_OF_WEEK)
    
//     def map=[
//         1: "Sunday",
//         2: "Monday",
//         3: "Tuesday",
//         4: "Wednesday",
//         5: "Thursday",
//         6: "Friday",
//         7: "Saturday"]
        
//         println "Todays Day: "+map[day]
//         return map[day];
// }

// pipeline 
// {
//     agent any

//     parameters {

//         choice (name: 'Environment', choices: ['e2e', 'e2e4', 'mock', 'drh'], description: '')
        
//         booleanParam(name: 'shakeout-SIT', defaultValue: false, description: '')
        
//         booleanParam(name: 'dss_asw_e2e', defaultValue: false, description: '')

//         booleanParam(name: 'Sanity', defaultValue: false, description: '')
        
//         booleanParam(name: 'Regression', defaultValue: false, description: '')
        
//         booleanParam(name: 'HealthCheck', defaultValue: true, description: '')

//         booleanParam(name: 'Paper_Form', defaultValue: false, description: '')
        
//         booleanParam(name: 'shakeout_SIT_Parallel', defaultValue: false, description: ' ')
        
//         booleanParam(name: 'shakeout_SIT_Parallel_Rerun', defaultValue: false, description: ' ')
        
//         booleanParam(name: 'shakeout_SIT_Run_Tags', defaultValue: false, description: ' ')
        
//         booleanParam(name: 'shakeout_SIT_Rerun_Tags_Failure', defaultvalue: false, description: description:'')
        
//         string(name: 'userTag', defaultValue: '', description: 'Enter Tag which you want to run')
//     }

//     //triggers
//     // {
//     //cron('20  H(8-20)/4 * * 1-5'+'\n 59 3 * * ')
//     //cron('40 H(8-15)/4 * * 1-5'+'\n 25 H(8-15)/4 * * 1-5'+'\n 10 16 * * *')
//     // }

// stages {
//     stage ('Clean Install'){
//         environment {
//             PUPPETEER_SKIP_DOWNLOAD = true
//             }
//             steps{
//                 sh "npm i"
//                 sh 'mkdir -p node_modules/puppeteer/.local-chromium/browser/'
//                 sh 'tar -xvzf lib/Linux_x64_818858_chrome-linux.tar.gz -C node_modules/puppeteer/.local-chromium/'
//                 // sh '/app/oacb/node-v10.14.0-linux-x64/bin/yarn run report:clean'
//                 script {println "Todays Day:" +genTodaysDay()}
//             }
//     }
//     stage('Specific Tag Test Execution')
//     {
//         when { expression {params.userTag I=''}}
//         steps {
//             script
//             {
//                 if(params.userTag 'shakeout-SIT')
//                 {
//                     env. TAG_NAME = "shakeout-SIT"
//                 }
//                 else if(params.userTag 'Sanity')
//                 {
//                     env.TAG NAME "Sanity-Test"
//                 }
//                 else if(params.userTag == 'Health-Check')
//                 {
//                     env.TAG NAME "Health-Check"
//                 }
//                 else
//                 {
//                     env.TAG_NAME "Other-Tags"
//                 }
//                  sh "export NODE_ENV-$(params.Environment) && no_proxy=*transactive*&& yarn run tags_sit_jenkins (params.userTag) || true"
//                  sh 'exit 0'
//             }
//         }
// }

// stage ('Test Execution')
// {
//     parallel
//     {
//         stage('SIT Execute Test')
//         {
//             when {
//                 expression
//                 {
//                     params.shakeout_SIT
//                 }
//             }
//             steps
//             {
//                 script
//                 {
//                     env.TAG NAME "shakeout-SIT"
//                     sh "export NODE ENV-S(params.Environment)&& http_proxy-http://PXYAU301MELC002.ecorptst.anz.com:8888 yarn run tags sit_jenkins @shakeout-SIT || true"
//                     sh 'exit o'
//                 }
//             }
//         }
//         stage('ASW-E2E - Execute Test')
//         {
//             when
//             {
//                 expression
//                 {
//                     params.dss_asw_e2e;
//                 }
//             }
//             steps
//             {
//                 script
//                 {
//                     env.TAG NAME="DSS-ASW-E2E"
//                     sh "export NODE ENV-S (params.Environment)&& yarn run tags sit asutep @dss-asw-eze || true"
//                     sh 'exit 0'
//                 }
//             }
//         }
//         stage('Sanity Test') 
//         {
//             when
//             {
//                 expression 
//                 {
//                     params.Sanity 
//                 }
//             } 
//             steps 
//             { 
//                 script 
//                 { 
//                     env.TAG_NAME "Sanity-Test"; 
//                     sh "export NODE_ENV=$(params.Environment) && yarn run tags_sit_jenkins @Sanity || true" 
//                     sh 'exit 0' 
//                 }
//             }
//         }
//         stage('Timer Triggered_Jobs') 
//         { when 
//             {
//                 triggeredBy 'TimerTrigger'
//             }
//             steps 
//             {
//                 script 
//                 {
//                     if((timeInMinutes--59) && executionFlag) 
//                     {
//                         executionFlag = false;

// env.TAG_NAME = "shakeout-SIT";

// sh "export NODE_ENV=e2e && yarn run tags_sit_jenkins @shakeout-SIT"

// sh 'exit 0'

// }

// if((timeInMinutes==40) && executionFlag)
// {
//     executionFlag = false;
//     env.TAG_NAME = "Health-Check";
//     sh "export NODE_ENV=e2e4 && yarn run tags_sit_jenkins @Health-Check"
//     sh 'exit 0'
// }
// if((timeInMinutes==20) && executionFlag)
// {
//     executionFlag = false;
//     env.TAG_NAME = "Health-Check";
//     sh "export http_proxy=http://PXYAU301MELC002.ecorptst.anz.com:80"
//     sh "export no_proxy=.transactive."
//     sh "export NODE_ENV=e2e && yarn run tags_sit_jonkins @Health-Check"
//     sh 'exit 0'
// }
//                 }
//             }
//         }
//     }
// }
// stage('Health - check')
// {
//     when{

//         expression
//         {
//             params.HealthCheck
//         }
//     }
//     steps{
//         retry(1)
//         {
//             script{
//                 env.TAG_NAME ="Health -Check";
//                 sh "export NODE_ENV=${params.Environment}&& http_proxy=http://PXYAU301MELC002.ecorptst.anz.com:80"
//                 sh 'exit 0'
//             }
//         }
//     }
// }
// stage('shakeout-SIT-Rerun-Tags-Failure')
// {
//     when{
//         expression
//         {
//            params.shakeout_SIT_Rerun_Tags_Failure
//         }
//     }
//     steps{
//         script
//         {
//             env.TAG_NAME ="shakeout-SIT";
//             sh "export NODE_ENV=$(params.Environment) && yarn run tags_sit_jenkins @Sanity || true" 
//             sh 'exit 0'
//         }
//     }
// }
// }
// post {

// }
