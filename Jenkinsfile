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
          docker exec node_app curl -f http://localhost:3000
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
