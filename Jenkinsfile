node {
    env.NODEJS_HOME = "${tool '12.6'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    stage('Checkout Repo') {
    git branch: 'enriquegh-chrome-version', changelog: false, poll: false, url: 'https://github.com/enriquegh/wdio-performance-soft-transition-page.git'
    
    }
    stage('Install') {
        sh 'npm --version'
        sh 'node --version'
        sh 'npm install'
    }
    stage('Run tests') {
        sauce('c19998b0-da3d-474f-b008-ffe93a928c72') {
            sh 'npm test'
        }
    }
}
