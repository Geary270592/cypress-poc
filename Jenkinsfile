pipeline {
    agent any

    tools {nodejs "node"}

    environment {}

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm run test'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'npm run cypress'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
