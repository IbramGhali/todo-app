pipeline {
    agent any
    tools {
        nodejs 'NodeJS_LTS' // Ensure this matches the name you used in the Jenkins configuration
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/IbramGhali/todo-app.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Code Quality Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build -t todo-app .'
                sh 'docker run -d -p 8080:8080 todo-app'
            }
        }
        stage('Release') {
            steps {
                echo 'Releasing to production environment'
                // Additional steps to promote the app to production
            }
        }
        stage('Monitoring and Alerting') {
            steps {
                echo 'Configuring monitoring and alerting'
                // Add steps to integrate with monitoring tools
            }
        }
    }
}
