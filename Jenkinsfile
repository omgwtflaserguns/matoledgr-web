node {
    try{
        ws("${JENKINS_HOME}/jobs/${JOB_NAME}/builds/${BUILD_ID}/matomat-web") {


              stage('Checkout'){
                  echo 'Checking out from ' + env.BRANCH_NAME
                  checkout scm
              }

              stage('Get Dependencies'){
                  echo 'Getting dependencies'
                  sh 'npm install'
              }

              stage('Build'){
                  echo 'Building'
                  sh 'ng build --prod'
              }

              stage('Deploy'){

                  if (env.BRANCH_NAME == 'master') {
                      echo 'on master branch, deploy into test...'
                      // sh 'cp ./matomat-server /var/lib/jenkins/userContent/matomat-server'
                      // sh 'sudo /bin/sh /var/lib/jenkins/deployTest.sh'
                  }
                  else if (env.BRANCH_NAME == 'release') {
                      echo 'on release branch, deploy into production...'
                      // sh 'cp ./matomat-server /var/lib/jenkins/userContent/matomat-server'
                      // sh 'sudo /bin/sh /var/lib/jenkins/deployProd.sh'
                  }
                  else {
                      echo 'not on master or release, no deployment for you!'
                  }
              }

        }
    }catch (e) {
        currentBuild.result = "FAILED"
    } finally {
        notifyBuild(currentBuild.result)
    }
}

def notifyBuild(String buildStatus = 'STARTED') {
  // build status of null means successful
  buildStatus =  buildStatus ?: 'SUCCESSFUL'

  // Default values
  def colorCode = '#FF0000'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} <${env.BUILD_URL}|Job URL> - <${env.BUILD_URL}/console|Console Output>"

  if (buildStatus == 'STARTED') {
    colorCode = '#FFFF00'
  } else if (buildStatus == 'SUCCESSFUL') {
    colorCode = '#00FF00'
  } else {
    colorCode = '#FF0000'
  }

  // Send notifications
  slackSend (color: colorCode, message: summary)
}
