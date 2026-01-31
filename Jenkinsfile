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
      sh '''
        for i in {1..10}; do
          STATUS=$(docker inspect --format='{{.State.Health.Status}}' node_app)
          echo "Health status: $STATUS"
          [ "$STATUS" == "healthy" ] && exit 0
          sleep 5
        done
        exit 1
        '''
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
