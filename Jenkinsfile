pipeline{
  agent any

  stages{
    stage('Build Image') {
      steps{
        sh 'docker compose build'
      }
    }

    stage('Run') {
      steps{
        sh 'docker compose up -d'
      }
    }

    stage('Verify') {
      steps{
        sh '''
          sleep 10
          curl -f http://node-app:3000 || exit 1
          '''
      }
    }
  }

  post {
    success{
      echo "Successful"
    } 
    failure{
      echo "Build or Verification failed"
    }
    always{
      sh 'docker compose down'
    }
  }
}
