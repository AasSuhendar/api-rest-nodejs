node() {
  
  try{

    stage('Cleaning Workspace') {
        echo 'Initializing for clean build...'
        deleteDir()
    }
    
    stage('Initialize') {
        echo 'Initializing...'
        def node = tool name: 'nodejs-8.9.4', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        env.PATH = "${node}/bin:${env.PATH}"
    }

    stage('Checkout SCM') {
        echo 'Checkout SCM...'
        checkout scm
    }
  
    try{

        stage('Check Env') {
            echo 'Checking Environment...'
            sh 'node -v'
            sh 'npm -v'
        }

        stage('Build') {
            echo 'Building Dependency...'
            sh 'npm install'
        }
        stage('Testing'){
            echo 'Testing...'
            sh 'npm test'
        }
	
    }finally{
        stage('Reporting') {
            junit ' **/*.xml'
        }

        stage('SonarQube analysis') {
        
            def scannerHome = tool 'sonarqube-scanner';
            withSonarQubeEnv('sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner"
            }
        }

    
    }
    
  

  }catch(e){

    throw e;
  }
}
