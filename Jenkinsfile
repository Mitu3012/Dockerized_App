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
      steps {       
        sh '''

          i=1
          while [ $i -le 10 ]; do
            STATUS=$(docker inspect --format='{{.State.Health.Status}}' node-app)
            echo "Health status: $STATUS"
            
            if [ "$STATUS" = "healthy" ]; then
              echo "Container is healthy"
              exit 0
            fi
            
            i=$((i + 1))
            sleep 5
          done
          exit 1
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
