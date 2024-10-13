pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository...'
                git 'https://github.com/malkamanuranga/hello-js-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'No dependencies to install for a basic JS app...'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the app...'
                // Add build commands here if applicable, e.g., minifying JS
            }
        }

        stage('Test') {
            steps {
                echo 'Running basic tests...'
                // Add test commands here if applicable
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the app...'
                // Add deployment commands here if applicable
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
