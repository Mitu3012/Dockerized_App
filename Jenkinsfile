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
